import React from 'react';
import { Title } from '../../Items';
import styles from './Start.module.scss';

const Start = () => {

  const boxes = [
    {
      id: 1,
      text: "Լրացրե՛ք անվճար փորձնական դասի հայտը:"
    },
    {
      id: 2,
      text: "Ծանոթացե՛ք Ձեր անհատական օգնականի հետ և ստացե՛ք մանրամասն խորհրդատվություն:"
    },
    {
      id: 3,
      text: "Մասնակցե՛ք Փորձնական դասին և ուսուցչի հետ սահմանե՛ք կրթական նպատակներն ու դասերի ժամանակացույցը:"
    },
    {
      id: 4,
      text: "Վճարե՛ք և սովորե՛ք հաճույքով:"
    }
  ]

  return (
    <section className={styles.start} id="start">
      <div className="container">
        <Title name="Ինչպե՞ս սկսել" />
        <div className={styles.start__content}>
            {
              boxes.map(box => (
                <div className={`${styles.start__contentBox} ${styles.start__contentBox}`} key={box.id}>
                  <div className={styles.start__contentBox__index}>{box.id}</div>
                  <p className={styles.start__contentBox__text}>{box.text}</p>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Start
