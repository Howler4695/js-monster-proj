const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = 100;
let currentPlayerHealth = 100;

adjustHealthBars(chosenMaxLife);

function onClickAttack() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
}

attackBtn.addEventListener('click', onClickAttack);