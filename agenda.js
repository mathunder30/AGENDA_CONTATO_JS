const Contato = require("./contato");

class Agenda extends Contato {
    itens;

    constructor(nome, telefone, email){
        super(nome, telefone, email);
        this.itens = [];
    }

    AdicionarContato(contato){
        this.itens.push(contato);

        console.log(`O ${contato.nome} foi adicionado com sucesso!`)


    }

    MostrarContato(){
        console.log("Lista de contato");
        if(this.itens.length === 0){
            console.log("não existe nenhum contato")
        } else { // forEach serve para mostrar o que tem dentro do array como uma forma de repetição
            this.itens.forEach(item =>{
                console.log(item);
                item.MostrarContato();
            })
        }
    }

    RemoverContato(){
        
    }

}