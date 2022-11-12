import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

export default function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();
  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}
