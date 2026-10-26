import Link from "next/link";
export default function Tentang() {
    return (
        <main className="p-8">
            <h1 className="text-md font-semibold">Kontak Saya</h1>
            <div className="mt-2 px-3 py-2 rounded-2xl border border-black-200">
                <p>irfan.ulya@digitalbdg.ac.id</p>
            </div>
            <p className="mt-2">Halaman ini berasal dari file app/kontak/page.tsx.</p>
            <Link href="/" className="mt-4 inline-block underline">
                Kembali ke beranda
            </Link>
        </main>
    );
}