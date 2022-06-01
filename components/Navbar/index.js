import { useContext } from 'react';
import { useState } from 'react';
import MenuList from '../MenuList';
import { ThemeContext } from '../../contexts/useTheme';
import { HamburgerIcon, MoonIcon, SunIcon } from '../IconSVG';
import Link from 'next/link';

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setShow(!show)
  };

  const handleDark = () => {
    setDark(!dark);
    toggleTheme(dark ? "light" : "dark");
  };

  return <header>
    <nav>
      <Link href="/" >
        <code>
          <a className='link'>{`<Leandro Morales />`}</a>
        </code>
      </Link>

      {show && <MenuList className='menu__mobile' onClick={handleClick} />}
      <div className='wrapper__buttons'>
      <MenuList className='menu__desktop' onClick={handleClick} />
        {
          dark ? <SunIcon onClick={handleDark} />
            : <MoonIcon onClick={handleDark} />
        }
        <HamburgerIcon onClick={handleClick} />
      </div>
    </nav>
    
    <style jsx>{`
    header {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 16px;
    }

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
      }

      code {
        font-weight: 600;
        font-size: 16px;
      }

      .wrapper__buttons {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .btn {
        cursor: pointer;
        fill: red;
      }

      .link {
        text-decoration: none;
        color: var(--black);
        cursor: pointer;
      }

      .link:hover {
        color: var(--yellow);
      }
    `}</style>
  </header>
}