import React, { useState } from 'react';
import MenuIcon from '../Icon/MenuIcon';
import LogoutIcon from '../Icon/LogOutIcon';
import LoginIcon from '../Icon/LoginIcon';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuCollapse, setIsMenuCollapse] = useState(isCollapse);

  const toggleMenu = () => {
    setIsMenuCollapse((prev) => !prev);
  };
  return (
    <nav className="relative z-50 flex h-auto justify-between bg-bg-dark">
      <div className="mx-8 my-auto md:hidden">
        <button className="text-text-primary" onClick={toggleMenu}>
          <MenuIcon></MenuIcon>
        </button>
      </div>
      <a href="/" className="mx-8 my-auto shrink-0 md:mx-16">
        <img src={logo} alt="Logo" className="h-16" />
      </a>
      <div className="hidden space-x-10 justify-self-center md:flex">
        {pages.map((page, index) => (
          <div
            key={`${page.name}-${index}`}
            className="inline-flex flex-col items-center justify-start gap-8 pb-9"
          >
            <a href={page.path}>
              <h3>{page.name}</h3>
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
        <div className="flex h-full flex-col overflow-y-auto bg-gray-50 dark:bg-gray-800">
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
