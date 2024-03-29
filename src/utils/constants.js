import React from "react";
import { FaCocktail, FaFeatherAlt, FaRedhat } from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaCocktail />,
    title: "about us",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <FaFeatherAlt />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <FaRedhat />,
    title: "goals",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

// export const products_url = "https://course-api.com/react-store-products";
export const products_url = "https://dummyjson.com/products";

export const search_url = "https://dummyjson.com/products/search?q=";
export const categories_url = "https://dummyjson.com/products/categories";
export const get_category_url = "https://dummyjson.com/products/category/";

export const single_product_url = `https://dummyjson.com/products/`;
// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
