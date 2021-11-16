function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}

function color() {
               r = random(0, 255)
               g = random(0, 255)
               b = random(0, 255)
               return "rgb(" + r + "," + g + "," + b + ")"
}

let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "0.5s"
}, 1000);

alert(" Siz computerda bu dasturdan foydalanayotgan bo'lsangiz consoleni ochishingizni maslahat beramiz !")

let firstName = prompt("Iltimos ismingizni kiriting ! Chunki ismingiz sizga murojat qilishimiz uchun kerak bo'ladi !")
while (!isNaN(firstName) || firstName == 0) {
               firstName = prompt("Iltimos ismingizni yozayotganingizda harflardan foydalaning !")
}
console.log(firstName + ", siz bu dasturda misollar ishlashingiz mumkin. Misollar random shaklida tushadi. Iltimos keyingi bosqichda qancha misol ishlamoqchiligingizni raqamlarda kiriting !");
alert(firstName + ", siz bu dasturda misollar ishlashingiz mumkin. Misollar random shaklida tushadi. Iltimos keyingi bosqichda qancha misol ishlamoqchiligingizni raqamlarda kiriting !");


let number = +prompt(firstName + ", iltimos, misollar sonini kiriting !")
while (isNaN(number) || number == 0) {
               number = +prompt(firstName + ", iltimos, sonlardan foydalaning !")
}

let signList = ["*", "/", "+", "-", "%"]
let sign = signList[random(0, 4)]

let numberOne = random(1, 100)
let numberTwo = random(1, 100)


let question = +prompt(firstName + ", iltimos misollar boshlanishi uchun  => enter <=  tugmasini bosing !")
for (let i = 1; i <= number; i++) {
               sign = signList[random(0, 4)]
               numberOne = random(0, 100)
               numberTwo = random(0, 10)
               question = +prompt(i + "-chi misol =>    " + numberOne + " " + sign + " " + numberTwo + " " + "= ?")
               while (isNaN(question)) {
                              question = +prompt(firstName + ", iltimos javob yozayotganda faqat sonlardan foydalaning" + ", " + i + "-chi misol =>    " + numberOne + " " + sign + " " + numberTwo + " " + "=")
               }
               if (sign == "+") {
                              answer = numberOne + numberTwo
               }
               else if (sign == "-") {
                              answer = numberOne - numberTwo
               }
               else if (sign == "*") {
                              answer = numberOne * numberTwo
               }
               else if (sign == "/") {
                              answer = numberOne / numberTwo
               }
               else if (sign == "%") {
                              answer = numberOne % numberTwo
               }
               if (question == answer) {
                              console.log(i + "-chi misol =>  " + numberOne + " " + sign + " " + numberTwo + " " + " = " + question + ", " + firstName + ", siz " + question + " raqamini kiritdingiz va sizning javobingiz to'g'ri !");
                              console.log(i + "-chi misol ni to'g'ri ishladingiz ! "+firstName+", sizni tabriklaymiz ! ");
               }
               else {
                              console.log(i + "-chi misol =>  " + numberOne + " " + sign + " " + numberTwo + " " + " = " + answer + ", " + firstName + ", siz " + question + " raqamini kiritdingiz va sizning javobingiz noto'gri !");
               }
}

