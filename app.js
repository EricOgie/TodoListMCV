const express = require('express');
const pagesRouter = require(__dirname + "/routers/router.js");
const app = express();


app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))
app.set('view engine', 'ejs'); // Set-up EJS view engine that will be used to render pages.
  
// --------------------------- Pages Routers ----------------------------//
app.use(pagesRouter);

app.listen(process.env.PORT || 9000, () => {
  console.log(`App Server Listening on Port ${process.env.PORT || 9000}`);
})
