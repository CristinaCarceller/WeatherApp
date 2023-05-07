// 1. Use axios to get weather data from the API I showed at the start of the lesson
// 2. Wrap the axios call in an async function
// 3. Use await before the axios call
// 4. Destructure the response to get the { data } part of the response
// 5. Console.log the weather data (this will show you completed the above)

const apiURL =
	"https://api.openweathermap.org/data/2.5/forecast?lat=52&lon=-2&appid=385ba9d34e4cd03058a4a2ef1618c550";

const getData = async () => {
	const { data } = await axios.get(apiURL);
	console.log(data.list);

	const html = data.list.map((item) => {
		return `<div class="item">
        <p>${new Date(item.dt * 1000).toLocaleString()}</p>
        <p>${Math.round(item.main.temp - 273.15)}&#8451</p>
        <p>${item.weather[0].description}</p>

    </div>`;
	});
	document.getElementById("root").innerHTML = html.join(" ");
};

getData();
