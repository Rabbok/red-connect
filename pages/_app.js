import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '/components/store/store.ts';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;