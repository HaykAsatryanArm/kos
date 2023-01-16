import React from 'react';
import styles from './Home.module.scss';
import { Button } from './../../Items';
  
const Home = () => {
  return (
    <section className={styles.home} id="#">
      <div className="container">
        <div className={styles.home__text}>
          <h1 className={styles.home__textTitle}>
            Անգլերենի <span>առցանց դասընթաց</span>՝ 3-15 տարեկան երեխաների համար:
          </h1>
          <p className={styles.home__textSubtitle}>
            Բարի գալուստ Քարհանյան օնլայն դպրոց:
            <br />
            Սովորե՛ք մեզ հետ աշխարհի ցանկացած կետից Ձեզ հարմար ժամին:
          </p>
          <Button name="ԳՐԱՆՑՎԵԼ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻՆ" color="#00BF90" className={styles.home__textButton} />
        </div>
      </div>
    </section>
  )
}

export default Home;
