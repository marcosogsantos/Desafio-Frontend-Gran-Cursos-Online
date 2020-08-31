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
    <div
    class="product-row row  ml-1 mt-3 mb-3 d-flex d-inline bg-white rounded shadow-sm"
  >

    <div class="product-img col">
    </div>
    <div class="col-lg p-0 m-0">
      <div class="row container-fluid p-0 m-0">

      <div class="col">

      <div class="product-name section p-0 pt-2">
        Apple Iphone X 128GB
      </div>
      <div>
        by
        <button type="button" class="p-0 btn btn-sm">
          <strong>Apple</strong>
        </button>
      </div>
      <div class="text-sm">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book.
      </div>
    </div>
    <div class="product-info col-4 align-items-center justify-content-center d-flex w-100 p-0 border-left">
      <div class="">
        <div class="text-left d-flex justify-content-end">
        <button class="text-left p-0 pr-1 m-1 pl-1 btn btn-sm btn-primary">
          <i class="fas fa-star"></i>
          <span class="pl-1">3,6</span>
        </button>
        </div>
        <div class="text text-center">
          $399
        </div>

        <div class="text-smallest text-center">
          <i class="fas fa-shipping-fast"></i> Free Shipping
        </div>

        <button class="btn btn-sm btn-primary btn-block mt-3 mb-3">
          <i class="fas fa-heart"></i>
          <span class="pl-1">WISHLIST </span>
          
        </button>
        <button class="btn btn-sm btn-primary btn-block mt-3 mb-3">
          <i class="fas fa-cart-plus"></i>
          <span class="pl-1">ADD TO CART </span>
        </button>
      </div>
    </div>
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
