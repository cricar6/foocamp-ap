export default function ProjectIcon({
  icon, url, text, variation,
}) {
  return (
    <a
      href={url}
      className={
        (variation !== 'none')
          ? (`project-icon project-icon--${variation}`) : 'project-icon'
      }
    >
      <div className="placeholder-image">{icon}</div>
      <span className="project-icon__body">
        {text}
      </span>
    </a>
  );
}
