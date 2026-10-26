import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Praktikum Pemrograman Web</h1>
        <p className="text-lg">Nama: Nama Anda | NIM: 123456789</p>
        <p className="text-gray-500">Dibuat dengan Next.js, berjalan di atas Node.js</p>
        <Link href="/tentang" className="rounded bg-black px-4 py-2 text-white">
          Ke halaman Tentang
      </Link>
    </main>
 );
}