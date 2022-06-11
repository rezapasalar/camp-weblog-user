import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
        <Html dir="rtl">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="bg-gray-100 dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}