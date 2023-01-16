import React from 'react';
import { Title } from '../../Items';
import styles from './Why.module.scss';
import PC from './../../Assets/Images/Why/PC.png'
import Clock from './../../Assets/Images/Why/Clock.png'
import Graphic from './../../Assets/Images/Why/Graphic.png'
import Success from './../../Assets/Images/Why/Success.png'
import FireClock from './../../Assets/Images/Why/FireClock.png'
import Documents from './../../Assets/Images/Why/Documents.png'
import Puzzle from './../../Assets/Images/Why/Puzzle.png'

const Why = () => {

  const FirstRowReason = [
    {
      id: 1,
      image: Clock,
      name: "Խնայի՛ր ժամանակ և գումար",
      text: "Ժամանակի և գումարի արդյունավետ տնօրինում:"
    },
    {
      id: 2,
      image: FireClock,
      name: "Ճկուն  գրաֆիկ",
      text: "Դասերի ինտենսիվությունը, օրերը և ժամերը որոշում եք Դուք՝ ըստ Ձեր և ուսուցչի զբաղվածության:"
    }
  ]

  const SecondRowReason = [
    {
      id: 3,
      image: Graphic,
      name: "Սահմանված բարձր նշաձող",
      text: "Ուսուցիչները պարբերաբար մասնակցում են վերապատրաստումների, ինչն էլ հնարավորություն է տալիս ուսուցման գործընթացը դարձնել առավել վառ և հետաքրքիր:"
    },
    {
      id: 4,
      image: Documents,
      name: "Հատուկ մշակված ծրագիր",
      text: "Ծրագիրը կազմվել է Oxford_ի և Cambridge_ի գրականության հիման վրա՝ ինչը անգլերենի ուսուցման ոսկե ստանդարտն է ողջ աշխարհում:"
    }
  ]

  const ThirdRowReason = [
    {
      id: 5,
      image: Success,
      name: "Երաշխավորված արդյունք",
      text: "Ուսուցիչ-աշակերտ արդյունավետ համագործակցության և անհատական մոտեցման շնորհիվ երեխան կունենա տեսանելի առաջընթաց:"
    },
    {
      id: 6,
      image: Puzzle,
      name: "Ինտերակտիվ և խաղային դասեր",
      text: "Ինտերակտիվ և խաղային դասերի շնորհիվ զարգանում է երեխայի մտածողությունը և ճանաչողական ակտիվությունը"
    }
  ]

  return (
    <section className={styles.why} id="why">
      <div className="container">
        <Title name="ԻՆՉՈՒ՞ ՀԵՆՑ <span>KOS</span>" />
        <div className={styles.why__content}>
          <div className={styles.why__contentText}>
            <div className={styles.why__contentText__first}>
              {
                FirstRowReason.map(item => (
                  <div className={styles.why__contentText__firstItem} key={item.id}>
                    <div className={styles.why__contentText__firstItem__title}>
                      <img className={styles.why__contentText__firstItem__titleImage} src={item.image} alt="" />
                      <h3 className={styles.why__contentText__firstItem__titleName}>{item.name}</h3>
                    </div>
                    <p className={styles.why__contentText__firstItem__text}>{item.text}</p>
                  </div>
                ))
              }
            </div>
            <div className={styles.why__contentText__second}>
              {
                SecondRowReason.map(item => (
                  <div className={styles.why__contentText__secondItem} key={item.id}>
                    <div className={styles.why__contentText__secondItem__title}>
                      <img className={styles.why__contentText__secondItem__titleImage} src={item.image} alt="" />
                      <h3 className={styles.why__contentText__secondItem__titleName}>{item.name}</h3>
                    </div>
                    <p className={styles.why__contentText__secondItem__text}>{item.text}</p>
                  </div>
                ))
              }
            </div>
            <div className={styles.why__contentText__third}>
              {
                ThirdRowReason.map(item => (
                  <div className={styles.why__contentText__thirdItem} key={item.id}>
                    <div className={styles.why__contentText__thirdItem__title}>
                      <img className={styles.why__contentText_thirdtItem__titleImage} src={item.image} alt="" />
                      <h3 className={styles.why__contentText__thirdItem__titleName}>{item.name}</h3>
                    </div>
                    <p className={styles.why__contentText__thirdItem__text}>{item.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.why__contentImage}>
            <img src={PC} alt="PC" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why;
