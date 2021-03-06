import { Html, Head, Main, NextScript } from 'next/document'

export default function Document ({locale}) {

    return (
        <Html dir={`${locale === 'fa' ? 'rtl' : 'ltr'}`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="h-full w-full bg-gray-100 dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export function getInitialProps({locale}) {
    return { locale: locale || 'fa' }
}