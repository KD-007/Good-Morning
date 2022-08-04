
const date = document.querySelector('.date');

const getDateTime=()=>{
    const day= new Date(); 
    var dayList=['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thrusday' , 'Friday' , 'Saturday'] 
    var monthList=['JAN' , 'FEB', 'MARCH' , 'APRIL', 'MAY' , 'JUNE' , 'JULY' , 'AUG' , 'SEPT', 'OCT' , 'NOV' , 'DEC']
    const currMonth = monthList[day.getMonth()];

    const currDay=dayList[day.getDay()];
    const currDate  =day.getDate()
    var currHour  =day.getHours()
    const currMin =day.getMinutes()
    var c = 'AM';
    if(currHour>=12){
     c='PM'
     currHour=currHour-12
    }
    return `${currDay} | ${currMonth}  ${currDate} | ${currHour}:${currMin} ${c}`

}

getDateTime()
const currDateAndTime=getDateTime();

//---------------------------------------------------------------------------------------------------------------



const button = document.querySelector('.add-todo button')
const input = document.querySelector(".add-todo input[type='text']")

const ul =document.querySelector('ul')


button.addEventListener('click',(e)=>{
    e.preventDefault()
    const v=input.value
    
    input.value=""
    const li = document.createElement('li')
    li.innerHTML=
    `<span >${v}</span>
    <div>
    <button class="btn2 done">done</button>
    <button class="btn2 remove">remove</button>
</div>`
ul.append(li)
li.classList.add('todo-list')


})
ul.addEventListener('click' , (e)=>{
    // console.log(e.target)
    // console.log(e.target.classList)
    if (e.target.classList.contains('done')){
        const span = e.target.parentNode.previousElementSibling
        // console.log(span)
        span.style.textDecoration='line-through'
    }
    if(e.target.classList.contains('remove')){
        const s = e.target.parentNode.parentNode
        // console.log(s)
        s.remove()
       
    }
})

//------------------------------------------------------------------------------------------------

const button2 =document.querySelector('.btd')
const quote = document.querySelector('.quote p')
const author = document.querySelector('.author')
const forTweet = document.querySelector('.quote-box img')


const getQuotes = async ()=> {

const response = await fetch('https://type.fit/api/quotes')
const data = await response.json()
// console.log(data)

const r = Math.floor(Math.random()*1642)

quote.textContent=data[r].text;
author.textContent=data[r].author;

}

getQuotes()

button2.addEventListener('click' , ()=>{
   
getQuotes()


})
const tweet=()=>{
    let t = `https://twitter.com/intent/tweet?text=${quote.textContent} by ${author.textContent}`
    window.open(t)
}
forTweet.addEventListener('click' ,tweet )


//--------------------------------------------------------------------------------------------------------------

const info = document.querySelector('.info')
var C='jaipur'
const city_name=document.querySelector(".search input[type='text']")
const city_button=document.querySelector('.search button')

city_button.addEventListener('click' ,(e)=>{
    e.preventDefault()
    C=city_name.value
    city_name.value=""
    weather()
})

const weather = async () =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${C}&appid=476e8ae4510832b27a9ed0d27b554d2c&units=metric`
    // console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    info.innerHTML = ` <h1 class="location">
    <i class="fa-solid fa-street-view"></i>
    ${data.name}, ${data.sys.country}
</h1>
<p class="date">${currDateAndTime} </p>
<h1 class="temp"> ${data.weather[0].main} | Temperature:${data.main.temp} &#8451</h1>
<h3 class="tempMinMax">min:${data.main.temp_min} &#8451 / max:${data.main.temp_max} &#8451</h3>`

}
weather()
//--------------------------------------------------------------------------------------------------------------------------
