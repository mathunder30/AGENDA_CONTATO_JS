class Contato{
    nome;
    telefone;
    email;

    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    MostrarContato(){
        console.log(`\n Nome: ${this.nome} \n telefone: ${this.telefone} \n email: ${this.email}`)
    }

}

module.exports = Contato;