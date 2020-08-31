const allResults = [
    { name: "Apple Watch Series 4 GPS",brand:"APPLE", price: 399,rate:3.4},
    { name: "JBL Speaker",brand:"JBL", price: 199,rate:3.2},
    { name: "Apple Iphone X 128GB",brand:"Apple", price: 899,rate:3.6},
    { name: "Beats Headphones",brand:"Beats", price: 459,rate:3.9},
];

let newProductElement = (props)=>{
    const {name,brand,price,rate} = props;
    finalString = `
    <div
    class="product-row row m-1 mb-3 d-flex bg-white rounded shadow-sm"
  >

    <div class="product-img col">
    </div>
    <div class="col-lg p-0 m-0">
      <div class="row container-fluid p-0 m-0">

      <div class="col">

      <div class="product-name section p-0 pt-2">
        ${name}
      </div>
      <div>
        by
        <button type="button" class="p-0 btn btn-sm">
          <strong>${brand}</strong>
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
          <span class="pl-1">${rate}</span>
        </button>
        </div>
        <div class="text text-center">
            $${price}
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
    for (let category of allResults){        
        $("#search-result").append(newProductElement(category));
    }
});