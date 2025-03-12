import React from 'react'

function ProductSingle() {
  return (
    <>
  {/* Fixed Bottom Mobile Menu - End */}
  <div className="content mx-auto w-full py-3 px-4 text-sm md:px-6 xl:max-w-7xl xl:px-4">
    <div id="nav-link-top">
      <div className="py-3 text-sm">
        <span className="text-blue-700 hover:underline">
          <a href="./">Home</a>
        </span>
        <span>
          <i className="fas fa-chevron-right text-xs" />
        </span>
        <span className="text-blue-700 hover:underline">
          <a href="./">Women, Shoes &amp; Accessories</a>
        </span>
        <span>
          <i className="fas fa-chevron-right text-xs" />
        </span>
        <span className="text-blue-700 hover:underline">
          <a href="./">Dress</a>
        </span>
        <span>
          <i className="fas fa-chevron-right text-xs" />
        </span>
        <span>Gowns &amp; Dresses</span>
      </div>
    </div>
    <div>
      <div className="space-y-3 text-sm">
        <div id="topItemdiv">
          <div className="mt-0 flex flex-col space-y-3 space-x-0 sm:mt-6 sm:flex-row sm:space-y-0 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col-reverse items-center space-x-0 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-3">
                {/* Product Image Gallery - Start */}
                <div
                  id="image-gallery"
                  className="mt-3 flex flex-row space-x-4 sm:mt-0 sm:flex-col sm:space-x-0 sm:space-y-2"
                >
                  <span className="ring-primary-300 hover:border-primary-600 clear-both table h-8 w-8 cursor-pointer border border-gray-400 ring-2 ring-inset ring-opacity-60 sm:h-12 sm:w-12">
                    <img
                      className="mx-auto my-auto h-full w-full object-contain p-1"
                      onclick="viewPhoto(this);"
                      src="./assets/img/products/fashion/women/18.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover:border-primary-600 clear-both table h-8 w-8 cursor-pointer border border-gray-400 sm:h-12 sm:w-12">
                    <img
                      className="mx-auto my-auto h-full w-full object-contain p-1"
                      onclick="viewPhoto(this);"
                      src="./assets/img/products/fashion/women/19.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover:border-primary-600 clear-both table h-8 w-8 cursor-pointer border border-gray-400 sm:h-12 sm:w-12">
                    <img
                      className="mx-auto my-auto h-full w-full object-contain p-1"
                      onclick="viewPhoto(this);"
                      src="./assets/img/products/fashion/women/20.jpg"
                      alt=""
                    />
                  </span>
                </div>
                {/* Product Image Gallery - End */}
                {/* Large Product Image - Start */}
                <div className="relative h-72 w-full sm:h-96">
                  <img
                    id="clickedProductImg"
                    className="h-full w-full object-contain"
                    src="./assets/img/products/fashion/women/18.jpg"
                    alt=""
                  />
                  <div className="absolute top-4 left-4 hidden p-2 text-lg sm:block">
                    <span
                      id="zoomProductPlus"
                      className="hover:text-primary-800 cursor-pointer"
                    >
                      <i className="fas fa-magnifying-glass-plus" />
                    </span>
                  </div>
                </div>
                {/* Large Product Image - End */}
              </div>
              {/* Share Link div - Start */}
              <div className="pt-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-6 py-3">
                  <p className="cursor-pointer space-x-1">
                    <a href="./account-wishlist.html">
                      <span className="rounded bg-white px-3 py-2">
                        <i className="far fa-bookmark" />
                      </span>
                      <span>Save</span>
                    </a>
                  </p>
                  <p className="space-x-1">
                    <a href="./compare-items.html">
                      <span className="rounded bg-white px-3 py-2">
                        <i className="fas fa-exchange-alt" />
                      </span>
                      <span> Compare</span>
                    </a>
                  </p>
                  <p className="cursor-pointer space-x-1">
                    <span className="rounded bg-white px-3 py-2">
                      <i className="fas fa-mail-forward" />
                    </span>
                    <span> Share</span>
                  </p>
                </div>
              </div>
              {/* Share Link div - End */}
            </div>
            {/* Item Information - Start */}
            <div className="w-full sm:w-1/2">
              <div className="space-y-3">
                <h1 className="text-xl font-medium sm:text-3xl">
                  Deep Red new fashion dress
                </h1>
                <div>
                  Store by:
                  <span>
                    <a
                      className="text-primary-800 font-semibold hover:underline"
                      href="#"
                    >
                      Neykart
                    </a>
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold sm:text-2xl">
                    $129.95
                  </span>
                  <span className="text-gray-400 line-through">$159.95</span>
                  <span className="ml-10 bg-green-700 px-3 py-1 text-base font-semibold text-white">
                    Save $30
                  </span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="inline-flex space-x-1">
                    <span className="text-yellow-400">
                      <i className="fas fa-star" />{" "}
                    </span>
                    <span>(4.9)</span>
                  </div>
                  <div className="ml-10 flex flex-auto items-center space-x-2 sm:ml-20">
                    <span className="flex">
                      <img
                        className="z-30 h-7 w-7 rounded-full border-2 border-gray-50"
                        src="./assets/img/user-profile/avatar-1.jpg"
                        alt=""
                      />
                      <img
                        className="z-20 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                        src="./assets/img/user-profile/avatar-2.jpg"
                        alt=""
                      />
                      <img
                        className="z-10 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                        src="./assets/img/user-profile/avatar-3.jpg"
                        alt=""
                      />
                      <img
                        className="z-0 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                        src="./assets/img/user-profile/avatar-4.jpg"
                        alt=""
                      />
                    </span>
                    <span>
                      <a className="underline" href="#customers-rating-reviews">
                        123 Reviews
                      </a>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p>
                    <span className="font-semibold">Model: </span>NKS1234LS
                  </p>
                  <p>
                    <span className="ml-5 font-semibold sm:ml-10">SKU: </span>
                    0123456789
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    <span className="text-green-500">In Stock</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Gift Eligibility: </span>
                    This item is gift eligible.
                    <span>
                      <a className="underline" href="#">
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
                <div className="bg-primary-100 space-y-3 p-3 text-xs">
                  <p className="text-primary font-semibold">Get it in 7 days</p>
                  <div className="space-y-2">
                    <div>
                      <span>
                        <i className="fas fa-store" />
                      </span>
                      <span className="font-semibold">Store Pickup: </span>
                      <span>
                        Order now for pickup on Wed, Jul 7 at Neykart Store.
                      </span>
                      <span className="cursor-pointer underline">
                        Discover all pickup locations
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fas fa-truck-fast" />
                      </span>
                      <span className="font-semibold">
                        Shipping &amp; Delivery:{" "}
                      </span>
                      <span>Available in your Area.</span>
                      <span className="cursor-pointer underline">
                        Enter your location
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fas fa-circle-arrow-left" />
                      </span>
                      <span className="font-semibold">Easy Return: </span>
                      <span>
                        Return this items until Jul 22, Learn more about
                      </span>
                      <span className="underline">
                        <a href="#">Return Policy</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="mr-5">
                    <select
                      className="w-24 rounded border border-gray-400 py-1 px-2 outline-none"
                      id="select-qty-product"
                      required=""
                    >
                      <option value="">Qty 1</option>
                      <option value="">Qty 2</option>
                      <option value="">Qty 3</option>
                      <option value="">Qty 4</option>
                      <option value="">Qty 5</option>
                    </select>
                  </span>
                  <span>
                    <select
                      className="w-24 rounded border border-gray-400 py-1 px-2 outline-none"
                      id="select-size-product"
                      required=""
                    >
                      <option value="">Size 8.5</option>
                      <option value="">Size 9</option>
                      <option value="">Size 9.5</option>
                      <option value="">Size 10</option>
                      <option value="">Size 10.5</option>
                    </select>
                  </span>
                </div>
                {/* Add to Cart & Buy Now button - Start */}
                <div className="flex items-center space-x-4">
                  <button
                    onclick="location.href = './cart.html'"
                    className="bg-primary-800 w-full rounded px-3 py-2 text-sm font-semibold text-gray-50 transition duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                  <button
                    onclick="location.href = './checkout.html'"
                    className="border-primary text-primary hover:bg-primary-800 w-full rounded border-2 px-3 py-2 text-sm font-semibold transition duration-300 ease-in-out hover:text-gray-50"
                  >
                    Buy Now
                  </button>
                </div>
                {/* Add to Cart & Buy Now button - End */}
                <div>
                  <p className="text-xs">
                    <span>
                      <i className="fas fa-lock" />
                    </span>{" "}
                    This is the secure transaction.
                  </p>
                </div>
              </div>
            </div>
            {/* Item Information - End */}
          </div>
        </div>
        <div id="itemInformation">
          <div className="mt-5">
            <h1 className="border-b border-gray-400 py-2 text-2xl font-bold">
              Product Overview
            </h1>
            {/* Item Description Accordion */}
            <div className="border-b border-gray-400">
              <div className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100">
                <h1 className="font-semibold">Item Description</h1>
                <span className="nk-chevron-icon transition duration-200 ease-in">
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
              <div className="nk-item-info overflow-hidden bg-white">
                <div className="p-4">
                  <div>
                    <h1 className="font-semibold">Product Description</h1>
                    <p className="w-3/4">
                      Originally released in 1982, the Nike Air Force 1 was the
                      first Nike model to feature "Air" technology. This
                      legendary basketball sneaker wa designed by Bruce Kilgore,
                      and named after the aircraft carries, the Air Force One.
                      The Air Force 1 is Nike's most popular sneaker to date,
                      has been produced in nearly 2,000 different colorways, and
                      available in low, mid, and high-top models.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h1 className="font-semibold">Product details</h1>
                    <div>
                      <p>
                        <span className="font-semibold">
                          Package Dimensions:{" "}
                        </span>
                        15.83 x 9.61 inches; 3.17 Pounds
                      </p>
                      <p>
                        <span className="font-semibold">Departments: </span>
                        Mens, Shoes &amp; Accessories
                      </p>
                      <p>
                        <span className="font-semibold">
                          Date First Available:{" "}
                        </span>
                        August 9, 2021
                      </p>
                      <p>
                        <span className="font-semibold">Manufacture: </span>Nike
                      </p>
                      <p>
                        <span className="font-semibold">SKU: </span>NIK123456790
                      </p>
                      <p>
                        <span className="font-semibold">MODEL: </span>
                        NK01234567890
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fabric & Care Accordion 
        <div className="border-b border-gray-400">
          <div
            className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100"
          >
            <h1 className="font-semibold">Fabric &amp; Care</h1>
            <span  className="nk-chevron-icon transition duration-200 ease-in"
              ><i className="fas fa-chevron-down"></i
            ></span>
          </div>
          <div className="nk-item-info overflow-hidden bg-white">
            <div className="p-4">
              <div>
                <h1 className="font-semibold">Product Description</h1>
                <p className="w-3/4">
                  Originally released in 1982, the Nike Air Force 1 was the first Nike model to feature "Air"
                  technology. This legendary basketball sneaker wa designed by Bruce Kilgore, and named after the
                  aircraft carries, the Air Force One. The Air Force 1 is Nike's most popular sneaker to date, has
                  been produced in nearly 2,000 different colorways, and available in low, mid, and high-top
                  models.
                </p>
              </div>
            </div>
          </div>
        </div>
         Size Chart & Information Accordion 
        <div className="border-b border-gray-400">
          <div
            className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100"
          >
            <h1 className="font-semibold">Size Chart &amp; Information</h1>
            <span  className="nk-chevron-icon transition duration-200 ease-in"
              ><i className="fas fa-chevron-down"></i
            ></span>
          </div>
          <div className="nk-item-info overflow-hidden bg-white">
            <div className="p-4">
              <div>
                <h1 className="font-semibold">Product Description</h1>
                <p className="w-3/4">
                  Originally released in 1982, the Nike Air Force 1 was the first Nike model to feature "Air"
                  technology. This legendary basketball sneaker wa designed by Bruce Kilgore, and named after the
                  aircraft carries, the Air Force One. The Air Force 1 is Nike's most popular sneaker to date, has
                  been produced in nearly 2,000 different colorways, and available in low, mid, and high-top
                  models.
                </p>
              </div>
            </div>
          </div>
        </div> */}
            {/* Shipping & Delivery Information Accordion */}
            <div className="border-b border-gray-400">
              <div className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100">
                <h1 className="font-semibold">
                  Shipping &amp; Delivery Information
                </h1>
                <span className="nk-chevron-icon transition duration-200 ease-in">
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
              <div className="nk-item-info overflow-hidden bg-white">
                <div className="p-4">
                  <div>
                    <h1 className="font-semibold">Product Description</h1>
                    <p className="w-3/4">
                      Originally released in 1982, the Nike Air Force 1 was the
                      first Nike model to feature "Air" technology. This
                      legendary basketball sneaker wa designed by Bruce Kilgore,
                      and named after the aircraft carries, the Air Force One.
                      The Air Force 1 is Nike's most popular sneaker to date,
                      has been produced in nearly 2,000 different colorways, and
                      available in low, mid, and high-top models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Refund & Return Information Accordion */}
            <div className="border-b border-gray-400">
              <div className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100">
                <h1 className="font-semibold">
                  Refund &amp; Return Information
                </h1>
                <span className="nk-chevron-icon transition duration-200 ease-in">
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
              <div className="nk-item-info overflow-hidden bg-white">
                <div className="p-4">
                  <div>
                    <h1 className="font-semibold">Product Description</h1>
                    <p className="w-3/4">
                      Originally released in 1982, the Nike Air Force 1 was the
                      first Nike model to feature "Air" technology. This
                      legendary basketball sneaker wa designed by Bruce Kilgore,
                      and named after the aircraft carries, the Air Force One.
                      The Air Force 1 is Nike's most popular sneaker to date,
                      has been produced in nearly 2,000 different colorways, and
                      available in low, mid, and high-top models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Your Protection Plan Accordion */}
            <div className="border-b border-gray-400">
              <div className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100">
                <h1 className="font-semibold">Your Protection Plan</h1>
                <span className="nk-chevron-icon transition duration-200 ease-in">
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
              <div className="nk-item-info overflow-hidden bg-white">
                <div className="p-4">
                  <div>
                    <h1 className="font-semibold">Product Description</h1>
                    <p className="w-3/4">
                      Originally released in 1982, the Nike Air Force 1 was the
                      first Nike model to feature "Air" technology. This
                      legendary basketball sneaker wa designed by Bruce Kilgore,
                      and named after the aircraft carries, the Air Force One.
                      The Air Force 1 is Nike's most popular sneaker to date,
                      has been produced in nearly 2,000 different colorways, and
                      available in low, mid, and high-top models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Questions & Answers Accordion */}
            <div className="border-b border-gray-400">
              <div className="nk-item-accordion flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100">
                <h1 className="font-semibold">Questions &amp; Answers</h1>
                <span className="nk-chevron-icon transition duration-200 ease-in">
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
              <div className="nk-item-info overflow-hidden bg-white">
                <div className="p-4">
                  <div>
                    <h1 className="font-semibold">Product Description</h1>
                    <p className="w-3/4">
                      Originally released in 1982, the Nike Air Force 1 was the
                      first Nike model to feature "Air" technology. This
                      legendary basketball sneaker wa designed by Bruce Kilgore,
                      and named after the aircraft carries, the Air Force One.
                      The Air Force 1 is Nike's most popular sneaker to date,
                      has been produced in nearly 2,000 different colorways, and
                      available in low, mid, and high-top models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Customers Rating & Reviews Accordion - Start */}
            <div
              id="customers-rating-reviews"
              className="border-b border-gray-400"
            >
              <div className="nk-item-accordion nk-active-item-acc flex cursor-pointer items-center justify-between py-4 px-2 transition duration-75 hover:bg-gray-100">
                <h1 className="font-semibold">
                  Customers Rating &amp; Reviews (123)
                </h1>
                <span className="nk-chevron-icon transition duration-200 ease-in">
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
              <div
                className="nk-item-info overflow-hidden bg-white"
                style={{ maxHeight: 898 }}
              >
                <div className="space-y-4 p-4">
                  <div>
                    <div className="flex w-full flex-col space-y-3 space-x-0 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <div className="w-full space-y-2 border-gray-400 pr-4 sm:w-1/2 sm:border-r">
                        <p>Overall Rating &amp; Review</p>
                        <p>What other customer say!</p>
                        <div className="flex flex-col-reverse space-y-3 space-x-0 sm:flex-row sm:space-y-0 sm:space-x-4">
                          <div className="w-full space-y-1 sm:w-3/4">
                            <div className="flex flex-row items-center">
                              <div className="w-2/12">
                                5{" "}
                                <span className="hidden xl:inline-block">
                                  {" "}
                                  stars
                                </span>
                              </div>
                              <div className="w-8/12 rounded-full bg-gray-200">
                                <div className="h-1 w-5/6 rounded-full bg-yellow-400" />
                              </div>
                              <div className="w-2/12 text-center">83%</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="w-2/12">
                                4{" "}
                                <span className="hidden xl:inline-block">
                                  {" "}
                                  stars
                                </span>
                              </div>
                              <div className="w-8/12 rounded-full bg-gray-200">
                                <div
                                  className="h-1 rounded-full bg-yellow-400"
                                  style={{ width: "9%" }}
                                />
                              </div>
                              <div className="w-2/12 text-center">9%</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="w-2/12">
                                3{" "}
                                <span className="hidden xl:inline-block">
                                  {" "}
                                  stars
                                </span>
                              </div>
                              <div className="w-8/12 rounded-full bg-gray-200">
                                <div
                                  className="h-1 rounded-full bg-yellow-400"
                                  style={{ width: "5%" }}
                                />
                              </div>
                              <div className="w-2/12 text-center">5%</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="w-2/12">
                                2{" "}
                                <span className="hidden xl:inline-block">
                                  {" "}
                                  stars
                                </span>
                              </div>
                              <div className="w-8/12 rounded-full bg-gray-200">
                                <div
                                  className="h-1 rounded-full bg-yellow-400"
                                  style={{ width: "1%" }}
                                />
                              </div>
                              <div className="w-2/12 text-center">1%</div>
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="w-2/12">
                                1{" "}
                                <span className="hidden xl:inline-block">
                                  {" "}
                                  stars
                                </span>
                              </div>
                              <div className="w-8/12 rounded-full bg-gray-200">
                                <div
                                  className="h-1 rounded-full bg-yellow-400"
                                  style={{ width: "2%" }}
                                />
                              </div>
                              <div className="w-2/12 text-center">2%</div>
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-center justify-center space-y-1 sm:w-1/4">
                            <h1 className="text-5xl font-bold">4.9</h1>
                            <p className="text-xs">out of 5</p>
                            <p>
                              <span className="text-yellow-400">
                                <i className="fas fa-star" />
                              </span>
                              <span className="hidden text-yellow-400 lg:inline-block">
                                <i className="fas fa-star" />
                              </span>
                              <span className="hidden text-yellow-400 lg:inline-block">
                                <i className="fas fa-star" />
                              </span>
                              <span className="hidden text-yellow-400 lg:inline-block">
                                <i className="fas fa-star" />
                              </span>
                              <span className="hidden text-yellow-400 lg:inline-block">
                                <i className="fas fa-star" />
                              </span>
                            </p>
                            <p>
                              (
                              <a className="hover:underline" href="#">
                                123 Reviews
                              </a>
                              )
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full space-y-2 sm:w-1/2">
                        <p className="font-semibold">Rate this product</p>
                        <div className="flex flex-row items-center space-x-3">
                          <div className="h-12 w-12">
                            <img
                              className="h-full w-full rounded-full"
                              src="./assets/img/user-profile/avatar-1.jpg"
                              alt=""
                            />
                          </div>
                          <div>
                            <p>John Doe Smith</p>
                            <p className="text-xs">United States</p>
                          </div>
                        </div>
                        <div className="text-xs">Please write your Review</div>
                        <p>
                          <span className="cursor-pointer text-gray-400">
                            <i className="far fa-star" />
                          </span>
                          <span className="cursor-pointer text-gray-400">
                            <i className="far fa-star" />
                          </span>
                          <span className="cursor-pointer text-gray-400">
                            <i className="far fa-star" />
                          </span>
                          <span className="cursor-pointer text-gray-400">
                            <i className="far fa-star" />
                          </span>
                          <span className="cursor-pointer text-gray-400">
                            <i className="far fa-star" />
                          </span>
                        </p>
                        <p>
                          <input
                            className="focus:ring-3 focus:ring-primary focus:border-primary w-60 rounded border border-b border-gray-500 bg-gray-100 py-2 text-xs outline-none focus:outline-none focus:ring-1"
                            type="text"
                            placeholder="Write a customer review ..."
                          />
                        </p>
                        <div className="w-40">
                          <button>
                            <span className="nk-chevron-icon bg-primary-600 hover:bg-primary-800 w-full rounded py-2 px-4 text-center text-xs text-gray-50 transition duration-200 ease-in-out">
                              Post Review
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-gray-100 py-2 px-5">
                    <p className="space-x-2">
                      <span>Sort by: </span>
                      <span>
                        <select className="w-48 rounded border border-gray-400 bg-transparent p-1 outline-none">
                          <option value="">Most Recent</option>
                          <option value="">Oldest</option>
                        </select>
                      </span>
                    </p>
                  </div>
                  {/* Display User Reviews - Start */}
                  <div
                    id="getUserReview"
                    className="space-y-6 space-x-2 xl:space-x-0"
                  >
                    {/* Review 1 - Start */}
                    <div className="flex flex-col items-center space-y-2 border border-gray-400 px-3 py-4 text-sm sm:flex-row sm:space-y-0">
                      <div className="flex w-full flex-col items-center space-y-1 text-sm sm:w-2/12">
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full text-xs"
                            src="./assets/img/user-profile/avatar-1.jpg"
                            alt="User"
                          />
                        </div>
                        <p className="font-semibold">George Smith</p>
                        <p className="italic text-green-500">
                          <span>
                            <i className="fas fa-check-circle" />
                          </span>
                          <span>Verified Buyer </span>
                        </p>
                        <p className="underline">
                          <a href="#">Report profile</a>
                        </p>
                      </div>
                      <div className="w-full space-y-2 sm:w-5/12">
                        <div className="flex flex-auto items-center justify-between">
                          <div className="flex flex-row items-center space-x-1 text-xs">
                            <p>
                              <span className="text-yellow-400">
                                <i className="fas fa-star" />
                              </span>
                            </p>
                            <span>4.9</span>
                            <span>|</span>
                            <p className="flex flex-row space-x-2">
                              <span className="hidden sm:whitespace-nowrap md:block">
                                United States{" "}
                              </span>
                              <span>
                                <img
                                  className="h-4 w-4"
                                  src="./assets/icons/flags/USA@2x.svg"
                                  alt="USS Flag"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="font-semibold sm:whitespace-nowrap">
                            01 May, 2021
                          </div>
                        </div>
                        <div>
                          <p>
                            This products is amazing, I bought this product. It
                            is comfortable and looks great. Its perhaps one of
                            the more serious best products so far this year I
                            have received from this company.
                          </p>
                        </div>
                        <div className="flex flex-row space-x-6 text-base">
                          <div>
                            <span className="hover:text-primary-600 cursor-pointer">
                              <i className="far fa-thumbs-up" />
                            </span>
                            <span>12</span>
                          </div>
                          <div>
                            <span className="hover:text-primary-600 cursor-pointer">
                              <i className="far fa-thumbs-down" />
                            </span>
                            <span>0</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center space-y-2 sm:w-3/12">
                        <div className="text-center font-semibold">
                          Was this review helpful to you?
                        </div>
                        <div className="space-x-3">
                          <span className="cursor-pointer rounded border border-gray-400 px-2 py-1 hover:bg-gray-100">
                            Yes
                          </span>
                          <span className="cursor-pointer rounded border border-gray-400 px-2 py-1 hover:bg-gray-100">
                            No
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-2/12">
                        <p className="underline">
                          <a href="#">Report Review</a>
                        </p>
                      </div>
                    </div>
                    {/* Review 1 - End */}
                    {/* Review 2 - Start */}
                    <div className="flex flex-col items-center space-y-2 border border-gray-400 px-3 py-4 text-sm sm:flex-row sm:space-y-0">
                      <div className="flex w-full flex-col items-center space-y-1 text-sm sm:w-2/12">
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full text-xs"
                            src="./assets/img/user-profile/avatar-3.jpg"
                            alt="User"
                          />
                        </div>
                        <p className="font-semibold">Smith John</p>
                        <p className="italic text-green-500">
                          <span>
                            <i className="fas fa-check-circle" />
                          </span>
                          <span>Verified Buyer </span>
                        </p>
                        <p className="underline">
                          <a href="#!">Report profile</a>
                        </p>
                      </div>
                      <div className="w-full space-y-2 sm:w-5/12">
                        <div className="flex flex-auto items-center justify-between">
                          <div className="flex flex-row items-center space-x-1 text-xs">
                            <p>
                              <span className="text-yellow-400">
                                <i className="fas fa-star" />
                              </span>
                            </p>
                            <span>4.8</span>
                            <span>|</span>
                            <p className="flex flex-row space-x-2">
                              <span className="hidden sm:whitespace-nowrap md:block">
                                United States{" "}
                              </span>
                              <span>
                                <img
                                  className="h-4 w-4"
                                  src="./assets/icons/flags/USA@2x.svg"
                                  alt="USS Flag"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="font-semibold sm:whitespace-nowrap">
                            28 April 2021
                          </div>
                        </div>
                        <div>
                          <p>
                            This products is amazing, I bought this product. It
                            is comfortable and looks great. Its perhaps one of
                            the more serious best products so far this year I
                            have received from this company.
                          </p>
                        </div>
                        <div className="flex flex-row space-x-6 text-base">
                          <div>
                            <span className="hover:text-primary-600 cursor-pointer">
                              <i className="far fa-thumbs-up" />
                            </span>
                            <span>19</span>
                          </div>
                          <div>
                            <span className="hover:text-primary-600 cursor-pointer">
                              <i className="far fa-thumbs-down" />
                            </span>
                            <span>0</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center space-y-2 sm:w-3/12">
                        <div className="text-center font-semibold">
                          Was this review helpful to you?
                        </div>
                        <div className="space-x-3">
                          <span className="cursor-pointer rounded border border-gray-400 px-2 py-1 hover:bg-gray-100">
                            Yes
                          </span>
                          <span className="cursor-pointer rounded border border-gray-400 px-2 py-1 hover:bg-gray-100">
                            No
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-2/12">
                        <p className="underline">
                          <a href="#">Report Review</a>
                        </p>
                      </div>
                    </div>
                    {/* Review 2 - End */}
                    {/* Review 3 - Start */}
                    <div className="flex flex-col items-center space-y-2 border border-gray-400 px-3 py-4 text-sm sm:flex-row sm:space-y-0">
                      <div className="flex w-full flex-col items-center space-y-1 text-sm sm:w-2/12">
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full text-xs"
                            src="./assets/img/user-profile/avatar-2.jpg"
                            alt="User"
                          />
                        </div>
                        <p className="font-semibold">Mary Doe John</p>
                        <p className="italic text-green-500">
                          <span>
                            <i className="fas fa-check-circle" />
                          </span>
                          <span>Verified Buyer </span>
                        </p>
                        <p className="underline">
                          <a href="#!">Report profile</a>
                        </p>
                      </div>
                      <div className="w-full space-y-2 sm:w-5/12">
                        <div className="flex flex-auto items-center justify-between">
                          <div className="flex flex-row items-center space-x-1 text-xs">
                            <p>
                              <span className="text-yellow-400">
                                <i className="fas fa-star" />
                              </span>
                            </p>
                            <span>4.8</span>
                            <span>|</span>
                            <p className="flex flex-row space-x-2">
                              <span className="hidden sm:whitespace-nowrap md:block">
                                South Africa{" "}
                              </span>
                              <span>
                                <img
                                  className="h-4 w-4"
                                  src="./assets/icons/flags/south_africa@2x.svg"
                                  alt="USS Flag"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="font-semibold sm:whitespace-nowrap">
                            26 April 2021
                          </div>
                        </div>
                        <div>
                          <p>
                            This products is amazing, I bought this product. It
                            is comfortable and looks great. Its perhaps one of
                            the more serious best products so far this year I
                            have received from this company.
                          </p>
                        </div>
                        <div className="flex flex-row space-x-6 text-base">
                          <div>
                            <span className="hover:text-primary-600 cursor-pointer">
                              <i className="far fa-thumbs-up" />
                            </span>
                            <span>39</span>
                          </div>
                          <div>
                            <span className="hover:text-primary-600 cursor-pointer">
                              <i className="far fa-thumbs-down" />
                            </span>
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center space-y-2 sm:w-3/12">
                        <div className="text-center font-semibold">
                          Was this review helpful to you?
                        </div>
                        <div className="space-x-3">
                          <span className="cursor-pointer rounded border border-gray-400 px-2 py-1 hover:bg-gray-100">
                            Yes
                          </span>
                          <span className="cursor-pointer rounded border border-gray-400 px-2 py-1 hover:bg-gray-100">
                            No
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-2/12">
                        <p className="underline">
                          <a href="#">Report Review</a>
                        </p>
                      </div>
                    </div>
                    {/* Review 3 - End */}
                  </div>
                  {/* Display User Reviews - End */}
                  {/* Load More User Reviews - Start */}
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="ml-20 flex flex-auto items-center space-x-2">
                      <span className="flex">
                        <img
                          className="z-30 h-7 w-7 rounded-full border-2 border-gray-50"
                          src="./assets/img/user-profile/avatar-1.jpg"
                          alt=""
                        />
                        <img
                          className="z-20 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                          src="./assets/img/user-profile/avatar-2.jpg"
                          alt=""
                        />
                        <img
                          className="z-10 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                          src="./assets/img/user-profile/avatar-3.jpg"
                          alt=""
                        />
                        <img
                          className="z-0 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                          src="./assets/img/user-profile/avatar-4.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <a href="#">
                          <span className="mr-2 underline">
                            123 more Reviews
                          </span>
                          <span>
                            <i className="fas fa-chevron-down" />
                          </span>{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                  {/* Load More User Reviews - End */}
                </div>
              </div>
            </div>
            {/* Customers Rating & Reviews Accordion - End */}
          </div>
        </div>
        {/* Sponsored Banner - Start */}
        <div id="sponsoredItems">
          <div className="mt-7 space-y-1">
            <h1 className="text-sm font-semibold sm:text-2xl">
              Related Items currently viewing
            </h1>
            <p className="cursor-pointer text-xs hover:underline">
              sponsored{" "}
              <span>
                <i className="fas fa-info-circle" />
              </span>
            </p>
            <div>
              <a href="./shop-product.html">
                <img src="./assets/img/banners/banner1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Sponsored Banner - End */}
        {/* Recommendation - Start */}
        <div id="otherRelatedItems" className="space-y-3">
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="pt-5 text-sm font-semibold sm:text-2xl">
                  Customers who bought this item also bought...
                </h1>
                <span>
                  <a
                    className="hidden cursor-pointer text-blue-700 hover:underline sm:block"
                    href="#!"
                  >
                    View All <i className="fas fa-caret-right" />
                  </a>
                </span>
              </div>
              <div className="nk-swiper-container">
                <div className="swiper nk-bought-swiper">
                  <div id="itemBought" className="swiper-wrapper">
                    {/* Items Bought 1 together - Start */}
                    <div className="group swiper-slide flex-shrink-0 flex-grow space-y-1 rounded border-gray-400 py-3 pb-3 xl:flex-shrink xl:flex-grow-0">
                      <div className="relative h-[13rem] w-full cursor-pointer lg:h-[14.25rem]">
                        <img
                          className="mx-auto my-auto h-full w-full object-contain text-xs"
                          src="./assets/img/products/fashion/women/3.jpg"
                          alt="Item 1"
                        />
                        <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
                          <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                            <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./account-wishlist.html">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <div
                                data-modal-toggle="nk-modal-quick-view"
                                className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50"
                              >
                                <i className="fa-regular fa-eye" />
                              </div>
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./compare-items.html">
                                  {" "}
                                  <i className="fas fa-exchange-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h1 className="cursor-pointer text-sm text-blue-700 hover:underline">
                          <a
                            className="line-clamp-1"
                            href="./shop-product.html"
                          >
                            <p>Women's multi-color long dress</p>
                          </a>
                        </h1>
                        <div className="font-semibold">
                          <span className="price-value text-lg text-gray-900">
                            $130
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $159
                          </span>
                        </div>
                        <div className="h-6">
                          <a
                            className="flex items-center justify-between"
                            href="./shop-product.html#customers-rating-reviews"
                          >
                            <span className="text-yellow-400">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                            <span className="text-xs text-blue-700 hover:underline">
                              (456)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Items Bought 1 together - End */}
                    {/* Items Bought 2 together - Start */}
                    <div className="group swiper-slide flex-shrink-0 flex-grow space-y-1 rounded border-gray-400 py-3 pb-3 xl:flex-shrink xl:flex-grow-0">
                      <div className="relative h-[13rem] w-full cursor-pointer lg:h-[14.25rem]">
                        <img
                          className="mx-auto my-auto h-full w-full object-contain text-xs"
                          src="./assets/img/products/fashion/shoes/2.jpg"
                          alt="Item 1"
                        />
                        <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
                          <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                            <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./account-wishlist.html">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <div
                                data-modal-toggle="nk-modal-quick-view"
                                className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50"
                              >
                                <i className="fa-regular fa-eye" />
                              </div>
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./compare-items.html">
                                  {" "}
                                  <i className="fas fa-exchange-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h1 className="cursor-pointer text-sm text-blue-700 hover:underline">
                          <a
                            className="line-clamp-1"
                            href="./shop-product.html"
                          >
                            <p>
                              Nike Air Pegasus 37 Tb Running Shoe Mens
                              Cj0677-001 Size 7.5 Black/White
                            </p>
                          </a>
                        </h1>
                        <div className="font-semibold">
                          <span className="price-value text-lg text-gray-900">
                            $119.99
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $299.99
                          </span>
                        </div>
                        <div className="h-6">
                          <a
                            className="flex items-center justify-between"
                            href="./shop-product.html#customers-rating-reviews"
                          >
                            <span className="text-yellow-400">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                            <span className="text-xs text-blue-700 hover:underline">
                              (324)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Items Bought 2 together - End */}
                    {/* Items Bought 3 together - Start */}
                    <div className="group swiper-slide flex-shrink-0 flex-grow space-y-1 rounded border-gray-400 py-3 pb-3 xl:flex-shrink xl:flex-grow-0">
                      <div className="relative h-[13rem] w-full cursor-pointer lg:h-[14.25rem]">
                        <img
                          className="mx-auto my-auto h-full w-full object-contain text-xs"
                          src="./assets/img/products/fashion/men/19.jpg"
                          alt="Item 1"
                        />
                        <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
                          <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                            <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./account-wishlist.html">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <div
                                data-modal-toggle="nk-modal-quick-view"
                                className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50"
                              >
                                <i className="fa-regular fa-eye" />
                              </div>
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./compare-items.html">
                                  {" "}
                                  <i className="fas fa-exchange-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h1 className="cursor-pointer text-sm text-blue-700 hover:underline">
                          <a
                            className="line-clamp-1"
                            href="./shop-product.html"
                          >
                            <p>Light green long sleeve shirts</p>
                          </a>
                        </h1>
                        <div className="font-semibold">
                          <span className="price-value text-lg text-gray-900">
                            $180
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $199
                          </span>
                        </div>
                        <div className="h-6">
                          <a
                            className="flex items-center justify-between"
                            href="./shop-product.html#customers-rating-reviews"
                          >
                            <span className="text-yellow-400">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                            <span className="text-xs text-blue-700 hover:underline">
                              (46)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Items Bought 3 together - End */}
                    {/* Items Bought 4 together - Start */}
                    <div className="group swiper-slide flex-shrink-0 flex-grow space-y-1 rounded border-gray-400 py-3 pb-3 xl:flex-shrink xl:flex-grow-0">
                      <div className="relative h-[13rem] w-full cursor-pointer lg:h-[14.25rem]">
                        <img
                          className="mx-auto my-auto h-full w-full object-contain text-xs"
                          src="./assets/img/products/fashion/shoes/1.jpg"
                          alt="Item 1"
                        />
                        <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
                          <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                            <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./account-wishlist.html">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <div
                                data-modal-toggle="nk-modal-quick-view"
                                className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50"
                              >
                                <i className="fa-regular fa-eye" />
                              </div>
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./compare-items.html">
                                  {" "}
                                  <i className="fas fa-exchange-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h1 className="cursor-pointer text-sm text-blue-700 hover:underline">
                          <a
                            className="line-clamp-1"
                            href="./shop-product.html"
                          >
                            <p>
                              Air Force Nike Precision IV Men's Basketball
                              Trainers NK 1268 Sneakers Shoes (UK 9.5 US 10.5 EU
                              8.5)
                            </p>
                          </a>
                        </h1>
                        <div className="font-semibold">
                          <span className="price-value text-lg text-gray-900">
                            $299.99
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $399.99
                          </span>
                        </div>
                        <div className="h-6">
                          <a
                            className="flex items-center justify-between"
                            href="./shop-product.html#customers-rating-reviews"
                          >
                            <span className="text-yellow-400">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                            <span className="text-xs text-blue-700 hover:underline">
                              (39)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Items Bought 4 together - End */}
                    {/* Items Bought 5 together - Start */}
                    <div className="group swiper-slide flex-shrink-0 flex-grow space-y-1 rounded border-gray-400 py-3 pb-3 xl:flex-shrink xl:flex-grow-0">
                      <div className="relative h-[13rem] w-full cursor-pointer lg:h-[14.25rem]">
                        <img
                          className="mx-auto my-auto h-full w-full object-contain text-xs"
                          src="./assets/img/products/fashion/women/6.jpg"
                          alt="Item 1"
                        />
                        <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
                          <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                            <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./account-wishlist.html">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <div
                                data-modal-toggle="nk-modal-quick-view"
                                className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50"
                              >
                                <i className="fa-regular fa-eye" />
                              </div>
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./compare-items.html">
                                  {" "}
                                  <i className="fas fa-exchange-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h1 className="cursor-pointer text-sm text-blue-700 hover:underline">
                          <a
                            className="line-clamp-1"
                            href="./shop-product.html"
                          >
                            <p>Long dress for women events</p>
                          </a>
                        </h1>
                        <div className="font-semibold">
                          <span className="price-value text-lg text-gray-900">
                            $99
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $59
                          </span>
                        </div>
                        <div className="h-6">
                          <a
                            className="flex items-center justify-between"
                            href="./shop-product.html#customers-rating-reviews"
                          >
                            <span className="text-yellow-400">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                            <span className="text-xs text-blue-700 hover:underline">
                              (78)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Items Bought 5 together - End */}
                    {/* Items Bought 6 together - Start */}
                    <div className="group swiper-slide flex-shrink-0 flex-grow space-y-1 rounded border-gray-400 py-3 pb-3 xl:flex-shrink xl:flex-grow-0">
                      <div className="relative h-[13rem] w-full cursor-pointer lg:h-[14.25rem]">
                        <img
                          className="mx-auto my-auto h-full w-full object-contain text-xs"
                          src="./assets/img/products/fashion/women/22.jpg"
                          alt="Item 1"
                        />
                        <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
                          <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                            <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./account-wishlist.html">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <div
                                data-modal-toggle="nk-modal-quick-view"
                                className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50"
                              >
                                <i className="fa-regular fa-eye" />
                              </div>
                              <div className="hover:bg-primary h-10 w-10 bg-white p-2 hover:text-gray-50">
                                <a href="./compare-items.html">
                                  {" "}
                                  <i className="fas fa-exchange-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h1 className="cursor-pointer text-sm text-blue-700 hover:underline">
                          <a
                            className="line-clamp-1"
                            href="./shop-product.html"
                          >
                            <p>Fashionable red dress for sale</p>
                          </a>
                        </h1>
                        <div className="font-semibold">
                          <span className="price-value text-lg text-gray-900">
                            $168
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            $199
                          </span>
                        </div>
                        <div className="h-6">
                          <a
                            className="flex items-center justify-between"
                            href="./shop-product.html#customers-rating-reviews"
                          >
                            <span className="text-yellow-400">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                            <span className="text-xs text-blue-700 hover:underline">
                              (100)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Items Bought 1 together - End */}
                  </div>
                  {/* If we need navigation */}
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
                {/* If we need pagination */}
                <div className="nk-pagination">
                  <div className="nk-swiper-bought-pag" />
                </div>
              </div>
            </div>
            {/* Recommendation - End */}
          </div>
          {/* User Feedback */}
          <div className="mx-auto w-full border border-gray-400 bg-white px-5 py-6 sm:w-2/3">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div>
                <span className="font-semibold">Feedback:</span>{" "}
                <br className="block xl:hidden" />
                Did you find what you were looking for?
              </div>
              <div className="mt-3 space-x-4 xl:mt-0">
                <span className="cursor-pointer rounded border border-gray-400 px-5 py-2 text-center hover:bg-gray-100">
                  Yes
                </span>
                <span className="cursor-pointer rounded border border-gray-400 px-5 py-2 text-center hover:bg-gray-100">
                  No
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default ProductSingle