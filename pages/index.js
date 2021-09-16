import getPageData from '../utils/api';
import { HOME, GENERAL } from '../utils/constants';
import dictionary from '../utils/componentsDictionary';
import MasterComponents from '../components/MasterComponents';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(HOME);
    const masterPage = await getPageData('', GENERAL);

    return {
      props: {
        data: pageData,
        components: pageData.fields.components,
        topComponents: masterPage.fields.topCompoents,
        botComponents: masterPage.fields.bottomComponents,
      },
    };
  } catch (e) {
    return console.error(e);
  }
};

export default function HomeView({ components }) {
  return (
    <div className="home">
      <MasterComponents components={components} dictionary={dictionary} />
    </div>
  );
}
