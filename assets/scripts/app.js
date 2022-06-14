const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 13;

let chosenMaxLife = 100;
let currentMonsterHealth = 100;
let currentPlayerHealth = 100;

adjustHealthBars(chosenMaxLife);

function endRound() {
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

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    
}

function onClickAttack() {
    attackMonster('ATTACK');
    endRound();
}

function onClickStrongAttack() {
    attackMonster('STRONG_ATTACK');
    endRound();
}

function onClickHealPlayer() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("'You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click', onClickAttack);
strongAttackBtn.addEventListener('click', onClickStrongAttack);
healBtn.addEventListener('click', onClickHealPlayer)