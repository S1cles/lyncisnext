import { ChakraProvider } from '@chakra-ui/react'
import Header from "@/components/Header/Header";
import {theme} from "@/theme";
import '@/global.scss'
import Footer from "@/components/Footer/Footer";
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps)  {
    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </ChakraProvider>
    )
}

export default MyApp