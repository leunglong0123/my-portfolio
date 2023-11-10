import { HTMLAttributes } from 'react';
import NavBar from './Navbar';

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export interface navBarItem {
  title: string;
  href: string;
}

export default function Layout(props: NavbarProps) {
  const navBarPage = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'contact', path: '#contact' },
  ];

  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <NavBar logo={''} pages={navBarPage}></NavBar>
      </div>
      {props.children}
    </>
  );
}
