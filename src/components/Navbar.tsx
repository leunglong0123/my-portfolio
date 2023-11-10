import React, { useState } from 'react';
import MenuIcon from '../Icon/MenuIcon';
import CrossIcon from '../Icon/CrossIcon';

interface Page {
  name: string;
  path: string;
}

interface NavBarProps {
  logo: string;
  pages: Page[];
  isCollapse?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ logo, pages, isCollapse = true }) => {
  const [isMenuCollapse, setIsMenuCollapse] = useState(isCollapse);

  const toggleMenu = () => {
    setIsMenuCollapse((prev) => !prev);
  };
  return (
    <nav className="z-50 flex h-auto justify-center overflow-hidden fixed bg-slate-800 w-screen">
      <div className="mx-8 my-auto md:hidden">
        <button className="text-text-primary" onClick={toggleMenu}>
          <MenuIcon></MenuIcon>
        </button>
      </div>
      <div className="hidden md:flex md:justify-center">
        {pages.map((page, index) => (
          <div
            key={`${page.name}-${index}`}
            className="hover:bg-slate-600 w-auto p-4"
          >
            <a href={page.path}>
              <h3 className="text-slate-300">{page.name}</h3>
            </a>
          </div>
        ))}
      </div>
      <div className="m-8 md:hidden"></div>
      <div className="m-6 my-auto hidden md:flex"></div>
      <aside
        id="default-sidebar"
        className={`fixed z-40 h-screen w-screen -translate-x-full transition-transform sm:translate-x-0 ${
          isMenuCollapse ? 'hidden' : 'block'
        }`}
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col overflow-y-auto ">
          <button
            className="m-8 ml-auto text-text-primary"
            onClick={() => setIsMenuCollapse(true)}
          >
            <CrossIcon className=""></CrossIcon>
          </button>

          <ul className="mx-auto flex-row space-y-16">
            {pages.map((page, index) => (
              <li key={`${page.name}-${index}`} className="text-center">
                <a href={page.path}>
                  <h3>{page.name}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
};

export default NavBar;
