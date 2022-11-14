//utils
const db = require("./utils/database");
const { app } = require("./app");

// authentication
db.authenticate()
  .then(() => {
    console.log("sequelize authentication successful");
  })
  .catch((err) => console.log(`sequelize Authentication error: ${err}`));

// to apply the changes in our models/ tables use: { force:true }
db.sync({ force: false })
  .then(() => {
    console.log("creating tables that did not exist");
  })
  .catch((err) => console.log(`Syncronia error: ${err}`));
//process.env.PORT
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`express server is running on port ${PORT}`);
});
