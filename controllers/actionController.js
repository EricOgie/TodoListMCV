const { TodoItem } = require('../modules/dbhandler');
const EjsObjects = require("../ejsobjects.js");
const dbHandler = require( "../modules/dbhandler.js");
const ejsObjects = new EjsObjects();

// ---------------------------- Save Taks -----------------------------------//
const saveHomeChore = (req, res)=>{
    const todoObj = new dbHandler.TodoItemHome({todo_item : req.body.toDoItem});
    todoObj.save();
    res.redirect("/");
}

const saveWorkTask = (req, res)=>{
    const todoObj = new dbHandler.TodoItemWork({todo_item : req.body.toDoItem});
    todoObj.save();
    res.redirect("/work");
}

const saveSpiritualTask = (req, res)=>{
    const todoObj = new dbHandler.TodoItemSpiritual({todo_item : req.body.toDoItem});
    todoObj.save();
    res.redirect("/spiritual");
}

// ---------------------------- Delete Taks -----------------------------------//

const deleteHomeTask = (req, res)=>{
    dbHandler.TodoItemHome.findByIdAndRemove(req.body.listSubmit, (err)=>{
        if (err) {
            console.log("Error when dey: ", err);
          } else {
            res.redirect("/");
          }
    })
}

const deleteWorkTask = (req, res)=>{
    dbHandler.TodoItemWork.findByIdAndRemove(req.body.listSubmit, (err)=>{
        if (err) {
            console.log("Error when dey: ", err);
          } else {
            res.redirect("/work");
          }
    })
}

const deleteSpiritualTask = (req, res)=>{
    dbHandler.TodoItemSpiritual.findByIdAndRemove(req.body.listSubmit, (err)=>{
        if (err) {
            console.log("Error when dey: ", err);
          } else {
            res.redirect("/spiritual");
          }
    })
}


module.exports = {

    saveHomeChore,
    saveWorkTask,
    saveSpiritualTask,
    deleteHomeTask,
    deleteWorkTask ,
    deleteSpiritualTask

}