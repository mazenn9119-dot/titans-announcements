import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Titans Announcements
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Create clean announcement messages from ready-made templates.
        </p>

        <Link
          href="/create"
          className="inline-block rounded-2xl bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-slate-200 transition"
        >
          Create Announcement
        </Link>
      </div>
    </main>
  );
}