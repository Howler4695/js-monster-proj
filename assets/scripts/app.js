const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = 100;
let currentPlayerHealth = 100;

adjustHealthBars(chosenMaxLife);

function onClickAttack() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('Your Lost');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw');
    }
}

attackBtn.addEventListener('click', onClickAttack);