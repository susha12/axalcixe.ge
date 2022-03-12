let day = document.querySelector(".day");
let imgDay = document.querySelector(".icon_day");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let mySetting = document.querySelector(".icon_menu")
let burger = document.querySelector(".burger");
let a = 0;
// header funkcional
day.onclick = ()=>{
    if (a == 0 ){
        a++;
        body.style.background = "#2f3542";
        header.style.backgroundColor = "#a4b0be";
        header.style.boxShadow = "-2px 2px 10px gold";

        day.style.backgroundColor = "#ffffff";
        imgDay.src = "/img/partly-sunny-outline.svg";
        console.log(a)
    }
    else{
        a--;
        body.style.background = "linear-gradient(180deg, #ffffff, #ecf0f1)";
        header.style.backgroundColor = "#ffffff";
        day.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
        imgDay.src = "/img/moon.png";
        console.log(a)
        header.style.boxShadow = "-10px 10px 50px black";
    }
    }
mySetting.onclick = ()=>{
    body.classList.toggle("hidden")
    burger.classList.toggle("menu_setting")
}
let li_2_1 = document.querySelector(".li_2_1");
    li_2_1.onclick = ()=>{
        body.classList.toggle("hidden")
        burger.classList.toggle("menu_setting")
}
let li_2_2 = document.querySelector(".li_2_2");
    li_2_2.onclick = ()=>{
        body.classList.toggle("hidden")
        burger.classList.toggle("menu_setting")
}
let li_2_3 = document.querySelector(".li_2_3");
    li_2_3.onclick = ()=>{
        body.classList.toggle("hidden")
        burger.classList.toggle("menu_setting")
}
let li_2_4 = document.querySelector(".li_2_4");
    li_2_4.onclick = ()=>{
        body.classList.toggle("hidden")
        burger.classList.toggle("menu_setting")
}
let li_2_5 = document.querySelector(".li_2_5");
    li_2_5.onclick = ()=>{
        body.classList.toggle("hidden")
        burger.classList.toggle("menu_setting")
}
// rotate setting
let aa = 0;
let setting = document.querySelector(".li_0");
    setting.onclick = () =>{
    a += 90;
    setting.style.transform = "rotate("  + a + "deg)";
}
// wheater funkcional
const akhaltsikhe = {
    id: 615860,
    name: "Akhaltsikhe",
};
const akhalkalaki = {
    id: 615893,
    name: "Akhalkalaki",
}; 
const borjomi = {
    id: 615403,
    name: "Borjomi",
};    
const bakuriani = {
    id: 615583,
    name: "Bakuriani",
};     
const vale = {
    id: 611230,
    name: "Vale",
};
let icon;
let iconLink = '<img src ="https://openweathermap.org/img/wn/' + icon + '@2x.png">';
const key = "0e1e6873817e991938b63dbd5c02bea5";
const getAkhaltsikhe = `http://api.openweathermap.org/data/2.5/weather?id=${akhaltsikhe.id}&appid=${key}`;
const getAkhalkalaki = `http://api.openweathermap.org/data/2.5/weather?id=${akhalkalaki.id}&appid=${key}`;
const getBorjomi = `http://api.openweathermap.org/data/2.5/weather?id=${borjomi.id}&appid=${key}`;
const getBakuriani = `http://api.openweathermap.org/data/2.5/weather?id=${bakuriani.id}&appid=${key}`;
const getVale = `http://api.openweathermap.org/data/2.5/weather?id=${vale.id}&appid=${key}`;

fetch(getAkhaltsikhe)
    .then(function (resp){return resp.json()})
    .then(function(data){
        let iconLink = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
        let speedDeg = data.wind.deg;
        let speed = Math.round(data.wind.speed);
        let temp = Math.round(data.main.temp - 273) + "℃";
        let speedName;
            if ( speedDeg >= 15 && speedDeg <= 75) {
                speedName = "იქროლებს ჩრდილო/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 256 && speedDeg <= 360 && speedDeg >= 0 && speedDeg <=14) {
                speedName = "იქროლებს ჩრდილო/დასავლეთის ქარი";
            }
            else if ( speedDeg >= 76 && speedDeg <= 165) {
                speedName = "იქროლებს სამხრეთ/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 166 && speedDeg <= 255) {
                speedName = "იქროლებს სამხრეთ/დასავლეთის ქარი";
            }
        document.querySelector(".akhalcixe_name").innerHTML = "ახალციხე";
        document.querySelector(".akhalcixe_icon").innerHTML = iconLink;
        document.querySelector(".akhalcixe_speedName").innerHTML = speedName;
        document.querySelector(".akhalcixe_wind").innerHTML = speed + " მეტრი/წამში"  + "<hr>";
        document.querySelector(".akhalcixe_temperature").innerHTML = temp;
    })
    fetch(getAkhalkalaki)
    .then(function (resp){return resp.json()})
    .then(function(data){
        let iconLink = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
        let speedDeg = data.wind.deg;
        let speed = Math.round(data.wind.speed);
        let temp = Math.round(data.main.temp - 273) + "℃";
        let speedName;
            if ( speedDeg >= 0 && speedDeg <= 90) {
                speedName = "იქროლებს ჩრდილო/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 271 && speedDeg <= 360) {
                speedName = "იქროლებს ჩრდილო/დასავლეთის ქარი";
            }
            else if ( speedDeg >= 91 && speedDeg <= 180) {
                speedName = "იქროლებს სამხრეთ/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 181 && speedDeg <= 270) {
                speedName = "იქროლებს სამხრეთ/დასავლეთის ქარი";
            }
        document.querySelector(".akhalkalaki_name").innerHTML = "ახალქალაქი";
        document.querySelector(".akhalkalaki_icon").innerHTML = iconLink;
        document.querySelector(".akhalkalaki_speedName").innerHTML = speedName;
        document.querySelector(".akhalkalaki_wind").innerHTML = speed + " მეტრი/წამში"  + "<hr>";
        document.querySelector(".akhalkalaki_temperature").innerHTML = temp;
    })
    fetch(getBorjomi)
    .then(function (resp){return resp.json()})
    .then(function(data){
        let iconLink = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
        let speedDeg = data.wind.deg;
        let speed = Math.round(data.wind.speed);
        let temp = Math.round(data.main.temp - 273) + "℃";
        let speedName;
            if ( speedDeg >= 0 && speedDeg <= 90) {
                speedName = "იქროლებს ჩრდილო/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 271 && speedDeg <= 360) {
                speedName = "იქროლებს ჩრდილო/დასავლეთის ქარი";
            }
            else if ( speedDeg >= 91 && speedDeg <= 180) {
                speedName = "იქროლებს სამხრეთ/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 181 && speedDeg <= 270) {
                speedName = "იქროლებს სამხრეთ/დასავლეთის ქარი";
            }
        document.querySelector(".borjomi_name").innerHTML = "ბორჯომი";
        document.querySelector(".borjomi_icon").innerHTML = iconLink;
        document.querySelector(".borjomi_speedName").innerHTML = speedName;
        document.querySelector(".borjomi_wind").innerHTML = speed + " მეტრი/წამში"  + "<hr>";
        document.querySelector(".borjomi_temperature").innerHTML = temp;
    })
    fetch(getBakuriani)
    .then(function (resp){return resp.json()})
    .then(function(data){
        let iconLink = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
        let speedDeg = data.wind.deg;
        let speed = Math.round(data.wind.speed);
        let temp = Math.round(data.main.temp - 273) + "℃";
        let speedName;
            if ( speedDeg >= 0 && speedDeg <= 90) {
                speedName = "იქროლებს ჩრდილო/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 271 && speedDeg <= 360) {
                speedName = "იქროლებს ჩრდილო/დასავლეთის ქარი";
            }
            else if ( speedDeg >= 91 && speedDeg <= 180) {
                speedName = "იქროლებს სამხრეთ/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 181 && speedDeg <= 270) {
                speedName = "იქროლებს სამხრეთ/დასავლეთის ქარი";
            }
        document.querySelector(".bakuriani_name").innerHTML = "ბაკურიანი";
        document.querySelector(".bakuriani_icon").innerHTML = iconLink;
        document.querySelector(".bakuriani_speedName").innerHTML = speedName;
        document.querySelector(".bakuriani_wind").innerHTML = speed + " მეტრი/წამში"  + "<hr>";
        document.querySelector(".bakuriani_temperature").innerHTML = temp;
    })
    fetch(getVale)
    .then(function (resp){return resp.json()})
    .then(function(data){
        let iconLink = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
        let speedDeg = data.wind.deg;
        let speed = Math.round(data.wind.speed);
        let temp = Math.round(data.main.temp - 273) + "℃";
        let speedName;
            if ( speedDeg >= 0 && speedDeg <= 90) {
                speedName = "იქროლებს ჩრდილო/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 271 && speedDeg <= 360) {
                speedName = "იქროლებს ჩრდილო/დასავლეთის ქარი";
            }
            else if ( speedDeg >= 91 && speedDeg <= 180) {
                speedName = "იქროლებს სამხრეთ/აღმოსავლეთის ქარი";
            }
            else if ( speedDeg >= 181 && speedDeg <= 270) {
                speedName = "იქროლებს სამხრეთ/დასავლეთის ქარი";
            }
        document.querySelector(".vale_name").innerHTML = "ვალე";
        document.querySelector(".vale_icon").innerHTML = iconLink;
        document.querySelector(".vale_speedName").innerHTML = speedName;
        document.querySelector(".vale_wind").innerHTML = speed + " მეტრი/წამში"  + "<hr>";
        document.querySelector(".vale_temperature").innerHTML = temp;
    })
    // slider
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let x = 0;
let tran = document.querySelector(".transform");
back.onclick = ()=>{
    if(x > -40){
        x-= 20;
        tran.style.transform = `translateX(${x}%)`;
    }
    else {
        x = -40;
        tran.style.transform = `translateX(${x}%)`;
    }
}
next.onclick = ()=>{
    if(x < 40){
        x+= 20;
        tran.style.transform = `translateX(${x}%)`;
    }
    else {
        x = 40;
        tran.style.transform = `translateX(${x}%)`;
    }
}
//prise $$$

fetch('https://any.ge/currency/api.php?info=yvela').then(async(result) => {
  if (result.status === 200 && result.ok) {
    return result.json()
  }
}).then((JSON_DATA) => {
  // вывод данных
  console.log('Список получен: ', JSON_DATA);
  // действия с данными...
  //dollar exchange rate
  console.log(JSON_DATA.currency[40])
  console.log(JSON_DATA.currency[40].cur_name)
  console.log(JSON_DATA.currency[40].cur_change)
  console.log(JSON_DATA.currency[40].cur_value)
  console.log(JSON_DATA.currency[40].cur_code)
  let dolarCours = Math.ceil(JSON_DATA.currency[40].cur_value*100)/100 
  let dolarInner =  document.querySelector("#well_dolar") ;
  dolarInner.innerHTML =  dolarCours  + " $" 
  //euro exchange rate
  console.log(JSON_DATA.currency[13])
  console.log(JSON_DATA.currency[13].cur_name)
  console.log(JSON_DATA.currency[13].cur_change)
  console.log(JSON_DATA.currency[13].cur_value)
  console.log(JSON_DATA.currency[13].cur_code)
  let euroCours = Math.ceil(JSON_DATA.currency[13].cur_value*100)/100;
  let euroInner =  document.querySelector("#well_euro");
  euroInner.innerHTML =  euroCours  + " €"; 

//Ruble's exchange rate
console.log(JSON_DATA.currency[33])
console.log(JSON_DATA.currency[33].cur_name)
console.log(JSON_DATA.currency[33].cur_change)
console.log(JSON_DATA.currency[33].cur_value)
console.log(JSON_DATA.currency[33].cur_code)
let rublCours = (Math.ceil(JSON_DATA.currency[33].cur_value*100)/100) / 100;
let rublInner =  document.querySelector("#well_rubl");
rublInner.innerHTML =  rublCours + " £"; 
//lira exchange rate
console.log(JSON_DATA.currency[38])
console.log(JSON_DATA.currency[38].cur_name)
console.log(JSON_DATA.currency[38].cur_change)
console.log(JSON_DATA.currency[38].cur_value)
console.log(JSON_DATA.currency[38].cur_code)
let liraCours = Math.ceil(JSON_DATA.currency[38].cur_value*100)/100;
let liraInner =  document.querySelector("#well_lira");
liraInner.innerHTML =  liraCours + " ₺"; 
//выводим данные
let youCourse = document.querySelectorAll(".style_one_input");
for(let i = 0; i < youCourse.length; i++){
youCourse[i].onkeyup = () => {
    console.log("yes")
    let a = youCourse[i].value;
      youCourse[1].textContent = (youCourse[0].value / dolarCours).toFixed(1) + " $" ;
        youCourse[2].textContent = (youCourse[0].value / euroCours).toFixed(1) + " €";
        youCourse[3].textContent = (youCourse[0].value / rublCours).toFixed(1) + " £";
        youCourse[4].textContent = (youCourse[0].value / liraCours).toFixed(1) + " ₺";
    console.log(a)  
}
youCourse[0].onclick = () =>{
    youCourse[0].value = "";
    youCourse[1].innerHTML = "";
    youCourse[2].innerHTML = "";
    youCourse[3].innerHTML = "";
    youCourse[4].innerHTML = "";
}
}
})
//form active
let formDisplay = document.querySelector(".form_box")
let formOnclick = document.querySelector(".form_ball").onclick = () =>{
    formDisplay.classList.toggle("form_box_active")
}


