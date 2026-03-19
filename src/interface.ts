interface Mahasiswa {
    nama: string;
    umur: number;
    jurusan: string;
}

function cetakMahasiswa(mhs: Mahasiswa): void {
    console.log(`${mhs.nama} - ${mhs.umur} - ${mhs.jurusan}`);
}

const data: Mahasiswa = {
    nama: "Nabila Nur Anisa",
    umur: 20,
    jurusan: "Sistem Informasi"
};

cetakMahasiswa(data);

