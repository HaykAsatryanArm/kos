import React from 'react';
import styles from './Bid.module.scss'
import { Title } from '../../Items';
import Astronaut from './../../Assets/Images/Bid/Astronaut.png'

const Bid = () => {
    return (
        <section className={styles.bid} id="bid">
            <div className="container">
                <div className={styles.bid__content}>
                    <div className={styles.bid__contentImage}>
                        <img src={Astronaut} alt="" />
                    </div>
                    <form action="#" method="post" className={styles.bid__contentForm}>
                        <h3 className={styles.bid__contentForm__title}>ԹՈՂՆԵԼ ՀԱՅՏ</h3>
                        <label className={styles.bid__contentForm__filed}>
                            Ձեր անունը
                            <input type="text" name="name" className={styles.bid__contentForm__filedInput} placeholder="Լրացրեք Ձեր անունը" />
                        </label>
                        <label className={styles.bid__contentForm__filed}>
                            Երեխայի անուն
                            <input type="text" name="childName" className={styles.bid__contentForm__filedInput} placeholder="Լրացրեք երեխայի անունը" />
                        </label>
                        <label className={styles.bid__contentForm__filed}>
                            Երեխայի տարիք
                            <input type="number" name="childAge" className={styles.bid__contentForm__filedInput} placeholder="Լրացրեք երեխայի տարիքը" />
                        </label>
                        <label className={styles.bid__contentForm__filed}>
                            Հեռախոսահամար
                            <input type="tel" name="phone" className={styles.bid__contentForm__filedInput} placeholder="Հեռախոսահամար" />
                        </label>
                        <label className={styles.bid__contentForm__filed}>
                            Էլ․ փոստի հասցե
                            <input type="email" name="email" className={styles.bid__contentForm__filedInput} placeholder="example@gmail.com" />
                        </label>
                        <input type="submit" value="Գրանցվել" className={styles.bid__contentForm__submit} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Bid
