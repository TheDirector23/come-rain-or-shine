console.log("Hello there!");

async function handle(event) {
  event.preventDefault();

  var zipcode = document.getElementById("zipcode-input").value;
  console.log(zipcode);
  const resp = await fetch(
    "https://weatherapifunction.azurewebsites.net/api/WeatherAPI?zipcode=" +
      zipcode,
    {
      method: "POST",
    }
  );

  var data = await resp.json();
  console.log(data);

  const weatherForecastForTommorowNoon = data.list[6];
  const weatherForecastCity = data.city;

var output;

// Rain
if(weatherForecastForTommorowNoon.pop >= .01){
  output = "It's probably going to rain tomorrow. You should do something indoors, like: <li>Read a book</li> <li>Watch a movie/tv series</li> <li>Go bowling</li> <li>Eat out</li> <li>Go shopping</li> <li>Rock climbing</li> <li>Visit a museum</li> <li>Visit a friend/family</li> <li>Help an elderly acquaintence</li> <li>Do arts and crafts</li>";
}

// Snow
if((weatherForecastForTommorowNoon.pop >= .01) && (weatherForecastForTommorowNoon.weather[0].description == "snow")){
  output = "It might snow tomorrow! Get out your earmuffs and overcoats! You could: <li>Play in the snow</li> <li>Go ice skating</li> <li>Go snowshoeing</li> <li>Go skiing</li> <li>Go sledding</li> <li>SNOWBALL FIGHT!!</li> <li>Build a snow fort and a snowman</li> <li>Curl up by a fire with a book and/or movie</li> <li>Hang out with friends/family</li> <li><i>Don't forget hot chocolate!</i></li>";
}

// Beautiful day
if((weatherForecastForTommorowNoon.main.feels_like >= 55 && weatherForecastForTommorowNoon.main.feels_like <= 85) && (weatherForecastForTommorowNoon.pop == 0) && (weatherForecastForTommorowNoon.main.humidity <= 50) && (weatherForecastForTommorowNoon.wind.speed <= 10)){
  output = "It's going to be a beautiful day tomorrow! Don't stay inside if you don't have to! You could: <li>Ride a bike</li> <li>Go on a hike</li> <li>Go jogging/running</li> <li>Have a picnic</li> <li>Play a sport (tennis, soccer, football)</li> <li>Go cloudwatching</li> <li>Sketch or paint a picture of a landscape</li> <li>Take pictures outside</li> <li>Visit a site near you (like a historic site outdoors)</li> <li>Go downtown and walk around</li> <li>Chill in your backyard and enjoy the weather</li>";
}

// Wind
if ((weatherForecastForTommorowNoon.main.feels_like >= 60 && weatherForecastForTommorowNoon.main.feels_like <= 90) && (weatherForecastForTommorowNoon.wind.speed >= 10 && weatherForecastForTommorowNoon.wind.speed <= 20) && (weatherForecastForTommorowNoon.main.humidity >= 0 && weatherForecastForTommorowNoon.main.humidity <= 85)){
  output = "It's going to be a little windy tomorrow! You should: <li>Sail a boat</li> <li>Fly a kite</li> <li>Go windsurfing</li> <li>Go to a kite festival</li> <li>Fly a paper airplane outside</li> <li>Play with pinwheels and bubbles</li> <li>Set up and listen to a windchime</li> <li>Do a windy-day photoshoot</li> <li>Paint pottery</li> <li>Read <i>Winnie the Pooh and the Blustery Day</i></li>";
}

if (weatherForecastForTommorowNoon.wind.speed >= 21){
  output = "It's a little too windy tomorrow for outdoor activities! You should: <li>Curl up with your favorite book or movie</li> <li>Bake warm brownies or congo bars</li> <li>Write your own book</li> <li>Find a competition to enter</li> <li>Go shopping</li> <li>Do arts and crafts</li> <li>Make indoor s'mores</li> <li>Take a nap</li> <li>Learn to juggle</li> <li>Or you could get work done...</li>";
}

// Too humid
if (weatherForecastForTommorowNoon.humidity >= 80){
  output = "Tomorrow's a little too hot or humid for most outdoor activities! Maybe you should: <li>Go swimming at the pool</li> <li>Bake some sweets</li> <li>Make/buy refreshing lemonade</li> <li>Plan a party</li> <li>Play some games</li> <li>Write letters to a friend</li> <li>Help an elderly acquaintence</li> <li>Visit family or friends</li> <li>Bake cookies for your neighbors</li> <li>Sing songs or play an instrument or both!</li>";
}

// Constant condition
if (weatherForecastForTommorowNoon.main.feels_like <= 30){
  output = "Tomorrow's a bit too cold for outdoor activities! Maybe you should: <li>Curl up with your favorite book or movie</li> <li>Bake warm brownies or congo bars</li> <li>Make/buy coffee or hot chocolate</li> <li>Create a tv show!</li> <li>Go shopping</li> <li>Do arts and crafts</li> <li>Make s'mores</li> <li>Spend the day in a cozy cafe</li> <li>Learn to juggle</li> <li>Make cutout snowflakes</li>";
}

if((weatherForecastForTommorowNoon.main.feels_like >= 31 && weatherForecastForTommorowNoon.main.feels_like <= 60) && weatherForecastForTommorowNoon.pop == 0){
  output = "It's going to be a little chilly tomorrow. You could: <li>Take a walk</li> <li>Throw a baseball with friends/family</li> <li>Have a firepit outside and roast marshmallows</li> <li>Go downtown</li> <li>Go shopping</li> <li>Paint a picture or sketch</li> <li>Do a fun science experiment</li> <li>Make pizza</li> <li>Make decorations for the current season</li> <li>Felt your favorite animal (No clue what felting is? Google it!)</li>";
}

if((weatherForecastForTommorowNoon.main.feels_like >= 61 && weatherForecastForTommorowNoon.main.feels_like <= 79) && (weatherForecastForTommorowNoon.pop == 0)){
  output = "It's going to be pretty nice tomorrow! You could: <li>Go jogging</li> <li>Take a bike ride</li> <li>Host an outdoor party</li> <li>Go downtown</li> <li>Do a photoshoot</li> <li>Read a book outside</li> <li>Visit a friend or family</li> <li>See if any fun events are happening near you!</li> <li>Film a movie</li> <li>Just relax...</li>";
}

if (weatherForecastForTommorowNoon.main.feels_like >= 80){
  output = "Tomorrow's a little too hot or humid for most outdoor activities! Maybe you should: <li>Go swimming at the pool</li> <li>Bake some sweets</li> <li>Make/buy refreshing lemonade</li> <li>Plan a party</li> <li>Play some games</li> <li>Write letters to a friend</li> <li>Help an elderly acquaintence</li> <li>Visit family or friends</li> <li>Bake cookies for your neighbors</li> <li>Sing songs or play an instrument or both!</li>";
}

  var weatherRegular = `

      <p>
      <center>
      <h3>Weather Forecast for Tomorrow:</h3>
      </center>
      </p>
      <p>Location: ${weatherForecastCity.name}</p>
      <p>Description: ${weatherForecastForTommorowNoon.weather[0].description}</p>
      <p>Feels like: ${weatherForecastForTommorowNoon.main.feels_like} F</p>
      <p>Precipitation: ${weatherForecastForTommorowNoon.pop} inches</p>
      <p>Wind: ${weatherForecastForTommorowNoon.wind.speed} mph</p>
      `;

  var recommendations = `

      <p>
      <center>
      <h3>Recommendations:</h3>
      </center>
      </p>
      <p>${output}</p>
  
  `;

  $("#weather-result").html(weatherRegular);
  $("#recommendations-result").html(recommendations);
}
