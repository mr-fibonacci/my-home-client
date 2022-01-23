import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "../axiosDefaults";
import { BurgerLayout } from "../components/Layouts/Layouts";
import { Provider } from "react-redux";
import { store } from "../redux/reduxStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BurgerLayout>
        <Component {...pageProps} />
      </BurgerLayout>
    </Provider>
  );
}

export default MyApp;
