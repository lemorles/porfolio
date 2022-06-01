import Link from "next/link";

export default function MenuList({ className, onClick }) {
  return <ul className={className}>
    <li onClick={onClick}>
      <Link href="#about" >
        <a>About</a>
      </Link>
    </li>
    <li onClick={onClick}>
      <Link href="#skills" >
        <a>Skills</a>
      </Link>
    </li>
    <li onClick={onClick}>
      <Link href="#projects">
        <a>Projects</a>
      </Link>
    </li>
    <li onClick={onClick}>
      <Link href="#contact">
        <a>Contact</a>
      </Link>
    </li>

    <style jsx>{`
  ul a:hover {
    color: var(--yellow);
  }

  ul li {
    height: 64px;
    display: flex;
    align-items: center;
  }

  .menu__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background: var(--black);
    z-index: 999;
  }

  .menu__mobile a {
    color: var(--white);
    font-size: 20px;
    text-transform: uppercase;
  }

  .menu__desktop {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .menu__mobile {
      width: 0;
    }

    .menu__desktop {
      display: flex;
      gap: 16px;
      text-transform: uppercase;
    }

    .menu__desktop a {
      color: var(--black);
    }
  }
  `}</style>
  </ul>
}