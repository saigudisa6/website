// pages/_app.js

import Home from './home'; // Import the homepage component
import './styles/global.css';

function MyApp({ Component, pageProps, router }) {
    // Conditionally render the homepage component based on the route
    const isHomePage = router.pathname === '/';
    
    return (
        <>
            {isHomePage ? (
                <Home {...pageProps} />
            ) : (
                <Component {...pageProps} />
            )}
        </>
    );
}

export default MyApp;
