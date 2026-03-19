export {};

interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuFavorit: Buku = {
    judul: "Panduan TypeScript 2026",
    pengarang: "Billa",
    tahunTerbit: 2026,
    tersedia: true
};

console.log("Detail Buku:");
console.log(`Judul: ${bukuFavorit.judul}`);
console.log(`Pengarang: ${bukuFavorit.pengarang}`);
console.log(`Tahun: ${bukuFavorit.tahunTerbit}`);
console.log(`Status: ${bukuFavorit.tersedia ? "Tersedia" : "Dipinjam"}`);