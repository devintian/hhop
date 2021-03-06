const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

const userRoutes = require("./routes/user_routes");
const favouriteRoute = require("./routes/favourite_routes");
const recipeRoute = require("./routes/recipe_routes");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: "hbs", // shorten the handlebars extension
}));
app.set("view engine", "handlebars");

// add static folder.
app.use(express.static("public"));

// add route for handlebars template
app.get("/", (_, res) => res.render("./main/index.hbs"));
app.get("/signup", (_, res) => res.render("./main/signup.hbs"));
app.get("/login", (_, res) => res.render("./main/login.hbs"));
app.get("/user", (_, res) => res.render("./main/user.hbs"));

// Home page
app.get("/", (_, res) => res.render("index"));

// apis
app.get("/api/users", userRoutes);
app.get("api/favourites", favouriteRoute);
app.get("/api/recipe", recipeRoute);

// misc routes redirect back to homepage.
app.get("/*", (_, res) => res.redirect("/"));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
