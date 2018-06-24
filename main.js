//Initial game vars
var level = 1;
var money = 0;
var clickDamage = 10;
var passiveDamage = 0;
var clickUpgradePrice = 10;
var passiveUpgradePrice = 10;
var monsterHealth = 10;
var clickLevel = 0;
var autoLevel = 0;

//Monster takes given damage, sets monsterHealth to 0 if negative, and then updates the game
function damageMonster(damageToTake) {
    monsterHealth -= damageToTake;

    if (monsterHealth < 0) monsterHealth = 0;

    updateMonsterAndLevel();
}

//Increments level if monster is "dead", and then updates the screen for monsterhealth, and level (if needed)
function updateMonsterAndLevel() {
    if (monsterHealth == 0) {
        level++;
        money += 100;
        monsterHealth = generateMonster(level);

        document.getElementById("level").innerHTML = level;
        document.getElementById("money").innerHTML = money;
    }
    document.getElementById("monsterHealth").innerHTML = monsterHealth;
}

//New monsters have health based on the level
function generateMonster(level) {
    return 10 * level ** 2;
}

//When the page is fully loaded, passive damage will start being done to the monster (if passiveDamage > 0)
window.onload = function () {
    setInterval(doPassiveDamage, 1000);
}

/*This is a helperfunction that allows setInterval (see above) to properly apply passive damage every
1000 milliseconds. Refer to link below to find justification:
https://stackoverflow.com/questions/10182714/why-does-the-setinterval-callback-execute-only-once */

function doPassiveDamage() {
    damageMonster(passiveDamage);
}

function upgradeClick() {
    if (money >= 10 + (1 * clickLevel) {
        money -= 10 + (1 * clickLevel);
        clickDamage += 5;
        document.getElementById("money").innerHTML = money;
        document.getElementById("clickDamage").innerHTML = clickDamage;
        clickLevel = clickLevel + 1;
    }
}

function upgradePassive() {
    if (money >= 100 + (5 * passiveLevel) {
        money -= 100 + (5 * passiveLevel);
        passiveDamage = (passiveDamage * 1.1) + 10;
        document.getElementById("money").innerHTML = money;
        document.getElementById("passiveDamage").innerHTML = passiveDamage;
        autoLevel = autoLevel + 1;
    }
}
