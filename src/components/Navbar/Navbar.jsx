import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMusicNote } from "react-icons/hi";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <h1 className="text-white text-3xl font-semibold">Khrys Hatch</h1>
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className=" text-white font-bold p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-white font-bold p__opensans">
          <Link to="/about">About</Link>
        </li>

        <li className=" text-white font-bold p__opensans">
          <Link to="#contact">Contact</Link>
        </li>
      </ul>

      {/* smallscreen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <HiMusicNote
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className=" text-white font-bold p__opensans">
                <Link to="#home">Home</Link>
              </li>
              <li className="text-white font-bold p__opensans">
                <Link to="/about">About</Link>
              </li>

              <li className="text-white font-bold p__opensans">
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>

    // <nav className="app__navbar">
    //   <div className="app__navbar-logo">
    //     <h1 className="text-white text-3xl">Khrys Hatch</h1>
    //   </div>
    //   <ul className="app__navbar-links">
    //     <li className="text-white p__opensans font-bold">
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li className="text-white p__opensans font-bold">
    //       <Link to="#about">About</Link>
    //     </li>
    //     <li className="text-white p__opensans font-bold">
    //       <Link to="/#contact">Contact</Link>
    //     </li>
    //   </ul>

    //   {/* smallscreen */}
    //   <div className="app__navbar-smallscreen">
    //     <GiHamburgerMenu
    //       color="#fff"
    //       fontSize={27}
    //       onClick={() => setToggleMenu(true)}
    //     />

    //     {toggleMenu && (
    //       <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
    //         <HiMusicNote
    //           fontSize={27}
    //           className="overlay__close"
    //           onClick={() => setToggleMenu(false)}
    //         />
    //         <ul className="app__navbar-smallscreen_links">
    //           <li className="p__opensans">
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li className="p__opensans">
    //             <Link to="#about">About</Link>
    //           </li>
    //           <li className="p__opensans">
    //             <Link to="#contact">Contact</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </nav>
  );
};

export default Navbar;
