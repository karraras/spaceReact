import React from "react";
import Logo from "../assets/logo.svg";
import hamb from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
const Navbar = () => {
  const [cloze, setCloze] = React.useState(true);
  return (
    <nav className="flex justify-between items-center">
      <div className="py-5">
        <img src={Logo} alt="" />
      </div>
      <ul
        className={
          cloze
            ? "flex z-10   bg-slate-800 -mr-5   -top-5  "
            : "flex justify-evenly   bg-slate-800 -mr-5 hidden   "
        }
      >
        <li
          className={
            cloze
              ? "mx-2 text-white text-sm  half py-3.5"
              : "mx-2 text-white text-sm   py-3.5"
          }
        >
          00 HOME{" "}
        </li>
        <li
          className={
            cloze
              ? "mx-2 text-white text-sm  half py-3.5"
              : "mx-2 text-white text-sm   py-3.5"
          }
        >
          01 DESTINATION{" "}
        </li>
        <li
          className={
            cloze
              ? "mx-2 text-white text-sm  half py-3.5"
              : "mx-2 text-white text-sm   py-3.5"
          }
        >
          02 CREW{" "}
        </li>
        <li
          className={
            cloze
              ? "mx-2 text-white text-sm  half py-3.5"
              : "mx-2 text-white text-sm   py-3.5"
          }
        >
          03 TECHNOLOGY{" "}
        </li>
      </ul>
      {cloze ? (
        <button className="z-20" onClick={() => setCloze(false)}>
          <img src={close} alt="" />
        </button>
      ) : (
        <button className="z-20" onClick={() => setCloze(true)}>
          <img src={hamb} alt="" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
