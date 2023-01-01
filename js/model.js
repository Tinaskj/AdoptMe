const model = {

    // app
    currentPage: '',
    currentUser: '',

    // input

    createUser:
    {
        userName: '',
        pwd: 0,
    },

    registerPet:
    {
        petName: '',
        petBreed: '',
        petGender: '',
        petAge: 0,
        petImage: '',
        petDescription: '',
        petPrice: 0,
    },

    searchPage: 
    {
        breed: '',
        age: 0,
    },


    // data
    dogs: 
    [
        {
            image: 'images/husky.png',
            name: 'Rig',
            breed: 'Husky',
            gender: 'Male',
            age: 3,
        },
        {
            image: 'images/mordex.webp',
            name: 'Mordex',
            breed: 'Wolf',
            gender: 'Male',
            age: 5,
        },
        {
            image: 'images/German-Pinscher.jpg',
            name: 'Yumi',
            breed: 'German Pinscher',
            gender: 'Female',
            age: 4,
        }

    ],
    
    userList: 
    [
        {
            userName: 'Viktor',
            pwd: 123,
        },
        {
            userName: 'Tina',
            pwd: 321,
        },
    ]
}