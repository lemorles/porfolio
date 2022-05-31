import Link from "next/link";

export default function MenuList({ className }) {
  return <ul className={className}>
    {
      className === 'menu__mobile' && <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    }
    <li>
      <Link href="/">
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a>Projects</a>
      </Link>
    </li>
    <li>
      <Link href="/">
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
      display: none;
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