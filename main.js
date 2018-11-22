var daysWeekContent = document.querySelector('#days-of-the-week');
var datePicker = document.querySelector('#date-picker');
var userInput = document.querySelector('#user-input');
var daySelection = document.querySelector('#day');
var yearSelection = document.querySelector('#year');
var monthSelection = document.querySelector('#month');
var past10Year = (new Date().getFullYear()) - 10;
var currMonth = new Date().getMonth();
var lastDateMonth = new Date(new Date().getFullYear(), currMonth, 0).getDate();


document.querySelector('.days__week').addEventListener('click', () => {
    datePicker.style.display = 'none';
    userInput.style.display = 'none';
    daysWeekContent.style.display = 'block';
})

document.querySelector('.date__picker').addEventListener('click', () => {
    daysWeekContent.style.display = 'none';
    datePicker.style.display = 'block';
    userInput.style.display = 'none';
})

document.querySelector('.user__input').addEventListener('click', () => {
    datePicker.style.display = 'none';
    userInput.style.display = 'block';
    daysWeekContent.style.display = 'none';
})

function addElement(year) {
    let optionELem = document.createElement("option");

    if(year === new Date().getFullYear()) {        
        optionELem.selected = true;
    }
    
    let content = document.createTextNode(`${year}`);
    optionELem.appendChild(content);
    return optionELem;
}

//Initial 20 year render
for(let i=0; i<21; i++) {
    let newOption = addElement(past10Year++);
    yearSelection.appendChild(newOption);
}

function addMonths(month) {
    let optionELem = document.createElement("option");

    if(month === new Date().getMonth()+ 1) {
        optionELem.selected = true;
    }
    let content = document.createTextNode(`${month}`);
    optionELem.appendChild(content);
    return optionELem;
}

//Initial Month render
for(let i=1; i<13; i++) {
    let newOption = addMonths(i);
    monthSelection.appendChild(newOption);
}

function addDate(day) {
    let optionELem = document.createElement("option");

    if(day === new Date().getDate()) {
        optionELem.selected = true;
    }
    
    let content = document.createTextNode(`${day}`);
    optionELem.appendChild(content);
    return optionELem;
}

//Initial date render
for (let i = 1; i < lastDateMonth; i++) {
    let newOption = addDate(i);
    daySelection.appendChild(newOption);
}

//onChange of month
function monthChange() {
    let currMonthSelection = monthSelection.value;
    let lastDateSelected = new Date(new Date().getFullYear(), currMonthSelection, 0).getDate();
    daySelection.innerHTML = "";
    for (let i = 1; i <= lastDateSelected; i++) {
        let newOption = addDate(i);
        daySelection.appendChild(newOption);
    }
}


function submitForm() {
    console.log('Inside form submit')
    //For checkbox
    var str = '';
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        str += `${checkboxes[i].value},`;
    }
    console.log(str.slice(0,-1));

    const inputBox = document.querySelector('#inputBox').value;
    document.querySelector('#result').value = `${daySelection.value}/${monthSelection.value}/${yearSelection.value} ${str.slice(0,-1)} ${inputBox}`;
    return true;
}
