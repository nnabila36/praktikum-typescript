class Hewan {
    constructor(public nama: string, private umur: number) {}

    public info(): string {
        return `${this.nama} berumur ${this.umur} tahun.`;
 }
}

const kucing = new Hewan("Kitty", 3);
console.log(kucing.info());
// console.log(kucing.umur); // Error: properti 'umur' bersifat private
