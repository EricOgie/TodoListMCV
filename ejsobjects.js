class EjsValues {

  getDay() {
    const today = new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    return today.toLocaleDateString("en-US", options);
  }

  getEmbedableOject(pgRoute, listArray) {
    let pageTitle = "";
    let deleteAct = "";
    let saveAct = "";

    if (pgRoute === "/") {
      pageTitle = this.getDay();
      saveAct = "/";
      deleteAct = "/delete";
     
      
    } else if(pgRoute === "/work"){
      pageTitle = "Task At Work";
      saveAct = "/work";
      deleteAct = "/work/delete";
     
    }else{
      pageTitle = "Spiritual Routine";
      saveAct = "/spiritual";
      deleteAct = "/spiritual/delete"; 
    }

    const toDoList = {
      heading: pageTitle,
      saveRoute: saveAct,
      deleteRoute: deleteAct,
      list: listArray
    };

    return toDoList;
  }

}

module.exports = EjsValues;
