const Contato = require("./contato");
const Agenda = require("./agenda");

const contato1 = new Contato("Mateus", 31995860596, "mateustlopes11@gmail.com");
const contato2 = new Contato("Vitoria", 31988888885, "vitoriamagalhaesgatinha30@gmail.com");
const agenda = new Agenda();

agenda.AdicionarContato(contato1);
agenda.AdicionarContato(contato2);

agenda.RemoverContato(31988888885);

agenda.MostrarContato();