const { TodoItem } = require('../modules/dbhandler');
const EjsObjects = require("../ejsobjects.js");
const dbHandler = require( "../modules/dbhandler.js");
const ejsObjects = new EjsObjects();

const showHome = (req, res)=>{
    dbHandler.TodoItemHome.find( (err, results)=>{
        if (!err) {
          if (results.length === 0) {
            dbHandler.saveDefaultItems(res);
          }else{
            res.render('List', ejsObjects.getEmbedableOject("/", results));
          }
        }else{
          console.log("error is : ", err);
        }
      }) 
};

const showWork = (req, res)=>{
  
   dbHandler.TodoItemWork.find((err, results)=>{
        if (!err) {
            res.render('List', ejsObjects.getEmbedableOject("/work", results))
        }else{
            console.log("error is : ", err);
        }
    });
}

const showSpitual = (req, res)=>{
  
    dbHandler.TodoItemSpiritual.find((err, results)=>{
        if (!err) {
            res.render('List', ejsObjects.getEmbedableOject("/spiritual", results))
        }else{
            console.log("error is : ", err);
        }
    });
}

module.exports = {
    showHome,
    showWork,
    showSpitual
}