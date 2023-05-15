//User converter
  //Vamos criar uma classe para enviar as infos da pessoa!
  export class User {
    constructor (email, matricula, token) {
      this.email = email;
      this.matricula = matricula;
      this.token = token;
    }
    toString() {
      return this.email + ',' + this.matricula + ',' + this.token;
    }
  }
  //Agora um conversor do FB para as infos do User
  export const userConverter = {
    toFirestore: (user) => {
        return {
          email: user.email,
          matricula: user.matricula,
          token: user.token,
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.email, data.matricula, data.token);
    }
};

export class Funcionario{
  constructor(nome,email,cargo){
    this.nome = nome;
    this.email = email;
    this.cargo = cargo;
  }
  toString() {
    return this.nome + ',' + this.email + ',' + this.cargo;
  }
}
export const funcionarioConverter = {
  toFirestore:(funcionario)=>{
    return{
      nome:funcionario.nome,
      email:funcionario.email,
      cargo:funcionario.cargo,
    };
  },
  fromFirestore: (snapshot,options)=>{
    const data = snapshot.data(options);
    return new Funcionario(data.nome,data.email,data.cargo);
  }
};


//Tasks converter
export class Conversa {
  constructor(enviadoEm, pergunta, recebidoEm, resposta, titulo) {
    this.enviadoEm = enviadoEm;
    this.pergunta = pergunta;
    this.recebidoEm = recebidoEm;
    this.resposta = resposta;
    this.titulo = titulo;
  }
  toString() {
    return (
      this.enviadoEm +
      ',' +
      this.pergunta +
      ',' +
      this.recebidoEm +
      ',' +
      this.resposta +
      ',' +
      this.titulo
    );
  }
}
//Agora um conversor do FB para as infos do User
export const conversaConverter = {
  toFirestore: (conversa) => {
    return {
      enviadoEm: conversa.enviadoEm,
      pergunta: conversa.pergunta,
      recebidoEm: conversa.recebidoEm,
      resposta: conversa.resposta,
      titulo: conversa.titulo,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Conversa(
      data.enviadoEm,
      data.pergunta,
      data.recebidoEm,
      data.resposta,
      data.titulo
    );
  },
};