import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserIcon from "@mui/icons-material/Person";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Select from "../selectDrop/Select";
import axios from "axios";
import SelectCountry from "../selectDrop/SelectCountry";
import Button from "@mui/material/Button";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Nav from "./nav/Nav";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import "../../responsive.css";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Header = (props) => {
  const { isLogin, logOut } = useContext(AuthContext);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenSearch = () => {
    console.log("Search button clicked");
    setOpenSearch(true);
  };

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const [categories] = useState([
    "All Categories",
    "Clothing",
    "Groceries",
    "Pet Foods and Toys",
    "Fast Food",
    "Cosmetics",
    "Vegetables",
    "Fruits",
    "Milk and Dairy Products",
    "Cold Drinks",
    "Utensils",
    "Electronics",
  ]);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {}, [isLogin]);

  const handleOpenAccount = () => {
    setIsOpenAccount(!isOpenAccount);
  };

  const handleClickAway = () => {
    setIsOpenAccount(false);
    setOpenSearch(false);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const response = await axios.get(
        "https://api.first.org/data/v1/countries"
      );
      if (response != null) {
        const countries = Object.values(response.data.data).map(
          (item) => item.country
        );
        setCountryList(countries);
      }
    } catch (error) {
      console.log("Cannot fetch Country", error);
    }
  };

  const signOut = () => {
    logOut();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <header>
        {/* ------------------------------Header Top-------------------------- */}
        <div className="headerTop">
          <div className="gridItem">
            <div className="gridItemList">
              <span>About</span>
            </div>
            <div className="gridItemList">
              <span>Contact</span>
            </div>
          </div>
          <div className="gridItem">
            <span>Free Shipping</span>
          </div>
          <div className="gridItem">
            <span>Need Help? 18009001800</span>
          </div>
        </div>

        {/* ------------------------------Header Middle-------------------------- */}
        <div className="headerMiddle">
          <div className="headerLogo">
            <div className="logo" onClick={() => console.log("Logo Clicked")}>
              <h1>
                <Link to="/">VeloxMart</Link>
              </h1>
            </div>

            <div className="navBarToggle">
              <div className="menuToggle"></div>
              <div
                className="menuToggle1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("Search button clicked");
                  handleOpenSearch();
                }}
              >
                <SearchIcon className="searchIcon" />
              </div>
              <div className="menuToggle">
                <MenuIcon onClick={handleMenuClick} />
                {/* {isLogin && (
                  <Link className="link" to="/cart">
                    <ShoppingCartIcon className="cartIcon" />
                  </Link>
                )} */}
                {!isLogin && (
                  <Link to="/login">
                    {" "}
                    <AssignmentIndIcon />
                  </Link>
                )}
                {isLogin && <AccountCircleIcon onClick={handleOpenAccount} />}
                {isOpenAccount && isLogin && (
                  <div className="openAccount">
                    <ul className="dropDownAccountMobile">
                      <li>
                        <Button>
                          <UserIcon className="buttonIcon" /> My Account
                        </Button>
                      </li>
                      <li>
                        <Link to="/cart">
                          <Button>
                            <ShoppingCartIcon className="buttonIcon" /> My Cart
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Button>
                          <ShareLocationIcon className="buttonIcon" /> Track
                          Order
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <SettingsIcon className="buttonIcon" /> Settings
                        </Button>
                      </li>
                      <li>
                        <Button className="signOut" onClick={signOut}>
                          <ExitToAppIcon className="buttonIcon" /> Sign Out
                        </Button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`headerSearch ${openSearch ? "open" : ""}`}>
            <div
              className="closeIcon"
              onClick={() => {
                setOpenSearch(false);
              }}
            >
              <CloseIcon />
            </div>
            <div className="location openLocation">
              <SelectCountry data={countryList} />
            </div>
            <div className="categoryList">
              <Select data={categories} defaultValue="All Categories" />
            </div>
            <div className="search">
              <div className="searchInput">
                <input
                  type="text"
                  className="input"
                  placeholder="Search your Item..."
                />
              </div>
              <div className="searchIcon">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="headerItems">
            <div className="location">
              <SelectCountry data={countryList} />
            </div>
            <div className="items">
              <Link className="link" to="/cart">
                <ShoppingCartIcon className="headerIcon" />
                <span>Cart</span>
                <p className="count"></p>
              </Link>
            </div>
            {isLogin ? (
              <div className="items" onClick={handleOpenAccount}>
                <UserIcon className="headerIcon" />
                <span>Account</span>
              </div>
            ) : (
              <div className="items">
                <UserIcon className="headerIcon" />
                <Link to="/login">
                  <Button className="signInBtn">Sign In</Button>
                </Link>
              </div>
            )}
            {isOpenAccount && (
              <ul className="dropDownAccount">
                <li>
                  <Button>
                    <UserIcon className="buttonIcon" /> My Account
                  </Button>
                </li>
                <li>
                  <Link to="/cart">
                    <Button>
                      <ShareLocationIcon className="buttonIcon" /> My Cart
                    </Button>
                  </Link>
                </li>

                <li>
                  <Button>
                    <ShareLocationIcon className="buttonIcon" /> Track Order
                  </Button>
                </li>
                <li>
                  <Button>
                    <SettingsIcon className="buttonIcon" /> Settings
                  </Button>
                </li>
                <li>
                  <Button className="signOut" onClick={signOut}>
                    <ExitToAppIcon className="buttonIcon" /> Sign Out
                  </Button>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* ------------------------------Header Bottom-------------------------- */}
        <div className="headerBottom">
          <Nav
            data={props.data}
            closeMenu={closeMenu}
            openMenu={openMenu}
            handleMenuClick={handleMenuClick}
          />
        </div>
      </header>
    </ClickAwayListener>
  );
};

export default Header;
