// react
import React from 'react';
// third-party
import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";



class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return { ...await Document.getInitialProps(ctx) };
    }

    render() {
        // noinspection HtmlRequiredTitleElement
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    <link rel="shortcut icon" href="/favicon.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* fonts */}
                    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <div className="site-preloader">
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                                    @keyframes site-preloader-animation {
                                        from {
                                            transform: rotateZ(0deg);
                                        }
                                        to {
                                            transform: rotateZ(360deg);
                                        }
                                    }

                                    #__next *,
                                    #__next *:before,
                                    #__next *:after {
                                        transition-duration: 0s !important;
                                    }

                                    body {
                                        overflow: hidden !important;
                                        overflow-y: scroll !important;
                                        height: 100% !important;
                                    }

                                    .neologosmall{
                                        height: 35px !important;
                                    }

                                    .cartsmall{
                                        width:20px;
                                        height:20px;
                                    }

                                    .mg-x-no{
                                        margin-left:0px !important;
                                        margin-right:0px !important;
                                    }

                                    .pd-x-no{
                                        padding-left:0px !important;
                                        padding-right:0px !important;
                                    }

                                    .mg-t-no{
                                        margin-top:0px !important; 
                                    }



                                    .site-preloader {
                                        position: fixed;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        background-color: #fff;
                                        z-index: 99999;
                                        opacity: 1;
                                    }
                                    .site-preloader::before {
                                        box - sizing: border-box;
                                        content: "";
                                        display: block;
                                        position: absolute;
                                        left: calc(50% - 50px);
                                        top: calc(50% - 50px);
                                        width: 100px;
                                        height: 100px;
                                        border-radius: 50px;
                                        border: 3px solid rgba(0, 0, 0, .2);
                                        border-top-color: rgba(0, 0, 0, .6);

                                        animation-name: site-preloader-animation;
                                        animation-duration: .5s;
                                        animation-timing-function: linear;
                                        animation-iteration-count: infinite;
                                    }
                                    .site-preloader__fade {
                                        transition: opacity .3s;
                                        opacity: 0;
                                    }
                                `,
                            }}
                        />
                    </div>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}




export default MyDocument;
