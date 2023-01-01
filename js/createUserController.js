function openCreateUser() {
    model.currentPage = 'createUserView';
    updateView();
}

function createUser() {
    model.userList.push({
        userName: model.createUser.userName,
        pwd: model.createUser.pwd,
    })
    openLogin();
}