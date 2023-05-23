import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import { Poppins, Fira_Code } from 'next/font/google';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"]
});

const FiraCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function App({ 
  Component,
  pageProps: {
    session, ...pageProps
  }
}: AppProps) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  })

  return (
    <>
      <style jsx global>{`
        :root {
          --firaCode: ${FiraCode.style.fontFamily};
          --poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
