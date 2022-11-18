import { Box,  Heading,  } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const selector = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        position: "sticky",
        justifyContent: "space-between",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
    >
      <Link to="/about">
        <Heading size="md">About</Heading>
      </Link>

      <Link to="/">
        <Heading size="md">Welcome to E-commerce</Heading>
      </Link>

      {/* cart  */}
      <Link to="/checkout">
        <Box style={{ cursor: "pointer" }}>
          <svg
            width="1.7rem"
            className="layout-header-links__cart-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"
            ></path>
            <text x="8" y="19" fontSize="xs" fontWeight={100} fill="black">
              {selector.cart.length}
            </text>
          </svg>
        </Box>
      </Link>
    </div>
  );
};

export default Navbar;
