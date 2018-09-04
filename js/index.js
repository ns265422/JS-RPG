// 角色設定
class BaseCharacter {
    constructor(name, hp, ap) { // 初始化屬性：name、hp、maxHp、ap、alive
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.ap = ap;
        this.alive = true;
    }
    attack(character, damage) {
        if (this.alive == false) {
            return;
        }
        character.getHurt(damage);
    }

    getHurt(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.die();
        }

        var _this = this;
        var i = 1;

        _this.id = setInterval(function() {

            if (i == 1) {
                _this.element.getElementsByClassName("effect-image")[0].style.display = "block";
                _this.element.getElementsByClassName("hurt-text")[0].classList.add("attacked");
                _this.element.getElementsByClassName("hurt-text")[0].textContent = damage;
            }

            _this.element.getElementsByClassName("effect-image")[0].src = 'image/effect/blade/' + i + '.png';
            i++;

            if (i > 8) {
                _this.element.getElementsByClassName("effect-image")[0].style.display = "none";
                _this.element.getElementsByClassName("hurt-text")[0].classList.remove("attacked");
                _this.element.getElementsByClassName("hurt-text")[0].textContent = "";
                clearInterval(_this.id);
            }
        }, 50);
    }

    die() {
        this.alive = false;
    }
    updateHtml(hpElement, hurtElement) {
        hpElement.textContent = this.hp;
        hurtElement.style.width = (100 - this.hp / this.maxHp * 100) + "%";
    }
}
//Hero class 和 Monster class 第一步要做的，是繼承 BaseCharacter class。
// 英雄角色設定
class Hero extends BaseCharacter {
    constructor(name, hp, ap) {
        super(name, hp, ap);

        this.element = document.getElementById("hero-image-block");
        this.hpElement = document.getElementById("hero-hp");
        this.maxHpElement = document.getElementById("hero-max-hp");
        this.hurtElement = document.getElementById("hero-hp-hurt");

        this.hpElement.textContent = this.hp;
        this.maxHpElement.textContent = this.maxHp;

        console.log("召喚英雄" + this.name + "！");
    }
    attack(character) {
        var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
        super.attack(character, Math.floor(damage));
    }

    //恢復技能及特效
    heal(somehp) {
        this.hp += somehp;

        if (this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }
        var _this = this;
        var i = 1;
        this.updateHtml(this.hpElement, this.hurtElement);

        _this.id = setInterval(function() {
            if (i == 1) {
                _this.element.getElementsByClassName("healeffect-image")[0].style.display = "block";
                _this.element.getElementsByClassName("heal-text")[0].classList.add("healed");
                _this.element.getElementsByClassName("heal-text")[0].innerHTML = somehp;
            }

            _this.element.getElementsByClassName("healeffect-image")[0].src = 'image/effect/heal/' + i + '.png';
            i++;

            if (i > 8) {
                _this.element.getElementsByClassName("healeffect-image")[0].style.display = "none";
                _this.element.getElementsByClassName("heal-text")[0].classList.remove("healed");
                _this.element.getElementsByClassName("heal-text")[0].textContent = "";
                clearInterval(_this.id);
            }
        }, 50);

    }

    getHurt(damage) {
        super.getHurt(damage);
        this.updateHtml(this.hpElement, this.hurtElement);
    }
}
// 怪物角色設定
class Monster extends BaseCharacter {
    constructor(name, hp, ap) {
        super(name, hp, ap);

        this.element = document.getElementById("monster-image-block");
        this.hpElement = document.getElementById("monster-hp");
        this.maxHpElement = document.getElementById("monster-max-hp");
        this.hurtElement = document.getElementById("monster-hp-hurt");

        this.hpElement.textContent = this.hp;
        this.maxHpElement.textContent = this.maxHp;

        console.log("遇到強敵" + this.name + "了！");
    }
    attack(character) {
        var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
        super.attack(character, Math.floor(damage));
    }

    getHurt(damage) {
        super.getHurt(damage);
        this.updateHtml(this.hpElement, this.hurtElement);
    }
}

//印出角色
var hero = new Hero("Bernard", 130, 50);
var monster = new Monster("Skeleton", 130, 20);

//回合設定
var rounds = 10;

function endTurn() {
    rounds--;
    document.getElementById("round-num").textContent = rounds;
    if (rounds < 1) {
        finish();
    }
}

// 施放技能的回合
function heroAttack() {
    document.getElementsByClassName("skill-block")[0].style.display = "none";
    skillcd = false;
    setTimeout(function() {
        hero.element.classList.add("attacking");
        setTimeout(function() {
            hero.attack(monster);
            hero.element.classList.remove("attacking");
        }, 500);
    }, 100);


    setTimeout(function() {
        if (monster.alive) {
            monster.element.classList.add("attacking");
            setTimeout(function() {
                monster.attack(hero);
                monster.element.classList.remove("attacking");
                endTurn();
                if (hero.alive == false) {
                    finish();
                } else {
                    document.getElementsByClassName("skill-block")[0].style.display = "block";
                    skillcd = true;
                }
            }, 500);
        } else {
            finish();
        }
    }, 1100);
}

//使用恢復的回合
function healthy() {

    document.getElementsByClassName("skill-block")[0].style.display = "none";
    skillcd = false;

    setTimeout(function() {
        hero.element.classList.add("healing");
        hero.heal(30);
        hero.element.classList.remove("healing");
    }, 500);

    setTimeout(function() {
        if (monster.alive) {
            monster.element.classList.add("attacking");
            setTimeout(function() {
                monster.attack(hero);
                monster.element.classList.remove("attacking");
                endTurn();
                if (hero.alive == false) {
                    finish();
                } else {
                    document.getElementsByClassName("skill-block")[0].style.display = "block";
                    skillcd = true;
                }
            }, 500);
        } else {
            finish();
        }
    }, 1100);
}

// 英雄技能
function addSkillEvent() {
    var skill = document.getElementById("skill");
    skill.onclick = function() {
        heroAttack();

    }
    var heal = document.getElementById("heal");
    heal.onclick = function() {
        healthy();
    }
}
addSkillEvent();

//按鍵驅動技能
var skillcd = true;

document.onkeydown = function(event) {
    var key = String.fromCharCode(event.keyCode);

    if (key == "A" && skillcd == true) {
        heroAttack();

    } else if (key == "D" && skillcd == true) {
        healthy();
    }

}


// 結束視窗
function finish() {
    var dialog = document.getElementById("dialog")
    dialog.style.display = "block";
    if (monster.alive == false) {
        dialog.classList.add("win");
    } else if (hero.alive == false) {
        dialog.classList.add("lose");
    } else {
        dialog.classList.add("draw");
    }
}