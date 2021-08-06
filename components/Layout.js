import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <main className="layout">
      <Navigation />

      <section className="page-content">
        { children }
      </section>

      <footer>
        <p>A footer</p>
      </footer>
    </main>
  );
}
