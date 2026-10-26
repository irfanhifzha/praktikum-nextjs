import Link from "next/link";
export default function Tentang() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-semibold">Tentang Project Ini</h1>
            <p className="mt-2">Halaman ini berasal dari file app/tentang/page.tsx.</p>
            <Link href="/" className="mt-4 inline-block underline">
                Kembali ke beranda
            </Link>
        </main>
    );
}