import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md py-3 relative left-0 right-0 box-border transition ease-in-out delay-150">
      <div className="container mx-auto w-full xl:max-w-[1260px] lg:max-w-[1024px] px-8">
        <div className="box-border flex m-0  items-center justify-between">
          <img src={logo} alt="Logo" width="w-full h-auto" />
          <a href="/"></a>
          <nav className="box-border m-0 lg:flex items-center grow hidden ">
            <ul className="flex list-none grow">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
               
                    className={({
                      isActive,
                      isPending,
                    }) => (isPending ? "text-slate-700 lg:my-0 lg:mx-5 cursor-pointer font-normal font-sans text-lg" : isActive ? "text-rose-500 lg:my-0 lg:mx-5 cursor-pointer font-normal font-sans text-lg" : "text-slate-700 lg:my-0 lg:mx-5 cursor-pointer font-normal font-sans text-lg")}
                    state
                    to={link.href}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-row justify-center items-center gap-5">
            <button className=" lg:inline-block hidden transition ease-in-out delay-150 text-lg font-sans font-bold tracking-wide py-3 px-8  text-rose-500 border-2 border-solid cursor-pointer bg-transparent  hover:bg-rose-500 hover:text-white rounded-full border-rose-500">
              Login{" "}
            </button>
            <button className="transition ease-in-out delay-150 lg:text-lg text:md font-sans font-normal lg:font-bold bg-rose-500 lg:tracking-wide py-1 px-4 lg:py-3 lg:px-8 inline-block text-white border-2 border-solid cursor-pointer hover:bg-transparent hover:text-rose-500 rounded-full border-rose-500">
              Get Started{" "}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
