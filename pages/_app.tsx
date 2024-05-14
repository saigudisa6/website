// pages/_app.js
import './styles/global.css';
import type { AppProps } from "next/app";

// { Component, pageProps, router }

function MyApp({ Component, pageProps }: AppProps) {
    
    return <Component {...pageProps} />;
}

export default MyApp;
