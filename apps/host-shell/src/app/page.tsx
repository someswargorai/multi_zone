import { Header } from "@repo/ui-shared";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Host Shell</h1>
        <p>This is the main host application.</p>
        <p>It handles routing to <a href="/shop" style={{ color: '#0070f3' }}>Shop (/shop)</a> and <a href="/account" style={{ color: '#0070f3' }}>Account (/account)</a>.</p>
      </main>
    </div>
  );
}
