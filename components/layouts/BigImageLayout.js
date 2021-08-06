import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function BigImageLayout({ content, image }) {
  return (
    <div className="big-image-layout">
      <div className="big-image-layout__content">

        {content ? documentToReactComponents(content) : null}
        <a
          href="www.google.com"
          className="button-primary"
        >
          Entérate de todos
        </a>
      </div>
      <div
        className="big-image-layout__image"
        role="presentation"
        aria-hidden="true"
      >
        {image
          ? <img src={`https://${image.url}`} alt={image.title} /> : null}
      </div>
    </div>
  );
}
