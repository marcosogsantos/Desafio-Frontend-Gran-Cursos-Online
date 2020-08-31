const allCategories = [
    { name: "Cell Phone", quantity: 1920},
    { name: "Computers & TAblets", quantity: 1820},
    { name: "Cell Phone Accessories", quantity: 462},
    { name: "Appliances", quantity: 6556},
    { name: "Audio", quantity: 120},
    { name: "IPhone Accessproes", quantity: 353},
    { name: "Cameras & Camcorders", quantity: 45},
    { name: "IPhone Cases & Clips", quantity: 456},
    { name: "TV & Home Theater", quantity: 55},
    { name: "Small Kitchen Appliances", quantity: 10},
];

let categoryCounter = 0;

let newCategoryElement = (props)=>{
    const {name,quantity} = props;
    finalString = `
    <div class="custom-control custom-checkbox">
        <input
        type="checkbox"
        class="custom-control-input"
        id="category${categoryCounter}"
        required
        />
        <label class="custom-control-label d-flex justify-content-between" for="category${categoryCounter}">
        <div>${name}</div>
        <div>${quantity}</div>
        </label>
    </div>
    `
    return finalString
};

$(document).ready(function () {
    for (let category of allCategories){        
        $("#filter-category").append(newCategoryElement(category));
        categoryCounter++
    }
});
