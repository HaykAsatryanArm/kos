import React from 'react';
import CountUp from 'react-countup';
import { Title, Button } from '../../Items';
import styles from './Conducted.module.scss';

const Conducted = () => {
    return (
        <section className={styles.conducted} id="conducted">
            <div className="container">
                <Title name="Իրականացված դասերի քանակ" />
                <div className={styles.conducted__content}>
                    <CountUp end={75984} duration={5} redraw={true}  />
                    <Button className={styles.conducted__contentButton} name="ՓՈՐՁԵԼ ԱՆՎՃԱՐ" color="#00BF90" />
                </div>
            </div>
        </section>
    )
}

export default Conducted