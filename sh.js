const savan = document.querySelector("#main");
savan.innerHTML = "savan love u";
savan.id = "sav";
savan.style.color = "red"

let kumar = document.querySelector("#kumar");
kumar.innerHTML = "ponk";
kumar.innerHTML = "kumari"
kumar.style.color = "pink"

var varuse = document.querySelector("#varuse")
varuse.innerHTML = "var use mktc"
varuse.style.color = "green"


// number use

let d = "6.2";
let m = 9;
let s = Number(d)
let total = s  + m;
const num = document.querySelector("#num1")
num.innerHTML  = total;
num.style.color = "#000"

//string use

let k = 10;
let f = `[{
  "name": "savan kumar",
  "age": "20",
  "pink": {
    "sneah": "kumari randi" 
    , "lodulalit": 
     {"bor" : "choda" , 
      "bhosda" :
    [{"torachut": "landdalem"}]}
  },
  "pelab sare" : 
  [{"love" : "savanlove"}] 
}]`;



let prs = JSON.parse(f)
let get = prs[0]["pelab sare"][0].love;


const stri = document.querySelector("#strv")
stri.style.color = "#000"
stri.innerHTML =  get;



//boolean use 

const bolnen = document.querySelector("#bolnen")

let  blnch = false;

bolnen.innerHTML = "login"

bolnen.addEventListener("click" , () => {
  if (!blnch) {
    bolnen.innerHTML = "please login"
  }
  else{
    bolnen.innerHTML = "welcome"
  }
  // blnch =  !blnch
})

const ary = document.querySelector("#ary")

ary.innerHTML = "yes"
let lisy  = ["savan" , "kumar" , "love"]

ary.addEventListener("click" , () => {
  let hiny =   lisy[1]
  ary.innerHTML = hiny
})



const opt  = document.querySelector("#opratrors")

let frst = opt.innerHTML = "click for oprators"
let op = 10 ;
let ud = 21;
 
let chngs = (ud + 5);

let plus = op + ud;

let minus = ud - op;

let multiply = ud * op;

let divide = ud / op ;

let perct = chngs % op ;

let andh = op && ud;

let andyr = op || ud ;

let notoper = op !== ud ;
let clickcount = 0;

opt.addEventListener("click", () => {
  clickcount++;

  switch (clickcount) {
    case 1:
      opt.innerHTML = `Plus: ${plus}`;
      break;
    case 2:
      opt.innerHTML = `Minus: ${minus}`;
      break;
    case 3:
      opt.innerHTML = `Multiply: ${multiply}`;
      break;
    case 4:
      opt.innerHTML = `Modulus: ${perct}`;
      break;
    case 5:
      opt.innerHTML = `AND (&&): ${andh}`;
      break;
    case 6:
      opt.innerHTML = `OR (||): ${andyr}`;
      break;
    case 7:
      opt.innerHTML = `NOT (!==): ${notoper}`;
      break;
    case 8:
      opt.innerHTML = `Divide: ${divide}`;
      break;
    case 9:
      opt.innerHTML = frst;
      clickcount = 0; // reset
      break;
  }
});


let flormath = document.querySelector("#mathflor");

flormath.innerHTML = "start the random number";

flormath.addEventListener("click", () => {
    flormath.innerHTML = ""; // purane results clear karo
    flormath.style.color = "pink";
    let index = 0;
    let interval = setInterval(() => {
        let mathss = Math.floor(Math.random() * 100);
        flormath.innerHTML += mathss + "<br>";

        index++;
        if (index >= 100) {
            clearInterval(interval); // 100 numbers ke baad stop
        }
    }, 100); 
});

let ndh = document.querySelector("#numooo")
 let ckfd = 1;

let  intbvrs = setInterval(() => {
        ndh.innerHTML += ckfd + "<br>";
        ckfd ++;
        if (ckfd > 1) {
          clearInterval(intbvrs)
        }
}, 100)

const namwa = document.querySelector("#name input");
const emailwa = document.querySelector("#email input");
const phonwa = document.querySelector("#phone input");
const submitwa = document.querySelector("#submit button");
const view = document.querySelector("#view");
const search = document.querySelector("#search input")
const earchbtn = document.querySelector("#seacrbtn button")
const deletes = document.querySelector("#deletes button")
const viewalldata = document.querySelector("#viewalldata")
let filecre = "contacts"; // localStorage key

// Load contacts from localStorage
function loadContacts() {
    const data = localStorage.getItem(filecre);
    if (data) {
        return JSON.parse(data);
    }
    return {};
}

// Save contacts into localStorage
function saveContacts(contact) {
    localStorage.setItem(filecre, JSON.stringify(contact, null, 4));
}

let contacts = loadContacts(); // load old contacts

function addContact() {
  let name = namwa.value.trim();
  let phone = phonwa.value.trim();
  let email = emailwa.value.trim();

  if (name === "" || phone === "" || email === "") {
    alert("Please fill all the fields!");
    return;
  }

  contacts[name] = { phone, email }; // save in object
  saveContacts(contacts); // save in localStorage

  // view.textContent = JSON.stringify(contacts, null, 4);

  // reset inputs
  namwa.value = "";
  phonwa.value = "";
  emailwa.value = "";
}

submitwa.addEventListener("click", addContact);

// show saved contacts on page load
// view.textContent = JSON.stringify(contacts, null, 4);


function searchbyname() {
  let name = search.value.trim();
  if (name === ""){
     view.innerHTML = "please enter your name"
    return;
  }
  let data = contacts[name];
  if (data){
    view.innerHTML =  (`Found:\nPhone: ${data.phone}\nEmail: ${data.email}`);
  } 
  else{
    view.innerHTML = "not found your data"
  }
   search.value = ""
} 

earchbtn.addEventListener("click" ,  searchbyname );


function deletebysearch() {
  let namedelte = search.value.trim();
  if (namedelte === "") {
    view.innerHTML = "please enter your name"
    return;
  }
  let data = contacts[namedelte];
  if (data) {
       delete contacts[namedelte];   
        localStorage.setItem("contacts", JSON.stringify(contacts, null, 4));
        view.innerHTML = `${namedelte} data is delete now`
  }
  else{
    view.innerHTML = "contacts not found in there bro"
  }
}

deletes.addEventListener("click" , () => {
  deletebysearch()
})

viewalldata.addEventListener("click" , () => {
  let alldata = localStorage.getItem("contacts");
  if (!alldata || alldata === "{}"){
    view.innerHTML = "not contacts found"
    return;
  }
  view.textContent = JSON.stringify(JSON.parse(alldata), null, 4);
})


//indina watch

const indianwatch = document.querySelector("#indianwatch");

function showtime(){
let now = new Date();
let hrs = now.getHours().toString().padStart(2, "0");
let mnt = now.getMinutes().toString().padStart(2 ,"0");
let scd = now.getSeconds().toString().padStart(2, "0");
indianwatch.innerHTML = `${hrs}:${mnt}:${scd}`
console.log(`${hrs}:${mnt}:${scd}`)
}
showtime()
setInterval(showtime , 0);




const quiz = document.querySelector("#quiz");

const quizlist = [
  {
    "question": "Python me timeit module ka use kya hai?",
    "options": [
      "1. Code ka execution time measure karne ke liye",
      "2. Real time clock",
      "3. Alarm set karne ke liye",
      "4. Thread sleep karne ke liye"
    ],
    "answer": "1"
  },
  {
    "question": "Python me __all__ variable module me kis liye hota hai?",
    "options": [
      "1. Public API define karne ke liye",
      "2. Memory allocate karne ke liye",
      "3. Error handle karne ke liye",
      "4. Logging"
    ],
    "answer": "1"
  },
  {
    "question": "Python me del statement kis liye hota hai?",
    "options": [
      "1. Object delete karne ke liye",
      "2. Memory increase karne ke liye",
      "3. Error raise karne ke liye",
      "4. Loop break karne ke liye"
    ],
    "answer": "1"
  },
  {
    "question": "Python me sys.getsizeof() function kya return karta hai?",
    "options": [
      "1. Object ka size (bytes me)",
      "2. List length",
      "3. File size",
      "4. String length"
    ],
    "answer": "1"
  },
  {
    "question": "Python me logging module ka default level kya hai?",
    "options": ["1. WARNING", "2. ERROR", "3. DEBUG", "4. INFO"],
    "answer": "1"
  }
];


let quiz1 = document.querySelector("#quiz")


let kr = Math.random();
let ms = kr * quizlist.length;
let fnl = Math.floor(ms);

let ths = quizlist[fnl]; 

quiz1.innerHTML = ths.question


let reactforansw = document.querySelector("#reactforansw")

let answ = ths.options[0]
let ans1 = ths.options[1]
let ans2 = ths.options[2]
let ans3 = ths.options[3]
reactforansw.innerHTML = `
  <label><input type="radio" name="answer" value="1">${answ} </label><br>
  <label><input type="radio" name="answer" value="2"> ${ans1}</label><br>
  <label><input type="radio" name="answer" value="3"> ${ans2}</label><br>
  <label><input type="radio" name="answer" value="4"> ${ans3}</label><br>
`;

const submitbtn = document.querySelector("#submitwa")
const qusrest = document.querySelector("#qusrest")
let answert = quizlist[0].answer

submitbtn.addEventListener("click" , () => {
    let selected = document.querySelector("input[name='answer']:checked");

    if(!selected) {
      qusrest.innerHTML = "please select the  first"
      return;
    }
    if(selected.value === answert){
      qusrest.innerHTML = `consgrulation bhai tu jit gya ${answert} correct he`
    }
    else{
      qusrest.innerHTML = `bhen ke lode sahee answer de madarchod chal tu gandu he correct answer he ${answert}`
    }
})

const  voting = document.querySelector("#voting")
const vtnbtn = document.querySelector("#vtnbtn button")
const resulet = document.querySelector("#resulet")

voting.innerHTML = `<input type="number" placeholder="Enter your age number" value="">`;


vtnbtn.addEventListener("click" , () => {
const neha = voting.querySelector("input")
const valueofage = neha.value;
if(valueofage >= "18") {
  resulet.innerHTML = `madarchod tu ${valueofage} ka ho gaye vote de dega lekin gand mar lii jayegi teri`
}
else{
  resulet.innerHTML = `bacha he tu madarchod  ${valueofage} ka hua to mere jhath ke barabar he`
}
neha.value = ""
})


const imgpart = document.querySelector("#imgpart img")

const rightbtn = document.querySelector("#rightbtn button")

const leftbtn = document.querySelector("#leftbtn button")

const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&h=300",  // portrait 1
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&h=300",  // portrait 2
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&h=300",  // portrait 3
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&h=300",  // portrait 4
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&h=300",  // portrait 5
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=300"   // portrait 6
];


imgpart.src = images[0]
let index = 0;

function next(){
   index++
  if(index >= images.length){
    index = 0;
  }
  imgpart.src = images[index];
}
function left() {
  index--;
  if(index < 0 ) {
    index = images.length -1;
  }
  imgpart.src = images[index];
}

rightbtn.addEventListener("click" , () => {
 next()
})
leftbtn.addEventListener("click" , ()  => {
left()
})


//student roll number




let students = [
  {
    name: "Manish",
    rollno: "1",
    math: 50,
    science: 45,
    english: 55,
    passed: true
  },
  {
    name: "Rupes",
    rollno: "2",
    math: 20,
    science: 25,
    english: 30,
    passed: false
  },
  {
    name: "Prince",
    rollno: "3",
    math: 90,
    science: 85,
    english: 95,
    passed: true
  }
];


const studentroll = document.querySelector("#studentroll")
const getruset = document.querySelector("#getruset")
const retrilt = document.querySelector("#retrilt")

const getroll = studentroll.querySelector("input")
getruset.addEventListener("click" , () => { 
  const valutes = getroll.value.trim()

  if (valutes === "") {
    retrilt.innerHTML = "⚠️ Please enter roll number!";
  }
  else if (valutes === "0" ) {
    retrilt.innerHTML = `"❌ Invalid input ( ${valutes} not allowed)";`
  }
  else{
       const student = students.find(s => s.rollno === valutes);
    if(student){
       const stu = student.name
       const rolwat  = student.rollno
       const matwa = student.math
       const sci = student.science
       const engs = student.english
       const pased = student.passed
      retrilt.innerHTML = `name: ${stu} rollno: ${rolwat}  maths: ${matwa} english : ${engs} passed. ${pased ? "yes you are passed" : "you are failed "}`
    }
    else{
       retrilt.innerHTML = `⚠️ Roll number ${valutes} not found. Please enter correct roll number.`;
    }
  }
  getroll.value = ""
})

const dayfinder = document.querySelector("#dayfinder")

const getday = dayfinder.querySelector("input")

const dayfinderbtn = document.querySelector("#dayfinderbtn button")

const dayresult = document.querySelector("#dayresult")

dayfinderbtn.addEventListener("click" , () => {
const balue = Number(getday.value.trim())

switch(balue){
  case 1:
    dayresult.innerHTML = `u are write ${balue} thats why today is monday`
    break
  case 2:
    dayresult.innerHTML = `u are write ${balue} thats why today is tuesday`
    break
  case 3:
    dayresult.innerHTML = `u are write ${balue} thats why today is wednesday`
    break
  case 4:
    dayresult.innerHTML = `u are write ${balue} thats why today is thursday`
    break
  case 5:
    dayresult.innerHTML = `u are write ${balue} thats why today is friday`
    break
  case 6:
    dayresult.innerHTML = `u are write ${balue} thats why today is saturday`
    break
  case 7:
    dayresult.innerHTML = `u are write ${balue} thats why today is sunday`
    break
  default: 
  dayresult.innerHTML = `u are write ${balue} ❌ Invalid number! Enter 1–7`
}
getday.value = "";
})

const guessthenumber = document.querySelector("#guessthenumber")
const guesbnbtn = document.querySelector("#guesbnbtn button")
const resultyrdj = document.querySelector("#resultyrdj")

let nuges = Math.floor(Math.random() * 10) + 1;
let gues = false;

guesbnbtn.addEventListener("click" , () => {
 let numgures = guessthenumber.querySelector("input")
 let fingtes = Number(numgures.value.trim());

 let nbdg = 0;

 while(!gues && nbdg < 1 ){
  gues = (fingtes === nuges);
  resultyrdj.innerHTML = gues 
  ? `you are corrent ${fingtes} is correct`
  : `u are wrong write again`
  nbdg++;
 }
 numgures.value = ""
})


const getandset = document.querySelector("#getandset input")
const etandsetbtn = document.querySelector("#getandsetbtn button")

const resktr = document.querySelector("#resktr")

function sohana(mohana) {
  let trimmed = mohana.trim();
    if(!isNaN(trimmed) && trimmed !== "") {
    let kty = Number(trimmed) + 10;
    resktr.innerHTML = kty
  }
  else{
    resktr.innerHTML = trimmed || "Please enter something!";
}
}


etandsetbtn.addEventListener("click", () => sohana(getandset.value));

const video = document.getElementById("myvideo"); 
const timer = document.getElementById("timer");
const transcriptDiv = document.getElementById("transcript");

// ------------------- VIDEO TIMER -------------------
function formarTime(Seconds){
  const min = Math.floor(Seconds / 60);
  const sec = Math.floor(Seconds % 60);
  return `${min}:${sec < 10 ? '0'+sec : sec}`;
}

video.addEventListener("timeupdate", () => {
  let current = video.currentTime;
  let total = video.duration;
  timer.innerText = `${formarTime(current)} / ${formarTime(total)}`;
});

video.addEventListener("ended", () => {
  timer.innerText = "video is ended";
});

const speedControl = document.getElementById("speed");
const leftpyty = document.querySelector("#leftpyty button")
const rightpyth = document.querySelector("#rightpyth button")

const vpth = ["te.mp4" , "kh.mp4"]

let vkth = video.src[0]

let inxet = 0;

function nextyt() {
  inxet++
  if(inxet <= vpth.length){
    inxet = 0;
  }
  video.src = vpth[inxet];
}

function lextyt() {
  inxet --;
  if (inxet  < 0 ){
    inxet = vpth.length - 1;
  }
  video.src = vpth[inxet]
}

leftpyty.addEventListener("click"  , () => {
  nextyt()
})

rightpyth.addEventListener("click" ,  () => {
  lextyt()
} )

speedControl.addEventListener("change", () => {
    video.playbackRate = speedControl.value;
});