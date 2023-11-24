// Definição da classe Heroi
class Heroi {
    // Construtor que recebe as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Define o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criação de instâncias da classe Heroi
  const mago = new Heroi('Merlin', 35, 'mago');
  const guerreiro = new Heroi('Arthur', 40, 'guerreiro');
  const monge = new Heroi('Lee', 30, 'monge');
  const ninja = new Heroi('Hanzo', 25, 'ninja');
  
  // Realiza os ataques
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();