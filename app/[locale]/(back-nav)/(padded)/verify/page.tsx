'use client';

import { post } from '@app/api';
import { useBottomSheet } from '@app/hooks';
import { BottomSheet, Button, Form, ID, Password } from '@components/common';
import { Funnel, Header, TransformerSubtitle } from '@components/signup';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { API_ROUTES, COOKIE_KEYS } from '@lib/constants';
import { useRouter } from '@lib/navigation';
import { type SearchParams } from '@lib/types';
import { APIError, isStudentId } from '@lib/utils';
import { AnimatePresence } from 'framer-motion';
import { useCookies } from 'next-client-cookies';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import { DKUVerificationSchema, dkuVerificationSchema } from './schema';

const steps = ['학번', '비밀번호', '약관동의'] as const;

type DKUResponse = {
  signupToken: string;
  student: {
    studentName: string;
    studentId: string;
    age: string;
    gender: string;
    major: string;
  };
};

type Steps = (typeof steps)[number];

export default function VerifyPage({
  searchParams: { reverify },
}: SearchParams<{ reverify?: string }>) {
  const [step, setStep] = useState<Steps>('학번');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isOpen, openBT, closeBT] = useBottomSheet();
  const passwordRef = useRef<HTMLInputElement>(null);
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const locale = useLocale();
  const router = useRouter();
  const cookies = useCookies();

  const verify = async (dkuData: DKUVerificationSchema) => {
    try {
      setIsLoading(true);
      const { signupToken } = await post<DKUVerificationSchema, DKUResponse>(
        API_ROUTES.user.dku.verify,
        dkuData,
      );
      setToken(signupToken);
      onNext(steps[currentStep]);
    } catch (error) {
      const message = error as APIError;
      toast.error(message.message);
    } finally {
      setIsLoading(false);
    }
  };

  const reVerify = async (dkuData: DKUVerificationSchema) => {
    try {
      setIsLoading(true);
      await post<DKUVerificationSchema, {}>(
        API_ROUTES.user.dku.reverify,
        dkuData,
      );
      cookies.set(COOKIE_KEYS.verified, 'true');
      toast.success('재인증이 완료되었습니다.');
      router.push('/');
    } catch (error) {
      const message = error as APIError;
      toast.error(message.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (dkuData: DKUVerificationSchema) => {
    switch (step) {
      case '학번':
        onNext(step);
      case '비밀번호':
        reverify ? reVerify(dkuData) : verify(dkuData);
        break;
      case '약관동의':
        router.push(`/sms?type=signup&token=${token}`);
    }
  };

  const onNext = (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '학번') {
      setStep('비밀번호');
    } else if (currentStep === '비밀번호') {
      setStep('약관동의');
      openBT();
    }
  };

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
    });
    return () => cancelAnimationFrame(t);
  }, [step]);

  return (
    <AnimatePresence initial={false}>
      <Header>
        <Header.Title>단국대학교 재학생 인증</Header.Title>
        <Header.Subtitle>
          {step !== '약관동의' ? (
            <>
              <Header.Transformer step={step} steps={steps} />
              <div>입력해주세요.</div>
            </>
          ) : (
            <TransformerSubtitle>약관에 동의해주세요.</TransformerSubtitle>
          )}
        </Header.Subtitle>
      </Header>
      <Form
        onSubmit={handleSubmit}
        schema={dkuVerificationSchema}
        validateOn="onChange"
      >
        <Funnel<typeof steps> step={step} steps={steps}>
          <Funnel.Step name="비밀번호">
            <Password
              ref={passwordRef}
              name="dkuPassword"
              label="단국대학교 포털 비밀번호"
              placeholder="8자 이상의 영문, 숫자"
            />
          </Funnel.Step>
          <Funnel.Step name="학번">
            <ID
              name="dkuStudentId"
              label="단국대학교 포털 아이디"
              placeholder="숫자 8자리"
              onChange={async (event) => {
                if (isStudentId(event.target.value) && step === '학번') {
                  onNext(steps[currentStep]);
                }
                return event.target.value;
              }}
            />
          </Funnel.Step>
        </Funnel>

        <BottomSheet
          isOpen={isOpen}
          header="이용동의"
          onDismiss={() => {
            setStep('비밀번호');
            closeBT();
          }}
        >
          <Terms />
          <Button type="submit" isLoading={isLoading} variant="filled">
            동의
          </Button>
        </BottomSheet>

        <Button type="submit" variant="bottom">
          다음
        </Button>
      </Form>
    </AnimatePresence>
  );
}

function Terms() {
  return (
    <Accordion type="single" collapsible className="w-full mb-10 text-sm">
      <AccordionItem value="item-1">
        <AccordionTrigger>어떤 정보를 제공해야 하나요?</AccordionTrigger>
        <AccordionContent>
          단페스타 2024 서비스를 이용하기 위해서는 다음과 같은 정보를
          제공해야합니다.
          <ul>
            <li> - 학번</li>
            <li> - 단국대학교 포털 비밀번호</li>
            <li> - 전화번호</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>제공한 정보는 어디에 사용되나요?</AccordionTrigger>
        <AccordionContent>
          제공된 정보는 단페스타 2024 서비스 이용을 위한 목적으로만 사용되며
          다른 목적으로 사용되지 않습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>포털 비밀번호도 제공해야 하나요?</AccordionTrigger>
        <AccordionContent>
          단국대학교 포털 비밀번호는 학생 인증을 위한 목적으로만 사용되며 즉시
          삭제됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}