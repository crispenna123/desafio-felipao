//entrada de dados
const nome = prompt("Digite seu nome de Herói");
const experiencia = parseInt(prompt("Digite a quantidade de experiência do Herói"));

//determinar nível do herói
const nivel = determinaNivel;

function determinaNivel(experiencia) {
  if (experiencia <= 1000) {
    nivel = Ferro;
  } else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = Bronze;
  } else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = Prata;
  } else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = Ouro;
  } else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = platina;
  } else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = Ascendente;
  } else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = Imortal;
  } else {
    experiencia <= 10001;
    nivel = Radiante;
  }
}
//saida de dados
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
