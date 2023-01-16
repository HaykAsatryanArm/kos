import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Logo from './../../Assets/Images/Logo/Logo.png';

import Instagram from './../../Assets/Images/Footer/Instagram.png';
import Facebook from './../../Assets/Images/Footer/Facebook.png';
import Email from './../../Assets/Images/Footer/Email.png';
import Phone from './../../Assets/Images/Footer/Phone.png';

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__contentText}>
                        <div className={styles.footer__contentText__logo}>
                            <img src={Logo} alt="" />
                        </div>
                        <div className={styles.footer__contentText__info}>
                            Քարհանյան օնլայն դպրոցը արդեն 12 տարի է, ինչ «արտահանում է» ժպիտներ, երեխաների համար սովորելու գործընթացը դարձնում հաճելի, իսկ մայրիկներին նվիրում ազատ ժամանակ:
                        </div>
                    </div>
                    <div className={styles.footer__contentContact}>
                        <div className={styles.footer__contentContact__title}>Կապ</div>
                        <div className={styles.footer__contentContact__icons}>
                            <div className={styles.footer__contentContact__iconsBox}>
                                <img src={Instagram} alt="" />
                            </div>
                            <div className={styles.footer__contentContact__iconsBox}>
                                <img src={Facebook} alt="" />
                            </div>
                            <div className={styles.footer__contentContact__iconsBox}>
                                <img src={Email} alt="" />
                            </div>
                            <div className={styles.footer__contentContact__iconsBox}>
                                <img src={Phone} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__copyright}>
                    © 2022 Քարհանյան օնլայն դպրոց
                </div>
            </div>
        </footer>
    )
}

export default Footer
