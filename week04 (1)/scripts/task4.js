/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array
let profile = {
    name: "Tim Smith",
    photo:"images/Profile.jpg",
    favoriteFoods: ["Tacos", "Steak", "Potatoes", "Most Vegetables"],
    hobbies: ["Hiking", "College Basketball", "Camping", "Playing in the Lake"],
    placesLived: []
};
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
profile.placesLived = [
    {
        place: "Suncrest, Washington",
        length: 11,
    },
    {
        place: "Spokane, Washington",
        length: 5,
    },
    {
        place: "Pullman, Washington",
        length: 6,
    }
];
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = profile.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', profile.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const fullname = document.querySelector("#name");
const photo = document.querySelector("#photo");
const favoriteFoodsList = document.querySelector("#favorite-foods");
const hobbiesList = document.querySelector("#hobbies");



profile.favoriteFoods.forEach( food => {
    let li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li)
})
// Step 6: Repeat Step 4 for each hobby in the hobbies property
profile.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyElem);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
profile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    