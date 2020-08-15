const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const routeController = require('./sequelize/user.service');
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}
app.get('/', (req, res) => {
	res.send(`
		<h2>Hello, Sequelize + Express!</h2>`);
});
app.get(
    `/api/user/get`,
    makeHandlerAwareOfAsyncErrors(routeController.getAll)
);
app.get(
    `/api/user/:id`,
    makeHandlerAwareOfAsyncErrors(routeController.getById)
);
app.get(
    `/api/user/delete/:id`,
    makeHandlerAwareOfAsyncErrors(routeController.remove)
);
app.post(
    `/api/user/create`,
    makeHandlerAwareOfAsyncErrors(routeController.create)
);
app.post(
    `/api/user/update/:id`,
    makeHandlerAwareOfAsyncErrors(routeController.update)
);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});