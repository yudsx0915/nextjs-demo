import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default appWithTranslation(MyApp);
