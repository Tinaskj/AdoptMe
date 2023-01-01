function updateViewAdoptPet(){
    let html = '';

    html = showHeader();
    html += `
    <div class="dog-cards-container">
    `
    for (i = 0; i < model.dogs.length; i++) {

        html += ` 
        <div class="dog-cards">
            <div>Name: ${model.dogs[i].name}</div>
            <div>Breed: ${model.dogs[i].breed}</div>
            <div>Gender: ${model.dogs[i].gender}</div>
            <div>Age: ${model.dogs[i].age}</div>
            <img class="dog-img" src="${model.dogs[i].image}"></img>
        </div>
        
        `
    }

    html += `
    </div>
    `
    return html;
}