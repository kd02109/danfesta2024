'use client';

import { If } from '@/app/components/util';
import {
  ErrorTile,
  Keypad,
  type QRScanResult,
  QrReader,
  StudentInfo,
} from '@components/admin';
import { checkAdminPassword } from '@components/admin/action';
import { BottomSheet, Button } from '@components/common';
import { useBottomSheet } from '@hooks/.';
import DanfestaLogo from '@icons/logo-white.svg';
import Glass from '@images/glass.jpeg';
import { CustomError, ErrorCause, throttle } from '@lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

import {
  TicketInfo,
  getTicketInfoByAdmin,
  getTicketInfoById,
  issueTicket,
  resendSMSCode,
} from './action';

export default function TicketManage() {
  const [scannerPaused, setScannerPaused] = useState(false);
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, open, close] = useBottomSheet();

  const resendSMS = async () => {
    if (ticketInfo?.id === undefined) return;

    try {
      if (ticketInfo === null) return;
      const code = await resendSMSCode(ticketInfo.id);
      const newTicketInfo: TicketInfo = { ...ticketInfo, code };
      setTicketInfo(newTicketInfo);
      toast.success('인증 코드를 재전송했습니다.');
    } catch (e) {
      const err = e as Error;
      toast.error(err.message);
    }
  };

  const onScan = throttle(async ({ data }: QRScanResult) => {
    if (!data) return;
    if (ticketInfo !== null) return;

    const jwtRegex = /^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/;
    if (!jwtRegex.test(data)) return;
    setScannerPaused(true);
    try {
      const ticketInfo = await getTicketInfoByAdmin(data);
      setTicketInfo(ticketInfo);
    } catch (e) {
      const err = e as Error;
      setError(err.message);
    }
  });

  const getInfo = async (data: string) => {
    setScannerPaused(true);
    try {
      const ticketInfo = await getTicketInfoById(Number(data));
      setTicketInfo(ticketInfo);
    } catch (e) {
      const err = e as Error;
      setError(err.message);
    }
  };

  const onSubmit = (value: string) => {
    if (value === ticketInfo?.code) {
      open();
    } else {
      toast.error('인증 코드가 일치하지 않습니다.');
    }
  };

  const onAdminPasswordSubmit = async (value: string) => {
    if (ticketInfo?.id === undefined) return;
    try {
      const authorized = await checkAdminPassword(value);
      if (!authorized) {
        throw new CustomError(
          ErrorCause.NOT_AUTHORIZED,
          '관리자 권한이 없습니다.',
        );
      }

      await issueTicket(ticketInfo.id);
      toast.success('티켓이 발급되었습니다.');
      reset();
      close();
    } catch (e) {
      const err = e as Error;
      toast.error(err.message);
    }
  };

  const reset = () => {
    setScannerPaused(false);
    setTicketInfo(null);
    setError(null);
    close();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <QrReader onScan={onScan} paused={scannerPaused} />
        <div className="overflow-hidden rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-900 flex flex-col justify-between items-center relative">
          {!error && <StudentInfo info={ticketInfo} />}
          {error && <ErrorTile error={error} />}
          <Button
            className="absolute bottom-8 left-8 right-8 w-auto"
            onClick={reset}
            disabled={!scannerPaused && ticketInfo === null && error === null}
          >
            초기화
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
          <If condition={ticketInfo === null}>
            <If.Then>
              <Keypad
                slot={5}
                onSubmit={getInfo}
                title="티켓 아이디를 입력해주세요."
              />
            </If.Then>
            <If.Else>
              <Keypad
                onSubmit={onSubmit}
                title="SMS로 받은 인증 코드를 입력 해주세요."
                button={
                  <Button
                    className=" bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300 w-auto px-12 mt-2"
                    onClick={resendSMS}
                  >
                    재전송
                  </Button>
                }
              />
            </If.Else>
          </If>
        </div>
        <div className="hidden overflow-hidden rounded-2xl bg-neutral-900 col-span-2 relative">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-3 items-center text-neutral-100">
            <DanfestaLogo />
            <h1 className="text-4xl font-bold">DANFESTA</h1>
          </div>
          <Image
            src={Glass}
            alt="glass"
            className="absolute -top-[3.125rem] -right-[8rem] mix-blend-difference"
          />
        </div>
      </div>
      <BottomSheet
        isOpen={isOpen}
        onDismiss={reset}
        height="2/3"
        className="bg-neutral-100"
      >
        <Keypad
          password
          slot={4}
          onSubmit={onAdminPasswordSubmit}
          title="관리자 비밀번호를 입력해주세요."
        />
      </BottomSheet>
    </>
  );
}
