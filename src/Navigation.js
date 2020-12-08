import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/memegenerator">Meme Generator</NavLink> <br />
      <NavLink to="/editmeme">Edit Meme</NavLink> <br />
      <NavLink to="/memelist">List of Created Memes</NavLink> <br />
      <NavLink to="/testpage">Test Page</NavLink>
    </div>
  );
};

export default Navigation;
