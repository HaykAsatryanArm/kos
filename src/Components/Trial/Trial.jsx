import React from 'react';
import { Button, Title } from '../../Items';
import styles from './Trial.module.scss';

import Asronaut from './../../Assets/Images/Trial/Astronaut.png';
import Skills from './../../Assets/Images/Trial/Skills.png'
import Folders from './../../Assets/Images/Trial/Folders.png'
import Target from './../../Assets/Images/Trial/Target.png'
import Shuttle from './../../Assets/Images/Trial/Shuttle.png'
import Documents from './../../Assets/Images/Trial/Documents.png'

const Trial = () => {

  const boxes = [
    {
      id: 1,
      icon: Skills,
      text: "Ուսուցիչը կգնահատի Ձեր երեխայի իմացական մակարդակը:"
    },
    {
      id: 2,
      icon: Folders,
      text: "Պատկերացում կկազմեք հետագա դասերի մասին:"
    },
    {
      id: 3,
      icon: Target,
      text: "Միասին կսահմանեք երեխայի ուսումնական նպատակները:"
    },
    {
      id: 4,
      icon: Shuttle,
      text: "Կկողմնորոշվեք որոշման հարցում:"
    },
    {
      id: 5,
      icon: Documents,
      text: "Կկազմվի անհատական ուսուցման պլան:"
    }
  ]

  return (
    <section className={styles.trial} id="trial">
      <div className="container">
        <Title name="Ինչու՞ մասնակցել փորձնական դասին" />
        <div className={styles.trial__content}>
            <div className={styles.trial__contentImage}>
              <img src={Asronaut} alt="Astronaut" />
              <Button className={styles.trial__contentImage__button} name="ՈՒԶՈՒՄ ԵՄ ՄԱՍՆԱԿՑԵԼ" color="#4472CA" />
            </div>
            <div className={styles.trial__contentText}>
              {
                boxes.map(box => (
                  <div className={`${styles.trial__contentText__box}`} key={box.id}>
                    <img src={box.icon} alt="box" />
                    <p className={styles.trial__contentText__boxText}>{box.text}</p>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Trial