import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>Seite nicht gefunden</h1>
        <p className="lede">Die angeforderte Seite existiert nicht.</p>
        <p style={{ marginTop: 24 }}>
          <Link className="btn btn-dark" href="/">
            Zur Startseite
          </Link>
        </p>
      </div>
    </section>
  );
}
