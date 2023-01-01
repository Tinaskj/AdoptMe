function updateCreateUserView() {
    let html = '';

    html = showHeader();

    html +=
        `
        <div class="create-user-input-container">
            <div class="create-user-input">
                Username:
                <input
                type="txt"
                oninput="model.createUser.userName=this.value"/>
            </div>
            </br>
            <div class="create-user-input">
                Password:
                <input
                type="password"
                oninput="model.createUser.pwd=this.value"/>
            </br>
            </div>
            <button onclick="createUser()">Create User</button>
        </div>
        `
    return html;
}