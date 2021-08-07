import getPageData from '../utils/api';
import BigImageLayout from '../components/layouts/BigImageLayout';
import LastProjects from '../components/sections/LastProjects';
import JoinUs from '../components/sections/JoinUs';

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

  const joinUsSection = components.find((component) => component.sys.contentType.sys.id === 'joinUsSection');

  return (
    <div className="home">
      <JoinUs>
        <BigImageLayout
          title={joinUsSection.fields.title}
          contentType="simple"
          content={joinUsSection.fields.description}
          image={{
            url: joinUsSection.fields.sectionImage.fields.file.url,
            title: joinUsSection.fields.sectionImage.fields.title,
          }}
          variation="blue-background"
        />
      </JoinUs>

      <LastProjects
        title={projectSection.fields.title}
        categories={projectSection.fields.categoriesList}
      >
        <BigImageLayout
          contentType="rich"
          content={projectSection.fields.projectTitle}
          image={{
            url: projectSection.fields.sectionImage.fields.file.url,
            title: projectSection.fields.sectionImage.fields.title,
          }}
          variation="none"
        />
      </LastProjects>

    </div>
  );
}
