import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Config, Urlimage } from '../Config/connection';
export default function Header() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const [itemTiles, setItemTiles] = useState([]);
  const fetchTile = async () => {
    try {
      const response = await fetch(api + 'posd/group');
      const jsonData = await response.json();
      // const filteredData = jsonData.filter(item => item.type_id_fk !== 2);

      setItemTiles(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const [orderCart, setOrderCart] = useState([]);
  const savedCart = JSON.parse(localStorage.getItem('orderCart')) || [];

  useEffect(() => {
    setOrderCart(savedCart);
    fetchTile();
  }, [])

  const [flag, setFlag] = useState(1)
  const chengeLanguage = (index) => {
    setFlag(index)
  }

  const removeCart = (product_id_fk) => {
    const updatedCart = orderCart.filter(item => item.product_id_fk !== product_id_fk);
    setOrderCart(updatedCart);
    localStorage.setItem('orderCart', JSON.stringify(updatedCart)); // Update localStorage
  };
  return (
    <header id="header-4 " className=''>
      <nav>
        <div className="w-full bg-gradient-to-r from-[#FF0000] to-[#FFF455]   py-2.5 text-sm text-white lg:py-0 ">
          <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-3 py-2 lg:px-0">
            {/* <!-- Deliver to - End --> */}
            <div className="my-0 mx-auto overflow-hidden whitespace-nowrap text-center">
              <span className="animate-nk-slide inline-block"> ຮ້ານຄຳ ນາງວຽງຄຳ ຍິນດີຕ້ອນຮັບທ່ານເຂົ້າສູ່ເວັບໄຊທ໌  😍</span>
            </div>
            <div className="hidden flex-row items-center space-x-6 lg:flex text-right">
              {/* <!-- Language & Currency - Start --> */}
              <div className="nk-lang-currency">
                <div className="nk-lang-currency-link border border-white rounded-pill">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="nk-lang-currency-link border border-white rounded-pill">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="nk-lang-currency-link border border-white rounded-pill">
                  <i className="fa-brands fa-tiktok"></i>
                </div>

                <div className="nk-lang-currency-link border border-white rounded-pill">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>

                <div className="nk-lang-currency-link border border-white rounded-pill">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="middle-container">
          <div className="hidden xl:block xl:px-2 ">
            <div id="deps-section" className="nk-logo-container">
              <div className="nk-flex-row-2 space-x-5">
                <div className="nk-logo">
                  <Link className="text-primary h-full" to={'/'}>
                    <img className="h-full object-contain" src="assets/img/logo/logo.png" width={'100%'} alt="" />
                  </Link>
                </div>
                <div className="hover:text-primary-600 nk-dropdown-slide w-1/4 md:block">
                  <div className="nk-dropdown-menu-link">
                    <span className='text-xl'>ຮ້ານຄຳ ນາງວຽງຄຳ
                      <br />
                      <div className='text-sm'>ຕັ້ງຢູ່ຕະຫລາດເຊົ້າມໍຊັ້ນ2</div>
                    </span>
                  </div>
                </div>
                <div className="w-[570px]">
                  <div className="relative">
                    <input type="text" className="nk-input-container rounded-pill nk-search-main" placeholder="ຄົ້ນຫາຂໍ້ມູມ ..." />
                    <div className="nk-input-icon-right">
                      <button type="button" className="bg-danger hover:bg-danger-800 focus:ring-danger-300 rounded-full py-2 px-3 text-center text-xs font-medium text-white focus:ring-4" >
                        <i className="fa-solid fa-magnifying-glass" /> ຄົ້ນຫາ
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Header Search Form - End --> */}
              </div>

              <div className="nk-flex-row-2">
                <div className="nk-dropdown-slide group nk-mini-cart-section text-gray-600">
                  <Link to={'/ordering'} className="nk-main-nav text-gray-600 !py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red text-center text-lg" >
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="group-hover:text-primary-600">
                      <div className="text-xs">ຈັດການຊື້ສິນຄ້າ</div>
                      <div className="text-lg font-bold">ລົງຊື້ສິນຄ້າ</div>
                    </div>
                  </Link>
                </div>

                {/* <!-- Wishlist Section - Start -->  */}
                <div className="nk-dropdown-slide group text-gray-600">
                  <Link to={'/'} className="nk-main-nav text-gray-600 !py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red text-center text-lg" >
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="group-hover:text-primary-600">
                      <div className="text-xs">Explore & Save</div>
                      <div className="text-lg font-bold">ສິ່ງທີ່ຂ້ອຍມັກ</div>
                    </div>
                  </Link>
                </div>


                <div className="nk-dropdown-slide group ">
                  <Link to={'/profile'} className="nk-main-nav text-gray-600 !py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-red text-center text-lg" >
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="group-hover:text-primary-600">
                      <div className="text-xs">Hello, Sign In</div>
                      <div className="text-lg font-bold">ບັນຊີຂອງຂ້ອຍ</div>
                    </div>
                  </Link>
                </div>
                {/* <!-- Account Section - End --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="nk-border-separator"></div>
        <div id="bottomBar" className="nk-main-header " >
          <div className="nk-header-container">
            <div className="nk-left-nav">
              <div className="nk-nav-padding">
                <span><i className="fas fas fa-map-marker-alt"></i></span>
                <Link className="nk-cat-hover-underline " to={'/'}> ທີ່ຢູ່ຮ້ານຄຳ ນາງວຽງຄຳ </Link>
              </div>
              <div className="nk-nav-padding fs-16px"><Link className="nk-cat-hover-underline" to='/'>ໜ້າຫຼັກ</Link></div>

              <div data-dropdown="#pages-dropdown" className="nk-dropdown-slide hover:underline">
                <div className="nk-dropdown-menu-link text-white hover:underline fs-16px">
                  <span className='me-2'>ປະເພດສິນຄ້າ</span>
                  <span><i className="fas fa-chevron-down"></i></span>
                </div>
                <div id="pages-dropdown" className="nk-dropdown_menu nk-dropdown-menu-animated w-[250px]">
                  <span className="nk-top-dropdown-triangle -left-[187px]"></span>
                  <div className="nk-dropdown-content">
                    {/* {itemTiles.map((item, index) =>
                      <Link className="nk-dropdown-nav-link fs-16px" to={'/pdc?p=' + item.tile_uuid}><i className="fa-solid fa-angle-right me-2" /> {item.tile_name}</Link>
                    )} */}
                    {itemTiles.map((item, index) =>
                      <Link key={item.tile_uuid || index} className="nk-dropdown-nav-link fs-16px" to={'/pdc?p=' + item.tile_uuid}>
                        <i className="fa-solid fa-angle-right me-2" /> {item.tile_name}
                      </Link>
                    )}

                  </div>
                </div>
              </div>
              <div className="nk-nav-padding fs-16px"><Link className="nk-cat-hover-underline" to='/product'>ສິນຄ້າທັງໝົດ</Link></div>
              <div className="nk-nav-padding fs-16px"><Link className="nk-cat-hover-underline" to={'/recomend'}>ສິນຄ້າແນະນຳ</Link></div>
              <div className="nk-nav-padding fs-16px"><Link className="nk-cat-hover-underline" to={'/news'}>ຂ່າວສານ</Link></div>
              <div className="nk-nav-padding fs-16px"><Link className="nk-cat-hover-underline" to={'/gift'}>ຂອງຂວັນ</Link></div>
              <div className="nk-nav-padding fs-16px"><Link className="nk-cat-hover-underline" to={'/promotion'}>ໂປຣໂມຊັນ</Link></div>
              <div data-dropdown="#pages-dropdown" className="nk-dropdown-slide hover:underline">
                <div className="nk-dropdown-menu-link text-white hover:underline fs-16px">
                  <span className='me-2'>ບໍລິການອື່ນໆ</span>
                  <span><i className="fas fa-chevron-down"></i></span>
                </div>
                <div id="pages-dropdown" className="nk-dropdown_menu nk-dropdown-menu-animated w-[250px]">
                  <span className="nk-top-dropdown-triangle -left-[187px]"></span>
                  <div className="nk-dropdown-content">
                    <Link className="nk-dropdown-nav-link" to={'/pattern'}><i className="fa-solid fa-angle-right" /> ລວມລາຍປະຈຳຮ້ານ</Link>
                    <Link className="nk-dropdown-nav-link" to={'/job'}><i className="fa-solid fa-angle-right" /> ຮ້ບສະໝັກງານ</Link>
                    <Link className="nk-dropdown-nav-link" to={'/policy'}><i className="fa-solid fa-angle-right" /> ນະໂຍບາຍປະຈຳຮ້ານ</Link>
                    <Link className="nk-dropdown-nav-link" to={'/checkbuy'}><i className="fa-solid fa-angle-right" /> ກວດສອບການສັ່ງຊື້</Link>
                    <Link className="nk-dropdown-nav-link" to={'/about'}><i className="fa-solid fa-angle-right" /> ກຽວກັບຮ້ານຄຳ ນາງວຽງຄຳ</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* <!-- Bottom Menus - End --> */}
        <div className="nk-border-separator"></div>
        {/* <!-- Responsive Device Menu - Start --> */}
        <div className="nk-mobile-container">
          <div id="slide-mobile-menu" className="nk-mobile-menu">
            <ul className="space-y-2 text-sm">
              <li className="nk-flex-items px-4">
                <span className="nk-mob-title">Menus & Pages</span>
                <span
                ><a href="#" className="text-2xl" data-close-sidebar="#slide-mobile-menu">&times;</a></span
                >
              </li>
              <li className="nk-input-li">
                <div className="nk-input-div">
                  <div className="nk-sticky-input">
                    <input
                      type="text"
                      id="deps-search-bar"
                      className="nk-input-container"
                      placeholder="Search categories ..."
                      autoComplete="off"
                    />
                    <div className="nk-magnify-icon">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-4 text-sm text-gray-500">
                <ul className="space-y-3 py-2">
                  <li className="nk-item-accordion-li">
                    <div className="nk-item-accordion">
                      <div>Home</div>
                      <div className="nk-chevron-icon">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="nk-item-info">
                      <ul>
                        <li>
                          <a href="index.html" className="nk-all-department-link">
                            <span>Home 01 - Fashion</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-furniture.html" className="nk-all-department-link">
                            <span>Home 02 - Furniture</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-grocery.html" className="nk-all-department-link">
                            <span>Home 03 - Grocery</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!" className="nk-all-department-link">
                            <span>Home 04 - Coming Soon</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nk-item-accordion-li">
                    <div className="nk-item-accordion">
                      <div>Shop</div>
                      <div className="nk-chevron-icon">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="nk-item-info">
                      <div className="nk-dropdown-content">
                        <a className="nk-dropdown-nav-link" href="shop-grid-right-sidebar.html">Shop Grid - Right Sidebar</a>
                        <a className="nk-dropdown-nav-link" href="shop-grid-left-sidebar.html">
                          <div>Shop Grid - Left Sidebar</div>
                        </a>
                        <a className="nk-dropdown-nav-link" href="shop-list-right-sidebar.html">Shop List - Right Sidebar</a>
                        <a className="nk-dropdown-nav-link" href="shop-list-left-sidebar.html">Shop List - Left Sidebar</a>
                        <a className="nk-dropdown-nav-link" href="shop-wide.html">Shop - Full width wide</a>
                        <a className="nk-dropdown-nav-link" href="shop-product.html">Single Product</a>
                        <a className="nk-dropdown-nav-link" href="cart.html">Cart 1</a>
                        <a className="nk-dropdown-nav-link" href="cart-2.html">Cart 2</a>
                        <a className="nk-dropdown-nav-link" href="empty-cart.html">Empty Cart</a>
                        <a className="nk-dropdown-nav-link" href="checkout.html">Checkout</a>
                        <a className="nk-dropdown-nav-link" href="account-wishlist.html">Wishlist</a>
                        <a className="nk-dropdown-nav-link" href="empty-wishlist.html">Empty Wishlist</a>
                        <a className="nk-dropdown-nav-link" href="compare-items.html">Compare</a>
                        <a className="nk-dropdown-nav-link" href="shop.html">Shop All</a>
                        <a className="nk-dropdown-nav-link" href="no-search-result-found.html">No Search Result Found</a>
                      </div>
                    </div>
                  </li>
                  <li className="nk-item-accordion-li">
                    <div className="nk-item-accordion">
                      <div>Shop by Categories</div>
                      <div className="nk-chevron-icon">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="nk-item-info">
                      <ul>
                        <li>
                          <a href="#" className="nk-all-department-link">
                            <span>Women, Accessories & Shoes</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nk-all-department-link">
                            <span>Men, Accessories & Shoes</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nk-all-department-link">
                            <span>Electronics & Office</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nk-all-department-link">
                            <span>Home, Furniture & Appliance</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nk-all-department-link">
                            <span>Youths & Accessories</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nk-all-department-link">
                            <span>Home Garden & Patio</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nk-item-accordion-li">
                    <div className="nk-item-accordion">
                      <div>Pages</div>
                      <div className="nk-chevron-icon">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="nk-item-info">
                      <div className="nk-dropdown-content">
                        <a className="nk-dropdown-nav-link" href="about.html">About Us</a>
                        <a className="nk-dropdown-nav-link" href="contact.html">Contact Us</a>
                        <a className="nk-dropdown-nav-link" href="faqs.html">FAQs</a>
                        <a className="nk-dropdown-nav-link" href="coming-soon.html">Coming Soon</a>
                        <a className="nk-dropdown-nav-link" href="not-found.html">Not Found - 404</a>
                        <a className="nk-dropdown-nav-link" href="signin.html">Sign In</a>
                        <a className="nk-dropdown-nav-link" href="signup.html">Sign Up</a>
                        <a className="nk-dropdown-nav-link" href="account-overview.html">My Account</a>
                        <a className="nk-dropdown-nav-link" href="blog.html">Blog Grid</a>
                        <a className="nk-dropdown-nav-link" href="blog-list.html">Blog List</a>
                      </div>
                    </div>
                  </li>
                  <li className="nk-item-accordion-li">
                    <div className="nk-item-accordion">
                      <div>Elements</div>
                      <div className="nk-chevron-icon">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="nk-item-info">
                      <div className="flex w-full flex-col p-2">
                        <a className="nk-dropdown-nav-link" href="el_accordion.html">Accordions</a>
                        <a className="nk-dropdown-nav-link" href="el_alerts.html">Alert & Notification</a>
                        <a className="nk-dropdown-nav-link" href="el_avatar.html">Avatar</a>
                        <a className="nk-dropdown-nav-link" href="el_badges.html">Badges</a>
                        <a className="nk-dropdown-nav-link" href="el_breadcrumb.html">Breadcrumb</a>
                        <a className="nk-dropdown-nav-link" href="el_buttons-group.html">Buttons Group</a>
                        <a className="nk-dropdown-nav-link" href="el_buttons.html">Buttons</a>
                        <a className="nk-dropdown-nav-link" href="el_cards.html">Cards</a>
                        <a className="nk-dropdown-nav-link" href="el_carousel.html">Carousel</a>
                        <a className="nk-dropdown-nav-link" href="el_dropdowns.html">Dropdowns</a>
                        <a className="nk-dropdown-nav-link" href="el_footer.html">Footer</a>
                        <a className="nk-dropdown-nav-link" href="el_forms.html">Forms</a>
                        <a className="nk-dropdown-nav-link" href="el_list-group.html">List Group</a>
                        <a className="nk-dropdown-nav-link" href="el_modals.html">Modals</a>
                        <a className="nk-dropdown-nav-link" href="el_navbar.html">Navbar</a>
                        <a className="nk-dropdown-nav-link" href="el_pagination.html">Pagination</a>
                        <a className="nk-dropdown-nav-link" href="el_progress.html">Progress</a>
                        <a className="nk-dropdown-nav-link" href="el_rating.html">Rating</a>
                        <a className="nk-dropdown-nav-link" href="el_sidebar.html">Sidebar</a>
                        <a className="nk-dropdown-nav-link" href="el_spinner.html">Spinner</a>
                        <a className="nk-dropdown-nav-link" href="el_tables.html">Tables</a>
                        <a className="nk-dropdown-nav-link" href="el_tabs.html">Tabs</a>
                        <a className="nk-dropdown-nav-link" href="el_timeline.html">Timeline</a>
                        <a className="nk-dropdown-nav-link" href="el_toast.html">Toast</a>
                        <a className="nk-dropdown-nav-link" href="el_tooltips.html">Tooltips</a>
                        <a className="nk-dropdown-nav-link" href="el_typography.html">Typography</a>
                      </div>
                    </div>
                  </li>
                  <li className="nk-item-accordion-li p-2">
                    <a href="#">
                      <div className="nk-flex-items">
                        <div>Today Deals</div>
                        <div><i className="fas fa-chevron-down"></i></div>
                      </div>
                    </a>
                  </li>
                  <li className="nk-item-accordion-li p-2">
                    <a href="#">
                      <div className="nk-flex-items">
                        <div>Gift Cards</div>
                        <div><i className="fas fa-chevron-down"></i></div>
                      </div>
                    </a>
                  </li>
                  <li className="nk-item-accordion-li p-2">
                    <a href="#">
                      <div className="nk-flex-items">
                        <div>Buy It Again</div>
                        <div><i className="fas fa-chevron-down"></i></div>
                      </div>
                    </a>
                  </li>
                  <li className="nk-item-accordion-li p-2">
                    <a href="#">
                      <div className="nk-flex-items">
                        <div>Special for you</div>
                        <div><i className="fas fa-chevron-down"></i></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-mob-border"></li>
              <li className="px-4">
                <span className="nk-mob-title">Featured</span>
              </li>
              <li className="space-y-3 px-4 py-2">
                <div className="nk-item-accordion-li p-2">
                  <a href="#">
                    <div className="nk-flex-items">
                      <div>New Arrival</div>
                      <div><i className="fas fa-chevron-down"></i></div>
                    </div>
                  </a>
                </div>
                <div className="nk-item-accordion-li p-2">
                  <a href="#">
                    <div className="nk-flex-items">
                      <div>Top Brands</div>
                      <div><i className="fas fa-chevron-down"></i></div>
                    </div>
                  </a>
                </div>
                <div className="nk-item-accordion-li p-2">
                  <a href="#">
                    <div className="nk-flex-items">
                      <div>Top Sellers</div>
                      <div><i className="fas fa-chevron-down"></i></div>
                    </div>
                  </a>
                </div>
                <div className="nk-item-accordion-li p-2">
                  <a href="#">
                    <div className="nk-flex-items">
                      <div>Back To School</div>
                      <div><i className="fas fa-chevron-down"></i></div>
                    </div>
                  </a>
                </div>
                <div className="nk-item-accordion-li p-2">
                  <a href="#">
                    <div className="nk-flex-items">
                      <div>International Shopping</div>
                      <div><i className="fas fa-chevron-down"></i></div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nk-mob-border"></li>
              <li className="space-y-1 px-4 py-2">
                <div className="py-2">
                  <div className="nk-mob">
                    <div><a className="nk-mob-link" href="signin.html">Sign In</a></div>
                    <div>Or</div>
                    <div><a className="nk-mob-link" href="signup.html">Create Account</a></div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="nk-mob">
                    <div><a className="nk-mob-link" href="#">Call Us</a></div>
                    <div>Or</div>
                    <div><a className="nk-mob-link" href="#">Chat Now</a></div>
                  </div>
                </div>
                <div className="py-2">
                  <a className="nk-cat-hover-underline" href="#!">
                    <div className="nk-mob">
                      <div>Help & Support</div>
                    </div>
                  </a>
                </div>
                <div className="px-4 pt-8 pb-16" data-close-sidebar="#slide-mobile-menu">
                  <div className="nk-mob-close"><i className="fas fa-times"></i> Close</div>
                </div>
              </li>
            </ul>
          </div>



          <div>
            <div id="stickyHeader" className="nk-sticky-header fixed inset-x-0 top-0 z-[1999]">
              <div className="nk-sticky-header-logo">
                <div className="h-7 font-extrabold">
                  <Link className="nk-sticky-logo h-full" to={'/'}>
                    <img className="objact-contain w-100 h-full" src="assets/img/logo/logo.png" alt="" />
                  </Link>
                </div>
                <span>ຮ້ານຄຳ ນາງວຽງຄຳ</span>
              </div>
              <div className="nk-sticky-search rounded-pill ">
                <div className="nk-sticky-input ">
                  <input type="text" className="nk-input-container pr-10 rounded-pill" placeholder="ຄົ້ນຫາ..." autoComplete="off" />
                  <div className="nk-magnify-icon">
                    <button type="button" className="bg-danger  rounded-full py-2 px-3 text-center text-xs font-medium text-white focus:ring-4" >
                      ຄົ້ນຫາ
                    </button>
                  </div>
                </div>
              </div>
              <div className="nk-sticky-main-bk">
                <div className="nk-sticky-search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="overlay" className="nk-bg-overlay hidden"></div>
      </nav>
    </header>
  )
}
