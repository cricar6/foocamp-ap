import '../styles/ayp.scss';
import Layout from '../components/Layout';
import MasterComponents from '../components/MasterComponents';
import topDictionary from '../utils/topComponentsDictionary';
import botDictionary from '../utils/botComponentsDictionary';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MasterComponents
        components={pageProps.topComponents}
        dictionary={topDictionary}
      />
      <Component {...pageProps} />
      <MasterComponents
        components={pageProps.botComponents}
        dictionary={botDictionary}
      />
    </Layout>
  );
}

export default MyApp;
