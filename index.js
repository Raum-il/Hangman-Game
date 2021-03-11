const input = document.querySelector('input');               //taking elements from html
const fruits = ['Banana', 'grapes', 'mango','apple','lychee','passion fruit'];
const guess = document.querySelector('.guess')

let r = Math.floor(Math.random() * fruits.length)      //selecting random fruit

let rFruit = fruits[r]
let HTMLFruit = ' _'.repeat(rFruit.length - 1)
let DashArray = HTMLFruit.split('')
// console.log(DashArray);
guess.innerText = rFruit[0] + HTMLFruit   //creating numeber of dashes
// [m,' ',_,' ',_,' ',_,' ',_,' ' ]
// [m,' ',_,' ',N,' ',_,' ',_,' ' ]
// [m,' ',A,' ',N,' ',_,' ',_,' ' ]
let temp = rFruit[0]+' '.repeat(rFruit.length - 1)
temp = temp.split("")
// console.log(temp);
input.onkeyup = (e) => {
    let key = e.keyCode;
    if (key === 13) {
        if (rFruit.includes(input.value)) {
            let fArray = rFruit.split('');
            //                  [m, , , , ]
            //                  [0,1,2,3,4]
            //                  [m,a,n,g,o]
            for (let i = 1; i < fArray.length; i++) {
                if (fArray[i] == input.value) {
                    // console.log(guess.innerText);
                    temp[i]=fArray[i]
                }
                else if(temp[i] == " "){
                    temp[i] = "_"
                }
            }
            // console.log(temp);
            guess.innerText = temp.join(" ")
            // console.log(guess.innerText.replace( /\s/g, '').split(''));
            // console.log("temp",temp);
            console.log(rFruit==temp.join(""));
            if(rFruit===temp.join('')){
                alert("YOU WON")
                location.reload();
            }
            input.value = ''
        }
        else {
            let chance = document.querySelector(".chances span").innerText;
            chance--;
            document.querySelector(".chances span").innerText = chance;
            if(chance == 0){
                alert("YOU LOST")
                location.reload();
            }
        }
    }

}