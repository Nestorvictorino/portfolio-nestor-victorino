import Document, { Html, Main, Head, NextScript } from 'next/document';
import { Children } from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [...Children.toArray(initialProps.styles)],
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/assets/css/globals.css" />
                    <link rel="shortcut icon" href='/images/JobaloLogo.png' type="image/png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" defer></script> */}
                    {/* <script src="https://unpkg.com/react/umd/react.production.min.js"></script> */}
                    {/* <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script> */}
                    {/* <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script> */}
                    <NextScript />
                </body>
            </Html >
        )
    }
}

export default MyDocument;