import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/navigation-item";

export default function Navigation({ navigate, pages }) {
  console.log("navigation.js pages", pages);
  const items = pages.map(({ title, path }) => (
    <NavigationItem key={path} path={path}>
      {title}
    </NavigationItem>
  ));
  return <div>{items}</div>;
}

Navigation.prototype = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  navigate: PropTypes.func.isRequired
};
