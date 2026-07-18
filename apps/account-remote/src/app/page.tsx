import { Header } from "@repo/ui-shared";

export default function Account() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'purple' }}>Account Remote</h1>
        <p>This is the independent account micro-frontend running on port 3002.</p>
      </main>
    </div>
  );
}
