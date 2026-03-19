export {}; // Agar tidak bentrok dengan file lain

let nama: string = "Billa";
let umur: number = 20;
let isMahasiswa: boolean = true;
let random: any = "bisa string"; 

console.log(`Nama: ${nama}, Umur: ${umur}, Mahasiswa: ${isMahasiswa}`);

// Latihan Union Type
let id: string | number;
id = "123";
id = 123;
console.log("Nilai ID (Union):", id);

// Latihan Type Aliases
type ID = string | number;
let userId: ID = "user01";
console.log("User ID (Alias):", userId);