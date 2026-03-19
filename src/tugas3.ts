export {};

class Lingkaran {
    constructor(public jariJari: number) {}

    hitungLuas(): number {
        // Rumus: PI * r^2
        return Math.PI * Math.pow(this.jariJari, 2);
    }
}

const bundaran = new Lingkaran(7);
console.log(`Jari-jari: ${bundaran.jariJari}`);
console.log(`Luas Lingkaran: ${bundaran.hitungLuas().toFixed(2)}`);