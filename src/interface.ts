export{}

class Mahotsukai {

}

class Soryo {

}

class Taro extends Mahotsukai {

}

interface Kenja {
  ionazun(): void
}

interface Senshi {
  kogeki(): void
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('a');
  }
  kogeki(): void {
    console.log('b');
  }
}

const jiro = new Jiro
jiro.ionazun()
jiro.kogeki()