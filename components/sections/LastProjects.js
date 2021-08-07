import ProjectIcon from '../ProjectIcon';

export default function LastProjects({ children, title }) {
  return (
    <article className="last-projects">
      <div className="last-projects__heading">
        <h2 className="last-projects__title">{title}</h2>
        <div className="last-projects__categories">
          <ProjectIcon url="#" text="Educación" variation="white" />
          <ProjectIcon url="#" text="Deporte y recreación" variation="white" />
          <ProjectIcon url="#" text="Participación" variation="white" />
          <ProjectIcon url="#" text="Medio Ambiente" variation="white" />
          <ProjectIcon url="#" text="Arte y cultura" variation="white" />
        </div>
      </div>
      {children}
    </article>
  );
}
