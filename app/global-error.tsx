'use client';

import { Link } from '@components/common';
import * as Sentry from '@sentry/nextjs';
import { NextIntlClientProvider } from 'next-intl';
import Error from 'next/error';
import { useEffect } from 'react';

export type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex h-[100dvh] w-full flex-col items-center justify-center">
          <h2 className="text-xl">에러!</h2>
          <NextIntlClientProvider locale="ko">
            <Link href="/" variant="bottom">
              홈으로
            </Link>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
