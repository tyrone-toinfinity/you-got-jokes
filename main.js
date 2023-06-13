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

const displayJoke = (joke) => {
  setup.textContent = joke.setup;
  punchline.textContent = joke.punchline;
};

const getDadJoke = async () => {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await res.json();
    displayJoke(data);
  } catch (error) {
    console.error("Error fetching dad joke:", error);
  }
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
