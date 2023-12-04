class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo //mago,guerreiro,monge, ninja
    }

    ataque() {
        let tipoAtaque = "";
        if (this.tipo === "mago") {
            tipoAtaque = "usou uma magia top";
        } else if (this.tipo === "guerreiro") {
            tipoAtaque = "usou uma espada encantada";
        } else if (this.tipo === "monge") {
            tipoAtaque = "usou sua propria arte marcial";
        } else if (this.tipo === "ninja") {
            tipoAtaque = "usou uma shuriken";
        } else {
            tipoAtaque = " -> err (Verifique o 'tipo' passado)";
        }
        console.log(`o héroi ${this.nome}, é um ${this.tipo} e ${tipoAtaque}`);
    }
}

let heroi1 = new Heroi("vander", 21, "mago");
heroi1.ataque();