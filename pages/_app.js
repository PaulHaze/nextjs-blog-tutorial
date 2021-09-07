import MainLayout from '../layouts/MainLayout';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
