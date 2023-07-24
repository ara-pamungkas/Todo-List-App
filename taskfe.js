class BangunDatar {
  constructor(nama) {
    this.nama = nama;
  }

  getNama() {
    return this.nama;
  }

  hitunngLuas() {
    return 0;
  }
}

class Lingkaran extends BangunDatar {
  constructor(nama, jariJaari) {
    super(nama);
    this.jariJaari = jariJaari;
  }

  getJariJari() {
    return this.jariJaari;
  }

  hitunngLuas() {
    return Math.PI * this.jariJaari * this.jariJaari;
  }
}

class Persegi extends BangunDatar {
  constructor(nama, sisi) {
    super(nama);
    this.sisi = sisi;
  }

  getSisi() {
    return this.sisi;
  }

  hitunngLuas() {
    return this.sisi * this.sisi;
  }
}


const lingkar = new Lingkaran('Lingkaran', 12)
console.log(lingkar.getNama())
console.log(lingkar.getJariJari())
console.log(lingkar.hitunngLuas())

console.log("")

const persegi = new Persegi('Persegi', 20)
console.log(persegi.getNama())
console.log(persegi.getSisi())
console.log(persegi.hitunngLuas())
