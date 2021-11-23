import ComponentListRenderer from './ComponentListRenderer';

export default function Layout({
  children,
  masterPageProps = { bottomComponents: [], topComponents: [] },
}) {
  const { bottomComponents, topComponents } = masterPageProps;

  return (
    <div className="layout">
      <ComponentListRenderer components={topComponents} />
      <div className="page-content">
        { children }
      </div>
      <ComponentListRenderer components={bottomComponents} />
    </div>
  );
}
