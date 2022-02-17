const body_ele = document.body;
const keyboard_class = document.querySelector(".keyboard");
const topRow_class = document.querySelector(".topRow");
const midRow_class = document.querySelector(".midRow");
const q_class = document.querySelector(".q");
const w_class = document.querySelector(".w");
const e_class = document.querySelector(".e");
const r_class = document.querySelector(".r");
const t_class = document.querySelector(".t");
const y_class = document.querySelector(".y");
const u_class = document.querySelector(".u");
const i_class = document.querySelector(".i");
const o_class = document.querySelector(".o");
const p_class = document.querySelector(".p");
const a_class = document.querySelector(".a");
const s_class = document.querySelector(".s");
const d_class = document.querySelector(".d");
const f_class = document.querySelector(".f");
const g_class = document.querySelector(".g");
const h_class = document.querySelector(".h");
const j_class = document.querySelector(".j");
const k_class = document.querySelector(".k");
const l_class = document.querySelector(".l");
const z_class = document.querySelector(".z");
const x_class = document.querySelector(".x");
const c_class = document.querySelector(".c");
const v_class = document.querySelector(".v");
const b_class = document.querySelector(".b");
const n_class = document.querySelector(".n");
const m_class = document.querySelector(".m");
const enter_class = document.querySelector(".enter");
const backspace_class = document.querySelector(".backspace");
const darkModeBtn_class = document.querySelector(".darkModeBtn");
const title_class = document.querySelector(".title");
const key_class = document.querySelectorAll(".key");
const letter_class = document.querySelectorAll(".letter");
const zero_class = document.querySelectorAll(".zero");
const one_class = document.querySelectorAll(".one");
const two_class = document.querySelectorAll(".two");
const three_class = document.querySelectorAll(".three");
const four_class = document.querySelectorAll(".four");
const boxes0_class = document.querySelectorAll(".boxes0");
const boxes1_class = document.querySelectorAll(".boxes1");
const boxes2_class = document.querySelectorAll(".boxes2");
const boxes3_class = document.querySelectorAll(".boxes3");
const boxes4_class = document.querySelectorAll(".boxes4");
const boxes5_class = document.querySelectorAll(".boxes5");
const regex = new RegExp("Key", "i");
const answer = "FORCE";
let answerArr = ["F", "O", "R", "C", "E"];
let input = [];
let greenCounter = 0;
let horizontalPointer = 0;
let verticalPointer = 0;
let winCon = false;
var dom = `box0-0`

function placer(char) {
    if (input.length === 5) {
        return;
    }
    input.push(char.toUpperCase());
    document.getElementById(dom).textContent = input[horizontalPointer];
    document.getElementById(`box${verticalPointer}-${horizontalPointer}`).classList.add("borderHighlight");
    if (horizontalPointer <= 4) {
        horizontalPointer++;
    }
    dom = `box${verticalPointer}-${horizontalPointer}`;

}

function deleter() {
    input.pop();
    if (horizontalPointer > 0) {
        horizontalPointer--;
    }
    dom = `box${verticalPointer}-${horizontalPointer}`;
    document.getElementById(`box${verticalPointer}-${horizontalPointer}`).classList.remove("borderHighlight");
    document.getElementById(dom).textContent = "";
}

function checker() {
    if (input.length != 5) {
        createAlert("Need more letters");
        switch (verticalPointer) {
            case 0:
                console.log("entered");
                boxes0_class.forEach(e => {
                    e.classList.add("shake");
                    e.addEventListener("animationend", () => {
                        e.classList.remove("shake");
                    })
                })
                break;
            case 1:
                console.log("entered");
                boxes1_class.forEach(e => {
                    e.classList.add("shake");
                    e.addEventListener("animationend", () => {
                        e.classList.remove("shake");
                    })
                })
                break;
            case 2:
                console.log("entered");
                boxes2_class.forEach(e => {
                    e.classList.add("shake");
                    e.addEventListener("animationend", () => {
                        e.classList.remove("shake");
                    })
                })
                break;
            case 3:
                console.log("entered");
                boxes3_class.forEach(e => {
                    e.classList.add("shake");
                    e.addEventListener("animationend", () => {
                        e.classList.remove("shake");
                    })
                })
                break;
            case 4:
                console.log("entered");
                boxes4_class.forEach(e => {
                    e.classList.add("shake");
                    e.addEventListener("animationend", () => {
                        e.classList.remove("shake");
                    })
                })
                break;
            case 5:
                console.log("entered");
                boxes5_class.forEach(e => {
                    e.classList.add("shake");
                    e.addEventListener("animationend", () => {
                        e.classList.remove("shake");
                    })
                })
                break;
        }
        return;
    }

    for (i = 0; i < 5; i++) {
        if (input[i] === answer.charAt(i)) {
            document.getElementById(`box${verticalPointer}-${i}`).classList.add("green");
            answerArr.splice(answerArr.indexOf(`${input[i]}`), 1,);
            document.querySelector(`.${input[i].toLowerCase()}`).classList.add("green");
            input[i] = "";
            greenCounter++;
        }
    }

    for (i = 0; i < 5; i++) {
        if (answer.includes(input[i]) && answerArr.includes(input[i])) {
            document.getElementById(`box${verticalPointer}-${i}`).classList.add("yellow");
            document.querySelector(`.${input[i].toLowerCase()}`).classList.add("yellow");
            answerArr.splice(answerArr.indexOf(`${input[i]}`), 1,);
        }
        else if (!answerArr.includes(input[i])) {
            document.getElementById(`box${verticalPointer}-${i}`).classList.add("darkGrey");
            if (input[i] != "") {
                document.querySelector(`.${input[i].toLowerCase()}`).classList.add("darkGrey");
            }
        }
    }
    if (greenCounter === 5) {
        createAlert("Congratulations! You guess the word!");
        winCon = true;
    }

    greenCounter = 0;
    answerArr = ["F", "O", "R", "C", "E"];
    input = [];
    horizontalPointer = 0;
    if (verticalPointer < 6) {
        verticalPointer++;
        dom = `box${verticalPointer}-${horizontalPointer}`;
    }
}


function lightDark() {
    body_ele.classList.toggle("darkModeBodyTitle");
    title_class.classList.toggle("darkModeBodyTitle");

    one_class.forEach(e => {
        e.classList.toggle("darkModeSquares");
    })
    two_class.forEach(e => {
        e.classList.toggle("darkModeSquares");
    })
    three_class.forEach(e => {
        e.classList.toggle("darkModeSquares");
    })
    four_class.forEach(e => {
        e.classList.toggle("darkModeSquares");
    })
    zero_class.forEach(e => {
        e.classList.toggle("darkModeSquares");
    })
    key_class.forEach(e => {
        e.classList.toggle("darkModeKeys");
    })
}

function createAlert(message) {

    if (body_ele.classList.contains("darkModeBodyTitle")) {
        let alert = document.createElement("div");
        alert.textContent = message;
        alert.classList.add("alertLightMode");
        document.querySelector(".alert-container").prepend(alert);
        setTimeout(() => {
            alert.classList.add("alertGone");
        }, 900)
        setTimeout(() => {
            alert.remove();
        }, 1250)
    }
    else {
        let alert = document.createElement("div");
        alert.textContent = message;
        alert.classList.add("alert");
        document.querySelector(".alert-container").prepend(alert);
        setTimeout(() => {
            alert.classList.add("alertGone");
        }, 900)
        setTimeout(() => {
            alert.remove();
        }, 1250)
    }
}


darkModeBtn_class.addEventListener("click", e => {
    lightDark();
})

body_ele.addEventListener("keydown", e => {

    if (winCon === false) {

        if (e.key == "Backspace") {
            deleter();
        }
        else if (e.key == "Enter" && !e.repeat) {
            checker();
        }
        else if (/Key[A-Z]/i.test(e.code) && !e.repeat) {
            placer(e.key);
        }
    }
})

q_class.addEventListener("click", e => {
    placer("q");
})
w_class.addEventListener("click", e => {
    placer("w");
})
e_class.addEventListener("click", e => {
    placer("e");
})
r_class.addEventListener("click", e => {
    placer("r");
})
t_class.addEventListener("click", e => {
    placer("t");
})
y_class.addEventListener("click", e => {
    placer("y");
})
u_class.addEventListener("click", e => {
    placer("u");
})
i_class.addEventListener("click", e => {
    placer("i");
})
o_class.addEventListener("click", e => {
    placer("o");
})
p_class.addEventListener("click", e => {
    placer("p");
})
a_class.addEventListener("click", e => {
    placer("a");
})
s_class.addEventListener("click", e => {
    placer("s");
})
d_class.addEventListener("click", e => {
    placer("d");
})
f_class.addEventListener("click", e => {
    placer("f");
})
g_class.addEventListener("click", e => {
    placer("g");
})
h_class.addEventListener("click", e => {
    placer("h");
})
j_class.addEventListener("click", e => {
    placer("j");
})
k_class.addEventListener("click", e => {
    placer("k");
})
l_class.addEventListener("click", e => {
    placer("l");
})
z_class.addEventListener("click", e => {
    placer("z");
})
x_class.addEventListener("click", e => {
    placer("x");
})
c_class.addEventListener("click", e => {
    placer("c");
})
v_class.addEventListener("click", e => {
    placer("v");
})
b_class.addEventListener("click", e => {
    placer("b");
})
n_class.addEventListener("click", e => {
    placer("n");
})
m_class.addEventListener("click", e => {
    placer("m");
})
enter_class.addEventListener("click", e => {
    checker();
})
backspace_class.addEventListener("click", e => {
    deleter();
})
