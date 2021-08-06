import getPageData from '../utils/api';
import BigImageLayout from '../components/layouts/BigImageLayout';
import LastProjects from '../components/sections/LastProjects';

export const getServerSideProps = async () => {
  const pageData = await getPageData('inicio');

  return {
    props: {
      data: pageData,
      components: pageData.fields.components,
    },
  };
};

export default function Recipes({ components }) {
  const projectSection = components.find((component) => component.sys.contentType.sys.id === 'projectsSection');

  return (
    <div className="home">

      <LastProjects
        title={projectSection.fields.title}
        categories={projectSection.fields.categoriesList}
      >
        <BigImageLayout
          content={projectSection.fields.projectTitle}
          image={{
            url: projectSection.fields.sectionImage.fields.file.url,
            title: projectSection.fields.sectionImage.fields.title,
          }}
        />
      </LastProjects>

    </div>
  );
}
