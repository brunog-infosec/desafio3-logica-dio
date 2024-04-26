class createHero {
  constructor(name, age, type) {
    this.name = name
    this.age = age
    this.type = type
  }

  atack() {
    let atack
    if (this.type === "mago") {
      atack = "magia"
      console.log(`o ${this.type} atacou usando ${atack}`)
    } else if (this.type === "guerreiro") {
      atack = "espada"
      console.log(`o ${this.type} atacou usando ${atack}`)
    } else if (this.type === "monge") {
      atack = "artes marciais"
      console.log(`o ${this.type} atacou usando ${atack}`)
    } else if (this.type === "ninja") {
      atack = "shuriken"
      console.log(`o ${this.type} atacou usando ${atack}`)
    }
  }
}

let mage = new createHero("Ragnar", 39, "mago")
mage.atack()
let warrior = new createHero("Tristão", 25, "guerreiro")
warrior.atack()
let monk = new createHero("Buda", 50, "monge")
monk.atack()
let naruto = new createHero("Naruto", 15, "ninja")
naruto.atack()
