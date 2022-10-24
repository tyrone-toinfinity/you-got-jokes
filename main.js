import "./style.css";

const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punch-line");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.JOKES_API_KEY,
    "X-RapidAPI-Host": "joke-generator.p.rapidapi.com",
  },
};

const getDadJoke = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/jokes/random");

  const data = await res.json();
  setup.append(data.setup);
  punchline.append(data.punchline);
};

getDadJoke();
btn.addEventListener("click", () => {
  punchline.classList.remove("hidden");
});

btn2.addEventListener("click", () => {
  setup.textContent = "";
  punchline.textContent = "";
  punchline.classList.add("hidden");
  getDadJoke();
});
