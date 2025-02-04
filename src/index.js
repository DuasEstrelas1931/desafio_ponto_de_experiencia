let nivel_do_mostro = 45;
let dificuldade_da_batalha = 40;


function calculoXp (nivel_do_mostro,dificuldade_da_batalha){
    return nivel_do_mostro * dificuldade_da_batalha * 100;
}

let xpGanho = calculoXp(nivel_do_mostro, dificuldade_da_batalha);



console.log(`Você ganhou ${xpGanho} pontos de experiência.`);

