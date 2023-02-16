const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// In-memory database for demo purposes
const users = [{ username: "carcormir", password: "0000" }];
const favs = [];

// Endpoint to register a new user
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password and store the user
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });

  res.json({ message: "User registered successfully" });
});

// Endpoint to login a user and obtain a JWT token
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find((user) => user.username === username);

  // Check if user exists and password is correct
  
  if (typeof user === "undefined" || !bcrypt.compareSync(password, bcrypt.hashSync(user.password, 10))) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate a JWT token and return it
  const token = jwt.sign({ username }, "secret", { expiresIn: "1h" });
  res.json({ token });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {  
  const token = !req.body["jwt"] ? req.headers['authorization'] : req.body["jwt"]

  if (!token) {
    return res.status(401).json({ message: "Missing authorization token" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid authorization token" });
  }
}

// Endpoint to get a user's favorite items
app.get("/api/fav", verifyToken, (req, res) => {
  // const userFavorites = favs.filter(
  //   (fav) => fav.username === req.user.username
  // );
  res.json({favs});
});

// Endpoint to add a new favorite item for a user
// app.post("/api/favorites", verifyToken, (req, res) => {
//   const { name, url } = req.body;
//   const id = favorites.length + 1;
//   favorites.push({ id, username: req.user.username, name, url });
//   res.json({ id, name, url });
// });

app.post("/api/fav/:id", verifyToken, (req, res) => {
  const { jwt } = req.body;
  const id = req.params.id;

  const isFaved = favs.includes(id)

  if (!isFaved) favs.push(id)
  
  res.json({ favs });
});


// Endpoint to delete a user's favorite item by ID
app.delete("/api/favorites/:id", verifyToken, (req, res) => {
  const favIndex = favorites.findIndex(
    (fav) => fav.id === parseInt(req.params.id)
  );
  if (favIndex === -1 || favorites[favIndex].username !== req.user.username) {
    return res.status(404).json({ message: "Favorite not found" });
  }
  favorites.splice(favIndex, 1);
  res.json({ message: "Favorite deleted successfully" });
});

const port = 8000
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
