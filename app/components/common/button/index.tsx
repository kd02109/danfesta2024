'use client';

import { cn } from '@/app/lib/utils';
import { cva } from 'class-variance-authority';
import { MotionProps, motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import PulseLoader from 'react-spinners/PulseLoader';

import { variants } from './motion';

export type ButtonProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button';
  to?: string;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'transparent' | 'bottom';
  animateOnClick?: boolean;
};

export const buttonVariants = cva(
  'w-full rounded-md h-12 px-4 flex items-center justify-center transition-colors duration-200',
  {
    variants: {
      variant: {
        filled: 'bg-primary text-neutral-50',
        outlined: 'border border-primary',
        transparent:
          'text-neutral-500 dark:text-neutral-500 bg-white dark:bg-[#0C0C0C] dark:active:bg-[#1C1C1C]',
        bottom:
          'absolute bottom-5 mx-auto w-[calc(100%-2.5rem)] bg-primary text-neutral-50',
      },
      disabled: {
        true: 'bg-neutral-500',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
      disabled: false,
    },
  },
);

export default function Button({
  className,
  children,
  variant = 'filled',
  type = 'button',
  onClick,
  animateOnClick = true,
  isLoading = false,
  disabled,
}: ButtonProps) {
  const { formState } = useFormContext();
  const { isSubmitting, isValid, isDirty } = formState;
  const motionProps = {
    variants: variants.button,
    initial: 'initial',
    whileTap: animateOnClick ? 'dimmedAndSmaller' : 'dimmed',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={!isValid || !isDirty || isSubmitting || isLoading || disabled}
      className={cn(buttonVariants({ variant, disabled }), className)}
      {...motionProps}
    >
      {isLoading ? (
        <PulseLoader role="status" size={8} color="#f0f0f0" />
      ) : (
        children
      )}
    </motion.button>
  );
}
