import { useState } from 'react';
import MenuButton from '../MenuButton';
import MenuList from '../MenuList';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return <header>
    <nav>
      <p>
        Leandro Morales
      </p>

      <MenuList className='menu__desktop' />
      {show && <MenuList className='menu__mobile' />}

      <MenuButton onClick={handleClick} />
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

      p {
        text-transform: uppercase;
        font-weight: 600;
      }
    `}</style>
  </header>
}