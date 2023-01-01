function updateViewRegisterPet(){
let html = '';

html = showHeader();
html += 
`

<div class="register-container">
    <div class="form-h2">Register a pet:</div>
    <div class="registerForm">
        <div class="form-desc-container">
            <div class="form-div">Name:</div> 
            <div class="form-div">Breed:</div>
            <div class="form-div">Gender:</div>
            <div class="form-div">Age:</div>
            <div class="form-div">Image:</div>
            <div class="form-div">Description:</div>
            <div class="form-div">Price:</div>
        </div>
    
    <div class="form-input-container">
        <div class="form-input"><input type="txt" oninput="model.registerPet.petName=this.value"></input></div>
        <div class="form-input"><input type="search" oninput="model.registerPet.petBreed=this.value"></input></div>
        <div class="form-input"><div class="genderInput">Male<input type="radio" name="gender" onclick="model.registerPet.petGender='Male'"> Female <input type="radio" name="gender" onclick="model.registerPet.petGender='Female'"></div></div>
        <div class="form-input"><input type="number" oninput="model.registerPet.petAge=this.value"></input></div>
        <div class="form-input"><input type="file" id="file" accept="image/*"></input></div>
        <div class="form-input"><input type="txt" oninput="model.registerPet.petDescription"></input></div>
        <div class="form-input"><input type="number" oninput="model.registerPet.petPrice></input></div>
        
    </div>
    
    </div>
    <div class="submit-btn">
    <button class="submit-btn" onclick="submitPet()">Submit</button>
    </div>
</div>
`
return html;
}