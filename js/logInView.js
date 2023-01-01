function updateViewLogin() {
    let html = '';
    html = showHeader();
    html = 
    `<div class="login-container">
        <div class="login-username">
            Username:
            <input 
            type="txt"
            oninput="model.createUser.userName=this.value"
            />
    </div>
    </br>
    <div class="login-password">
        Password:
        <input 
        type="password"
        oninput="model.createUser.pwd=this.value"
        />
        </br>
    </div>
    <button onclick="logIn()">Log In</button>
    </div>
    `
    return html;
}