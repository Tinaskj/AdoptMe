function openLogin() {
    model.currentPage = 'logIn';
    updateView();
}

function logIn() {
    let thisUser = model.userList.find(user => user.userName == model.createUser.userName);
    let thisPwd = model.userList.find(user => user.pwd == model.createUser.pwd);

    if(thisUser && thisPwd){
        model.currentPage = 'mainView';
        updateView();
    }
    else{ alert("wtf");} 
}