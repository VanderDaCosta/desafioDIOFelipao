/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

*/

//Entrada de vitorias e derrotas
let vitorias = 110;
let derrotas = 10;

//inserindo dados nas funções e atribuindo em variaveis
let resultadoRanqueada = saldoVitorias(vitorias, derrotas);
let resultado = elo(resultadoRanqueada);

//função para descobrir o numedo de vitorias
function saldoVitorias(v, d) {
    return v - d;
}

//função ara descobrir o ELO
function elo(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias > 11 && vitorias <= 20) {
        return "Bronze";
    }else if (vitorias > 21 && vitorias <= 50) {
        return "Prata";
    }else if (vitorias > 51 && vitorias <= 80) {
        return "Ouro";
    }else if (vitorias > 81 && vitorias <= 90) {
        return "Diamante";
    }else if (vitorias > 91 && vitorias <= 100) {
        return "Lendário";
    }else if (vitorias >= 101) {
        return "Imortal";
    } else {
        return "err (Nivel inválido)"
    }
}

//função para criar a mensagem de saída
function mensagemFinal(resultadoRanqueada, elo) {
    console.log("O Herói tem de saldo de vitorias de " + resultadoRanqueada + " e seu ELO é " + elo);
}

mensagemFinal(resultadoRanqueada, resultado);