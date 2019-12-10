const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.post("/movies", (req, res) => {
	const { tmdb_id } = req.body;
	console.log(tmdb_id);

	return res.json({
		result: true
	});
});

app.listen(5000, () => {
	console.log("server running on port 5000");
});
