const express = require("express");
//middlewares
const globalErrHandler = require("./middlewares/globalErrHandler");
//models
const initModels = require("./models/initModels");
//routers
const usersRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const categoriesRoutes = require("./routes/categories.routes");
const videosRoutes = require("./routes/videos.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());
// Initialize relationships
initModels();
// endpoints
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/courses", coursesRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/videos", videosRoutes);
app.use("/api/v1/auth", authRoutes);

// error middleware
app.use("*", globalErrHandler);

module.exports = { app };
// endopints
// * CREATE USER
//localhost:8000/api/v1/users/
// body --> {"firstName":"Wendy","lastName":"Guerra","email":"wendy@gmail.com","password":"666666"}

// * CREATE COURSE
//localhost:8000/api/v1/courses/
// BODY --> {"title":"POO ","description":"POO description","instructor":"Adriana H."}

// * CREATE CATEGORY
//localhost:8000/api/v1/categories/
//body --> {"name":"Java Script","courseId":4}

// * CREATE VIDEO
//localhost:8000/api/v1/videos/
// body --> {"title":"video 01 POO","url":"http.....","courseId":4}

// * ADD COURSE TO USER
//localhost:8000/api/v1/users/addCourse
//body --> {"courseId":4,"userId":7}

// * GET USER BY ID
//localhost:8000/api/v1/users/7

// * GET ALL USERS WITH THEIR COURSES
//localhost:8000/api/v1/users/

// * GET ALL COURSES
//localhost:8000/api/v1/courses/

// * GET ALL COURSES WITH VIDEOS AND CATEGORIES
//localhost:8000/api/v1/courses/info

// * UPDATE USER
//localhost:8000/api/v1/users/1
// body --> {"firstName":"Martha update", "lastName":"Hernandez","password":"juju"}

// * UPDATE COURSE
//localhost:8000/api/v1/courses/5
// body --> {"description":"POO 02 description update"}
