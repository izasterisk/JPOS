import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import { fontSans, fontMono } from "@/config/fonts";

import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            {/* <ToastContainer autoClose={2000} style={{ padding: "20px" }} /> */}
            <>
                <Component {...pageProps} />
            </>
        </NextUIProvider>
    );
}

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
};
