import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FancyImagesProvider } from "src/ui/_contexts/FancyImagesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FancyImagesProvider>
      <Component {...pageProps} />
    </FancyImagesProvider>
  );
}

export default MyApp;
