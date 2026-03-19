export {};

function sapaan(parameter: string | number): string {
    if (typeof parameter === "string") {
        return `Halo, ${parameter}`;
    } else {
        return `Umur: ${parameter} tahun`;
    }
}

console.log(sapaan("Billa")); // Output: Halo, Billa
console.log(sapaan(20));      // Output: Umur: 20 tahun