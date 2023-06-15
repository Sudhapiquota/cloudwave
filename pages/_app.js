import { useEffect } from 'react';
import '../styles/globals.css';

const redirectToLowerCase = () => {
  const { pathname, search } = window.location;

  if (pathname !== pathname.toLowerCase()) {
    const lowercasePath = pathname.toLowerCase();
    const lowercaseUrl = `${lowercasePath}${search}`;

    window.location.replace(lowercaseUrl);
  }
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    redirectToLowerCase();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;