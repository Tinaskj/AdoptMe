function updateViewStart() {
    let html = '';
    html = showHeader();
    html +=
    `
    <div class="start-btns-container">
        <button class="start-btns" onclick="openCreateUser()">Create User</button>
        <button class="start-btns" onclick="openLogin()">LogIn</button>
    </div>
    `
    return html;
}




  