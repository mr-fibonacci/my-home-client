import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "../axiosDefaults";
import { BurgerLayout } from "../components/Layouts/Layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BurgerLayout>
        <Component {...pageProps} />
      </BurgerLayout>
    </>
  );
}

export default MyApp;
