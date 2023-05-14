const root = document.getElementById("root");

const success = async ({ coords }) => {
	const { latitude, longitude } = coords;

	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=385ba9d34e4cd03058a4a2ef1618c550`
	);
	console.log({ data });
	setWeather(data.list);
};

const setWeather = (list) => {
	console.log({ list });
	const html = list.map((item) => {
		return `<div class="item">
        <p>${new Date(item.dt * 1000).toLocaleString()}</p>
        <p>${Math.round(item.main.temp - 273.15)}&#8451</p>
        <p>${item.weather[0].description}</p>

        </div>`;
	});
	root.innerHTML = html.join(" ");
};

const error = (error) => {
	console.log(error);
};

const config = {
	enableHighAccuracy: true,
	maximumAge: 0,
	timeout: 500,
};

navigator.geolocation.getCurrentPosition(success, error, config);

// let cityName = "";

const getCityWeather = async (cityName) => {
	const data = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},GB&appid=385ba9d34e4cd03058a4a2ef1618c550`
	);

	console.log({ cityData: data });

	setWeather(data.data.list);
};

const search = document
	.getElementById("search")
	.addEventListener("change", (e) => {
		console.log({ e });
		getCityWeather(e.target.value);

		e.target.value = "";
	});
