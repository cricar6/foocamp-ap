import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { PROJECTS, GENERAL, ALL_PROJECTS_CATEGORY_FILTER } from '../../utils/constants';
import getPageData from '../../utils/api';
import ProjectWrapper from '../../components/ProjectWrapper';
import Projects from '../../components/Projects';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(PROJECTS);
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

function getCategoryProjects(projects, category) {
  if (!category || category === ALL_PROJECTS_CATEGORY_FILTER) return projects;
  return projects.filter(({
    fields: {
      projectCategory: {
        fields: {
          link,
        },
      },
    },
  }) => link === category);
}

export default function ProjectsPage({ components }) {
  const { query } = useRouter();
  const { categoryId } = query;
  const [, , { fields: categories },
    { fields: { project: projects } }] = components;
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  useEffect(() => {
    setProjectsToDisplay(getCategoryProjects(projects, categoryId));
  }, [categoryId]);

  return (
    <div className="projects-page">
      <div><h1>HERO</h1></div>
      <ProjectWrapper
        currCategory={categoryId}
        categories={categories}
      >
        <Projects projectsList={projectsToDisplay} />
      </ProjectWrapper>
    </div>
  );
}
