import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import { Button } from '../../Items';
import styles from './Header.module.scss';
import Logo from './../../Assets/Images/Logo/Logo.png';

const Header = () => {

  const [menuState, setMenuState] = useState(false);

  const nav = [
    {
      id: 1,
      url: "#reviews",
      name: "Կարծիքներ",
      button: false
    },
    {
      id: 2,
      url: "#why",
      name: "Ինչու՞ հենց KOS",
      button: false
    },
    {
      id: 3,
      url: "#investment",
      name: "Գնացուցակ",
      button: false
    },
    {
      id: 4,
      url: "#bid",
      name: "ԳՐԱՆՑՎԵԼ",
      button: true
    }
  ]

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__logo}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={`${styles.header__menu} ${menuState ? styles.active : ''}`} onClick={() => setMenuState(!menuState)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${styles.header__nav} ${menuState ? styles.active : ''}`}>
          {
            nav.map(navItem => (
              <li className={`${styles.header__navItem} ${navItem.button ? styles.button : ''}`} key={navItem.id}>
                <Link smooth to={`${navItem.url}`}>
                  {
                    navItem.button
                    ?
                    <Button name={navItem.name} color="#00BF90" className="" />
                    :
                    navItem.name
                  }
                </Link>
              </li>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header;
