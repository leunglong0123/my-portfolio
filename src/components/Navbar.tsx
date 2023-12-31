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
    <nav className="z-50 flex h-auto flex-row overflow-hidden fixed bg-tertiary shadow-lg w-screen bg-white">
      <div className="my-auto md:hidden items-start">
        <button className="text-text-primary" onClick={toggleMenu}>
          <MenuIcon></MenuIcon>
        </button>
      </div>
      <div className="hidden md:flex md:justify-center w-full py-1">
        {pages.map((page, index) => (
          <div key={`${page.name}-${index}`} className="w-auto p-4">
            <a href={page.path}>
              <h3 className="text-black font-bold">{page.name}</h3>
            </a>
          </div>
        ))}
        <a download="Bryan_Leung_resumes.pdf" href="/resume.pdf">
          <div
            key={`resume`}
            className="w-auto p-4 h-auto hover:bg-black border-black border rounded-md text-black hover:text-white "
          >
            <h3 className="font-bold">Resume</h3>
          </div>
        </a>
      </div>
      <aside
        id="default-sidebar"
        className={`fixed z-40 h-screen w-screen -translate-x-full transition-transform sm:translate-x-0 bg-white ${
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
