function showTime() {
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0') + ":" + now.getSeconds().toString().padStart(2, '0');
    if(document.getElementById('clock')) {
        document.getElementById('clock').innerText = time;
    }
}
setInterval(showTime, 1000); 


function displayGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) greeting = "Добро утро, колеги рибари!";
    else if (hour < 18) greeting = "Добър ден и наслука!";
    else greeting = "Добър вечер! Време е за нощен риболов.";
    
    const welcomeArea = document.querySelector('.main-content h2');
    if(welcomeArea) {
        const greetDiv = document.createElement('p');
        greetDiv.style.color = '#3498db';
        greetDiv.style.fontWeight = 'bold';
        greetDiv.innerText = greeting;
        welcomeArea.after(greetDiv);
    }
}
displayGreeting();

function checkFishSize() {
    const species = prompt("Въведете вид риба:").toLowerCase();
    let minSize = 0;
    
    switch(species) {
        case 'шаран': minSize = 30; break;
        case 'щука': minSize = 35; break;
        case 'пъстърва': minSize = 22; break;
        case 'костур': minSize = 'Не е установен'; break;
        case 'бяла риба': minSize = 45; break;
        case 'амур': minSize = 40; break;
        case 'кефал': minSize = 25; break;
        case 'есетра': minSize = 80; break;
        case 'сом': minSize = 70; break;
        case 'червеноперка': minSize = 10; break;
        case 'каракуда': minSize = 15; break;
        case 'толстолоб': minSize = 100; break;
        case 'скобар': minSize = 30; break;
        case 'лин': minSize = 35; break;

        case 'сафрид': minSize = 12; break;
        case 'лефер': minSize = 28; break;
        case 'зарган': minSize = 25; break;
        case 'лаврак': minSize = 28; break;
        case 'калкан': minSize = 45; break;
        case 'паламуд': minSize = 28; break;
        case 'черноморска скумрия': minSize = 22; break;
        case 'барбун': minSize = 12; break;
        case 'черноморска акула': minSize = 90; break;
        case 'скорпид': minSize = 'не е установен (внимавай с шиповете!)'; break;
        case 'хамсия': minSize = 9; break;
        case 'червен тон': minSize = 115; break;


        default: alert("Нямаме информация за този вид."); return;
    }
    
    alert("Минимално допустимият размер за " + species + " е " + minSize + " см.");
}