import '@/styles/globals.css'
import Layout from 'components/Layout';
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  return <>

    <Component {...pageProps} />
  
     
   
  </>  
}

