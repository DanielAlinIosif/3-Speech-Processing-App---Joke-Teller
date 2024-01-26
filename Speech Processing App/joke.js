const JokeAPI = require('sv443-joke-api');
JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  /*
Reference
https://sahithyandev.github.io/sv443-joke-api-js-wrapper/
*/

console.log(Object.values(JokeAPI));

// JokeAPI.getJokes().then(r => console.log(r.body))
JokeAPI.getJokes({
  jokeType: "single"
})
  .then((r) => r.json())
  .then((data) => {
    updateUI(data);
  });

// To update the joke on the UI
function updateUI(jokeData) {
  const $ = (id) => document.getElementById(id);

  $("joke--text").innerHTML = jokeData.joke;
}