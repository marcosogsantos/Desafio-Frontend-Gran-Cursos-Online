const allBrands = [
    { name: "Insigni", quantity: 220},
    { name: "Samsung", quantity: 120},
    { name: "Apple", quantity: 320},
    { name: "HP", quantity: 32},
    { name: "Sony", quantity: 520},
    { name: "Metra", quantity: 55},
    { name: "Dyne", quantity: 120},
    { name: "LG", quantity: 98},
    { name: "Canon", quantity: 99},
    { name: "Speck", quantity: 575},
];

let brandCounter = 0;

let newBrandElement = (props) => {
    const {name,quantity} = props;
    finalString = `
    <div class="custom-control custom-checkbox">
        <input
        type="checkbox"
        class="custom-control-input"
        id="brand${brandCounter}"
        required
        />
        <label class="custom-control-label d-flex justify-content-between" for="brand${brandCounter}">
        <div>${name}</div>
        <div>${quantity}</div>
        </label>
    </div>
    `
    return finalString
};

$(document).ready(function () {
    for (let brand of allBrands){        
        $("#filter-brand").append(newBrandElement(brand));
        brandCounter++
    }
});
