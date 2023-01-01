function openRegisterPet() {
    model.currentPage = 'registerPet';
    updateView();
}

function submitPet() {
    model.dogs.push({
        name: model.registerPet.petName,
        breed: model.registerPet.petBreed,
        gender: model.registerPet.petGender,
        age: model.registerPet.petAge,
        image: model.registerPet.image,
    })
    openMainView();
}