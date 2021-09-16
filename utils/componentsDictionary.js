import ImpactMetrics from '../components/ImpactMetrics';
import MainAllies from '../components/MainAllies';
import LastProjects from '../components/LastProjects';
import Hero from '../components/Hero';
import {
  PROJECTS_SECTION,
  METRICS_SECTION,
  ALLIES_SECTION,
  HERO_SECTION,
} from './constants';

const homeComponents = {
  [PROJECTS_SECTION]: LastProjects,
  [METRICS_SECTION]: ImpactMetrics,
  [ALLIES_SECTION]: MainAllies,
  [HERO_SECTION]: Hero,
};

export default homeComponents;
