const json =JSON.stringify([
    {
        "title": "Work",
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }
        }
      },
      {
        "title": "Play",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }
])
const data = JSON.parse(json)

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const content = document.querySelector(".dashboard");
const work = document.querySelector(".work");
const play= document.querySelector(".play");
const  study= document.querySelector(".study");
const  exercise= document.querySelector(".exercise");
const  social= document.querySelector(".social");
const  self_care= document.querySelector(".self_care");

work.innerHTML = `          
<div class="dv1">
  <h3>${data[0].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[0].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[0].timeframes.daily.previous}hrs</p>
</div>`

play.innerHTML = `          
<div class="dv1">
  <h3>${data[1].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[1].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[1].timeframes.daily.previous}hrs</p>
</div>`

study.innerHTML = `          
<div class="dv1">
  <h3>${data[2].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[2].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[2].timeframes.daily.previous}hrs</p>
</div>`

exercise.innerHTML = `          
<div class="dv1">
  <h3>${data[3].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[3].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[3].timeframes.daily.previous}hrs</p>
</div>`

social.innerHTML = `          
<div class="dv1">
  <h3>${data[4].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[4].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[4].timeframes.daily.previous}hrs</p>
</div>`

self_care.innerHTML = `          
<div class="dv1">
  <h3>${data[5].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[5].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[5].timeframes.daily.previous}hrs</p>
</div>`

daily.addEventListener("click", function(){
  daily.style.color = "white";
  weekly.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
  work.innerHTML = `          
<div class="dv1">
  <h3>${data[0].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[0].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[0].timeframes.daily.previous}hrs</p>
</div>`

play.innerHTML = `          
<div class="dv1">
  <h3>${data[1].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[1].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[1].timeframes.daily.previous}hrs</p>
</div>`

study.innerHTML = `          
<div class="dv1">
  <h3>${data[2].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[2].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[2].timeframes.daily.previous}hrs</p>
</div>`

exercise.innerHTML = `          
<div class="dv1">
  <h3>${data[3].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[3].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[3].timeframes.daily.previous}hrs</p>
</div>`

social.innerHTML = `          
<div class="dv1">
  <h3>${data[4].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[4].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[4].timeframes.daily.previous}hrs</p>
</div>`

self_care.innerHTML = `          
<div class="dv1">
  <h3>${data[5].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[5].timeframes.daily.current}hrs</h1>
  <p>Yesterday - ${data[5].timeframes.daily.previous}hrs</p>
</div>`
})

weekly.addEventListener("click", function(){
  daily.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
  weekly.style.color = "white";

work.innerHTML = `          
<div class="dv1">
  <h3>${data[0].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[0].timeframes.weekly.current}hrs</h1>
  <p>Last week - ${data[0].timeframes.weekly.previous}hrs</p>
</div>`

play.innerHTML = `          
<div class="dv1">
  <h3>${data[1].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z"  fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[1].timeframes.weekly.current}hrs</h1>
  <p>Last week - ${data[1].timeframes.weekly.previous}hrs</p>
</div>`

study.innerHTML = `          
<div class="dv1">
  <h3>${data[2].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[2].timeframes.weekly.current}hrs</h1>
  <p>Last week - ${data[2].timeframes.weekly.previous}hrs</p>
</div>`

exercise.innerHTML = `          
<div class="dv1">
  <h3>${data[3].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[3].timeframes.weekly.current}hrs</h1>
  <p>Last week - ${data[3].timeframes.weekly.previous}hrs</p>
</div>`

social.innerHTML = `          
<div class="dv1">
  <h3>${data[4].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[4].timeframes.weekly.current}hrs</h1>
  <p>Last week - ${data[4].timeframes.weekly.previous}hrs</p>
</div>`

self_care.innerHTML = `          
<div class="dv1">
  <h3>${data[5].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[5].timeframes.weekly.current}hrs</h1>
  <p>Last week - ${data[5].timeframes.weekly.previous}hrs</p>
</div>`
})

monthly.addEventListener("click", function(){
  daily.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "white";
  weekly.style.color = "hsl(236, 100%, 87%)";
  work.innerHTML = `          
<div class="dv1">
  <h3>${data[0].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[0].timeframes.monthly.current}hrs</h1>
  <p>Last month - ${data[0].timeframes.monthly.previous}hrs</p>
</div>`

play.innerHTML = `          
<div class="dv1">
  <h3>${data[1].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[1].timeframes.monthly.current}hrs</h1>
  <p>Last month - ${data[1].timeframes.monthly.previous}hrs</p>
</div>`

study.innerHTML = `          
<div class="dv1">
  <h3>${data[2].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[2].timeframes.monthly.current}hrs</h1>
  <p>Last month - ${data[2].timeframes.monthly.previous}hrs</p>
</div>`

exercise.innerHTML = `          
<div class="dv1">
  <h3>${data[3].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[3].timeframes.monthly.current}hrs</h1>
  <p>Last month - ${data[3].timeframes.monthly.previous}hrs</p>
</div>`

social.innerHTML = `          
<div class="dv1">
  <h3>${data[4].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[4].timeframes.monthly.current}hrs</h1>
  <p>Last month - ${data[4].timeframes.monthly.previous}hrs</p>
</div>`

self_care.innerHTML = `          
<div class="dv1">
  <h3>${data[5].title}</h3>
  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 
    2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 
    0 0 1 0-5Z" fill-rule="evenodd"/></svg>
</div>
<div class="dv2">
  <h1>${data[5].timeframes.monthly.current}hrs</h1>
  <p>Last month - ${data[5].timeframes.monthly.previous}hrs</p>
</div>`
})