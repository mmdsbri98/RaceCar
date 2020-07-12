function Car(name, position) {
    this.Name = name;
    this.Position = position;
}
var star = []
var num = "";
var cars = []
var jo = "";
let miel=[];
let box=document.getElementsByClassName("box")
function manifactor() {

    num = +prompt("number car")
    
    for (let i = 0; i < num; i++) {
        var Name = prompt("name car:");
        let c = new Car(Name, i);
        let a=document.createElement("div")
        let b=document.createTextNode(Name)
        a.setAttribute("class","car")
        a.append(b)
        box[i].append(a)
        miel.push(a)
        star.push(Name);
        cars.push(c);

    }

    /*for (let r = 0; r < 300 - num; r++) {
        star.push("*")
    }*/
    jo = star.join("")
    console.log(jo);






}

function Move() {
    let mov = 0;
    star = jo.split("")


    for (let i = 0; i < num; i++) {
        mov = parseInt((Math.random() * 10) + 1);
        console.log(mov);

        let g = mov + cars[i]["Position"]
        if (g !== cars[i]["Position"]) {
            for (let p = 0; p < num; p++) {
                if (cars[i]["Position"] !== cars[p]["Position"]) {
                    star[cars[i]["Position"]] = "*";
                }
                box[cars[i]["Position"]].innerHTML=""
                box[g].append(miel[i])
            }
        }
        cars[i]["Position"] = g;
        for (let r = 1; r < num; r++) {
            if (cars[r]["Position"] === cars[r - 1]["Position"]) {
                cars[r - 1]["Position"] = 0
            }
        }


        star[g] = cars[i]["Name"];
    }
    for (let i = 0; i < num; i++) {
        if (cars[i]["Position"] >= 300) {
            alert("GAME FINISHED " + cars[i]["Name"] + " WINNER")
            for (let j = 0; j < num; j++) {
                alert("makan " + cars[j]["Name"] + " :" + cars[j]["Position"])
            }
        }

    }



    jo = star.join("")
    console.log(jo);




}