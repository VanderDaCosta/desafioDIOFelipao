/* 
criar uma variavel para o nome do herói e 
outra para a quantidade de XP dele 
*/

let nomeHeroi = "Super Homem";
let xp = "7000";

if (xp >= 10001) {
    xp = "Radiante";
} else if (xp > 9001 && xp <= 10000) {
    xp = "Imortal";
} else if (xp > 8001 && xp <= 9000) {
    xp = "Ascendente";
} else if (xp > 7001 && xp <= 8000) {
    xp = "Platina";
} else if (xp > 6001 && xp <= 7000) {
    xp = "Ouro";
} else if (xp > 3001 && xp <= 6000) {
    xp = "Prata";
} else if (xp > 2001 && xp <= 3000) {
    xp = "Bronze";
} else if (xp <= 2000) {
    xp = "Ferro";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp);