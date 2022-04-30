const json = JSON.stringify([
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
]);
const data = JSON.parse(json);

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const content = document.querySelector(".dashboard");
const work = document.querySelector(".work");
const play = document.querySelector(".play");
const study = document.querySelector(".study");
const exercise = document.querySelector(".exercise");
const social = document.querySelector(".social");
const self_care = document.querySelector(".self_care");

const day = function (data) {
  data.forEach((ele) => {
    const html = `<div class="subdash">
    <div class="underlay ${ele.title.split(" ").join("_").toLowerCase()}-bg">
      <div class="imagex">
        <img src="./images/icon-${ele.title
          .split(" ")
          .join("-")
          .toLowerCase()}.svg" alt="">
      </div>
    </div>
    <div class="overlay ${ele.title.split(" ").join("_").toLowerCase()}">
      <div class="dv1">
        <h2>${ele.title}</h2>
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5
          2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5
          0 0 1 0-5Z" fill-rule="evenodd"/></svg>
      </div>
      <div class="dv2">
        <h1>${ele.timeframes.daily.current}hrs</h1>
        <p>Yesterday - ${ele.timeframes.daily.previous}hrs</p>
      </div>
    </div>
  </div>`;
    content.insertAdjacentHTML("beforeend", html);
  });
};
const week = function (data) {
  data.forEach((ele) => {
    const html = `<div class="subdash">
    <div class="underlay ${ele.title.split(" ").join("_").toLowerCase()}-bg">
      <div class="imagex">
        <img src="./images/icon-${ele.title
          .split(" ")
          .join("-")
          .toLowerCase()}.svg" alt="">
      </div>
    </div>
    <div class="overlay ${ele.title.split(" ").join("_").toLowerCase()}">
      <div class="dv1">
        <h2>${ele.title}</h2>
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5
          2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5
          0 0 1 0-5Z" fill-rule="evenodd"/></svg>
      </div>
      <div class="dv2">
        <h1>${ele.timeframes.weekly.current}hrs</h1>
        <p>Last week - ${ele.timeframes.weekly.previous}hrs</p>
      </div>
    </div>
  </div>`;
    content.insertAdjacentHTML("beforeend", html);
  });
};
const month = function (data) {
  data.forEach((ele) => {
    const html = `<div class="subdash">
    <div class="underlay ${ele.title.split(" ").join("_").toLowerCase()}-bg">
      <div class="imagex">
        <img src="./images/icon-${ele.title
          .split(" ")
          .join("-")
          .toLowerCase()}.svg" alt="">
      </div>
    </div>
    <div class="overlay ${ele.title.split(" ").join("_").toLowerCase()}">
      <div class="dv1">
        <h2>${ele.title}</h2>
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5
          2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5
          0 0 1 0-5Z" fill-rule="evenodd"/></svg>
      </div>
      <div class="dv2">
        <h1>${ele.timeframes.monthly.current}hrs</h1>
        <p>Last month - ${ele.timeframes.monthly.previous}hrs</p>
      </div>
    </div>
  </div>`;
    content.insertAdjacentHTML("beforeend", html);
  });
};
window.addEventListener("load", function () {
  daily.style.color = "white";
  weekly.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
  content.innerHTML = "";
  day(data);
});
daily.addEventListener("click", function () {
  daily.style.color = "white";
  weekly.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
  content.innerHTML = "";
  day(data);
});
weekly.addEventListener("click", function () {
  daily.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
  weekly.style.color = "white";
  content.innerHTML = "";
  week(data);
});
monthly.addEventListener("click", function () {
  daily.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "white";
  weekly.style.color = "hsl(236, 100%, 87%)";
  content.innerHTML = "";
  month(data);
});
