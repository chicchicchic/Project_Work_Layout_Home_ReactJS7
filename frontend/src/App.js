import {BrowserRouter, Link, Route} from 'react-router-dom'
import "./App.css";
import data from "./data";
import FoodScreen from "./pages/FoodSceen";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";


function App() {
  // Open and Close Navbar
  const toggleNavbar = () => {
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar");

    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  // Open and Close Search Form
  const openSearch = () => {
    let searchBtn = document.querySelector("#search-form");

    searchBtn.classList.toggle("active");
  };

  const closeSearch = () => {
    let searchForm = document.querySelector("#search-form");

    searchForm.classList.remove("active");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* <!-- header section starts --> */}
        <header>
          <Link to="/" className="logo">
            <i className="fas fa-utensils"></i> Cuisine
          </Link>

          <nav className="navbar">
            <Link to="/" className="active">
              home
            </Link>
            <a href="#dishes">dishes</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
          </nav>

          <div className="icons">
            <i
              className="fas fa-bars"
              id="menu-bars"
              onClick={toggleNavbar}
            ></i>
            <i
              className="fas fa-search"
              id="search-icon"
              onClick={openSearch}
            ></i>
            <Link to="/cart/" className="fas fa-shopping-cart"></Link>
            <a href="#" className="fas fa-user"></a>
          </div>
        </header>
        {/* <!-- header section ends--> */}

        {/* <!-- search form starts --> */}
        <form action="" id="search-form">
          <input
            type="search"
            placeholder="Search here..."
            name=""
            id="search-box"
          />
          <label htmlFor="search-box" className="fas fa-search"></label>
          <i className="fas fa-times" id="close" onClick={closeSearch}></i>
        </form>
        {/* <!-- search form starts --> */}

        {/* <!-- dishes section starts  --> */}
        <section className="dishes" id="dishes">
          

          
            <Route path="/food/:id" component={FoodScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

            {/* <Route path="/food/:id" element={<FoodScreen/>}></Route>
            <Route path="/cart/:id&quantity=:quantity" element={<CartScreen/>}></Route>
            <Route path="/" exact={true} element={<HomeScreen/>}></Route> */}
            

        </section>
        {/* <!-- dishes section ends --> */}

        {/* <!-- Footer Start --> */}
        <div className="footer">
          <div className="footer-container">
            <div className="underline-footer"></div>

            <div className="social-list">
              <ul className="social-list-wrap">
                <li className="social-list-item">
                  <a className="social-item-link" href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>

                <li className="social-list-item">
                  <a className="social-item-link" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="social-list-item">
                  <a className="social-item-link" href="">
                    <i className="fab fa-google"></i>
                  </a>
                </li>

                <li className="social-list-item">
                  <a className="social-item-link" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="underline-footer"></div>

            <div className="description-website">
              <h4 className="description-content">
                This webpage was created for the course "Design and Developer a
                Killer Website Using HTML5 and CSS3" by Bui Chi Khanh. No
                copyrights here. This webpage is for you! So go and do whatever
                you want with it and have fun.
              </h4>
            </div>

            <div className="created-address-website">
              <h4 className="created-address-content">
                Build with
                <span className="heart-icon">
                  <i className="fas fa-heart"></i>
                </span>{" "}
                in the beautiful city of Ho Chi Minh City, Viet Nam, December
                2022.
              </h4>
            </div>
          </div>
        </div>
        {/* <!-- Footer End --> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
