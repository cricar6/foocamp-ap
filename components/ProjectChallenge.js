import Link from 'next/link';
import { useRouter } from 'next/router';
import BigImageLayout from './BigImageLayout';
import CategoryLink from './CategoryLink';
import { GO_BACK } from '../utils/constants';

export default function ProjectChallenge({
  fields: {
    categories,
    currCategory,
    title,
    sectionImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
    projectTitle,
  },
}) {
  const router = useRouter();
  return (
    <section className="project-challenge">
      {categories
        && (
        <>
          <span role="presentation" onClick={() => router.back()} className="categories__back">
            {GO_BACK}
          </span>
          <div className="categories__wrapper">
            <ul className="categories categories--vertical-space">
              {categories.map(({
                fields: {
                  label,
                  link,
                },
              }) => (
                <Link
                  key={link}
                  href={`/proyectos/${link}`}
                  passHref
                  shallow
                >
                  <CategoryLink
                    Component="a"
                    highlight={link === currCategory}
                  >
                    {label}
                  </CategoryLink>
                </Link>
              ))}
            </ul>
          </div>
        </>
        )}

      <BigImageLayout
        contentType="rich"
        data={{
          title,
          url,
          imgTitle,
          projectTitle,
        }}
      />
    </section>
  );
}
