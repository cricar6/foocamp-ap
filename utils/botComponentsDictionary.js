import Footer from '../components/Footer';
import JoinUs from '../components/JoinUs';

import {
  JOINUS_SECTION,
  FOOTER,
} from './constants';

const homeComponents = {
  [JOINUS_SECTION]: JoinUs,
  [FOOTER]: Footer,
};

export default homeComponents;
