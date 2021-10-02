import React from 'react';

export default function Paginator() {
  const labels = {
    prev: 'Anterior',
    next: 'Siguiente',
  };

  return (
    <article className="paginator">
      <button
        type="button"
        className="
          paginator__button
          paginator__button--previous
          disabled
        "
      >
        {labels.prev}
      </button>
      <div
        type="button"
        className="paginator__page-container"
      >
        <button
          className="paginator__page"
          type="button"
        >
          1
        </button>
      </div>
      <button
        type="button"
        className="paginator__button"
      >
        {labels.next}
      </button>
    </article>
  );
}
