function updateViewMain() {
    let html = '';

    html = showHeader();

    html += `
    <div class="backgroundImageMain">
    <img class="main-dogs-img" src="images/DogsMain.jpg"></img>
    </div>
    `
    return html;
    
   
}


function showHeader() {
    html =
    // header
    `
    <div class="header">
        <img src="images/Logo-side.png" onclick="openMainView()" class="logo"/>
            <div class="nav-menu">
                <button onclick="openMainView()" class="nav-button">Home</button>
                <button onclick="openAdoptPet()" class="nav-button">Adopt pet</button>
                <button onclick="openRegisterPet()" class="nav-button">Register pet</button>
                <button onclick="openContact()" class="nav-button">Contact</button>
            </div>
    </div>
`
return html;
}