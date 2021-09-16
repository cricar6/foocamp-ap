import React from 'react';

export default function MasterComponents({ components, dictionary }) {
  return (
    <>
      {components.map(({ fields, sys: { id, contentType: { sys: { id: sectionType } } } }) => {
        const Component = dictionary[sectionType];
        if (!Component) return null;
        return <Component key={id} fields={fields} />;
      })}
    </>
  );
}
