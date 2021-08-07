import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function BigImageLayout({
  title, contentType, content, image, variation,
}) {
  function getContent(innerContent, innerContentType) {
    if (innerContentType === 'rich') {
      return documentToReactComponents(innerContent);
    } if (innerContentType === 'simple') {
      return <p>{innerContent}</p>;
    }
    return '';
  }

  return (
    <div
      className={
        (variation !== 'none')
          ? `big-image-layout big-image-layout--${variation}`
          : 'big-image-layout'
      }
    >
      <div className="big-image-layout__content">
        { title
          ? <h2>{ title }</h2> : null }
        { getContent(content, contentType) }
        <a
          href="www.google.com"
          className="big-image-layout__button"
        >
          Entérate de todos
        </a>
      </div>
      <div
        className="big-image-layout__image"
        role="presentation"
        aria-hidden="true"
      >
        { image
          ? <img src={`https://${image.url}`} alt={image.title} /> : null }
      </div>
    </div>
  );
}
