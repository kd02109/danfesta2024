import { IntlProvider, Link } from '@components/common';
import LocaleSwitcher from '@components/common/locale-switcher';
import { Card } from '@components/ui/card';
import { getTranslations } from 'next-intl/server';
import { FaExclamation, FaGear } from 'react-icons/fa6';

export default async function UnderConstruction() {
  const t = await getTranslations('UnderConstruction');
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <section className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold flex gap-2 items-center">
          <Link href="/jeomshim" className="w-auto">
            <FaGear className="animate-spin" />
          </Link>
          {t('title')}
        </h1>
        <p className="text-sm mt-2 max-w-[400px] text-neutral-500 text-center">
          {t.rich('description', {
            br: () => <br />,
          })}
        </p>
      </section>
      <Card className="mt-6 p-4 w-full flex items-center gap-4 justify-start text-neutral-500 text-sm">
        <FaExclamation />
        <p>{t('notice')}</p>
      </Card>
      <div className="fixed bottom-5 w-full px-5">
        <IntlProvider>
          <LocaleSwitcher />
        </IntlProvider>
      </div>
    </main>
  );
}
