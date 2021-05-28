const express = require('express');
const mongoose = require('mongoose');
const EjsObjects = require("../ejsobjects.js");
const ejsObjects = new EjsObjects();

//--------------------- Make Mongoose connection.......................... //
mongoose.connect('mongodb://localhost/todolistDB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection
.once('open', ()=>{console.log("Connected Make SENZ! Success")})
.on('error', (error)=>{
    console.log("Connected cast oh!!!!!!!")
});

// ----------------------------- Mongose Schema -------------------------------- //
const schema = {todo_item: String};

// ----------------------------- Mongose Model and Default Items -------------------------------- //
const TodoItemHome = mongoose.model("home_chores", schema);
const TodoItemWork = mongoose.model("work_schedule", schema);
const TodoItemSpiritual = mongoose.model("spiritual_doings", schema);
const defaultItems = [new TodoItemHome({todo_item : "Prievious Day Recap"}), new TodoItemHome({todo_item : "Early Warm-ups"})] ;

const saveDefaultItems = (res)=>{
    TodoItemHome.find((err, results)=>{
        if (results.length === 0) {
            TodoItemHome.insertMany(defaultItems, (err)=>{
                if (err) {
                  console.log(err);
                }else{
                  console.log("saved Default Items Success");
                  res.render('List', ejsObjects.getEmbedableOject("/", results));
                }
              });

        } else {
           res.render('List', ejsObjects.getEmbedableOject("/", results)); 
        }
    });

   
  }

const createTodoItemHome = (todoTask)=>{
    return new TodoItemHome({todo_item: todoTask});
}

const createTodoItemWork = (todoTask)=>{
    return new TodoItemWork({todo_item: todoTask});
}

const createTodoItemSpiritual = (todoTask)=>{
    return new TodoItemSpiritual({todo_item: todoTask});
}

module.exports = {
    TodoItemHome,
    TodoItemWork,
    TodoItemSpiritual,
    createTodoItemHome,
    createTodoItemWork,
    createTodoItemSpiritual,
    saveDefaultItems
}
