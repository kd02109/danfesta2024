import { Toaster } from '@components/ui/sonner';
import { CookiesProvider } from 'next-client-cookies/server';
import NextTopLoader from 'nextjs-toploader';
import { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <CookiesProvider>
      <NextTopLoader color="#0262E9" showSpinner={false} shadow={false} />
      <Toaster position="top-center" />
      {children}
    </CookiesProvider>
  );
}
