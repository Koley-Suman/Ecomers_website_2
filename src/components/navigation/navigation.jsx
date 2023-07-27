import React, { Fragment } from "react";
import "./navigation.scss";
import { Link, Outlet } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utilitis/firebase/firebase";
const Navigation = () => {
  const currentUser = useSelector((state)=>state.user.currentUser)
  return (
    <Fragment>
      <div className="navber">
        <div className="logo">
          <ul>
            <Link to="/">Home</Link>
          </ul>
        </div>
        <div className="links">
          <ul>
            <Link to="/shop">SHOP</Link>
            {currentUser?(<Link onClick={signOutUser}>SIGN OUT</Link>):<Link to="/auth">SIGN IN</Link>}
            <Link>
              <IconButton>
                <Badge color="secondary" badgeContent={0}>
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
