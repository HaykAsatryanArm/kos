import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title } from '../../Items';
import styles from './Reviews.module.scss'
import { Pagination } from 'swiper';
import './Reviews.css';
import 'swiper/css';
import 'swiper/css/pagination';

import Child from './../../Assets/Images/Reviews/Child.png'
import Mother from './../../Assets/Images/Reviews/Mother.png'
import Star from './../../Assets/Images/Reviews/Star.png'

const Reviews = () => {

    const info = [
        {
            id: 1,
            mother: {
                motherImage: Mother,
                motherName: "Արուս"
            },
            child: {
                childImage: Child,
                childName: "Վահագն",
                childAge: 13
            },
            text: "Տղաս հաճույքով շարունակում է պարապել: Շատ հաճելի է, շատ գոհ ենք և՛ Ձեզնից, և՛ մեր ուսուցչուհուց մեծ ուշադրության և ուսուցման համար: Հայաստան գալու դեպքում անպայման կհանդիպենք:",
            rate: [Star, Star, Star, Star, Star]
        },
        {
            id: 2,
            mother: {
                motherImage: Mother,
                motherName: "Մալվինա"
            },
            child: {
                childImage: Child,
                childName: "Միքայել",
                childAge: 13
            },
            text: "Դասերը շատ լավ են անցնում: Մենք շատ գոհ ենք:",
            rate: [Star, Star, Star, Star, Star]
        },
        {
            id: 3,
            mother: {
                motherImage: Mother,
                motherName: "Հեղինե"
            },
            child: {
                childImage: Child,
                childName: "Սոֆի",
                childAge: 13
            },
            text: "Շատ շնորհակալ եմ: Դասերը շատ լավ են ընթանում. բավականին առաջընթաց ունենք: Ուսուցչուհուց շատ գոհ ենք:",
            rate: [Star, Star, Star, Star, Star]
        },
        {
            id: 4,
            mother: {
                motherImage: Mother,
                motherName: "Արուս"
            },
            child: {
                childImage: Child,
                childName: "Վահագն",
                childAge: 13
            },
            text: "Տղաս հաճույքով շարունակում է պարապել: Շատ հաճելի է, շատ գոհ ենք և՛ Ձեզնից, և՛ մեր ուսուցչուհուց մեծ ուշադրության և ուսուցման համար: Հայաստան գալու դեպքում անպայման կհանդիպենք:",
            rate: [Star, Star, Star, Star, Star]
        },
        {
            id: 5,
            mother: {
                motherImage: Mother,
                motherName: "Մալվինա"
            },
            child: {
                childImage: Child,
                childName: "Միքայել",
                childAge: 13
            },
            text: "Դասերը շատ լավ են անցնում: Մենք շատ գոհ ենք:",
            rate: [Star, Star, Star, Star, Star]
        }
    ]

    return (
        <section className={styles.reviews} id="reviews">
            <div className="container">
                <Title name="Կարծիքներ" />
                <Swiper
                    spaceBetween={50}
                    breakpoints={{
                        1440: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        }
                    }}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop
                >
                    {
                        info.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <div className={styles.reviews__slide}>
                                    <div className={styles.reviews__slidePerson}>
                                        <div className={styles.reviews__slidePerson__mother}>
                                            <div className={styles.reviews__slidePerson__motherImage}>
                                                <img src={slide.mother.motherImage} alt="" />
                                            </div>
                                            <div className={styles.reviews__slidePerson__motherName}>
                                                {slide.mother.motherName}
                                            </div>
                                            <div className={styles.reviews__slidePerson__motherInfo}>
                                                մայրիկ
                                            </div>
                                        </div>
                                        <div className={styles.reviews__slidePerson__child}>
                                            <div className={styles.reviews__slidePerson__child}>
                                                <div className={styles.reviews__slidePerson__childImage}>
                                                    <img src={slide.child.childImage} alt="" />
                                                </div>
                                                <div className={styles.reviews__slidePerson__childName}>
                                                    {slide.child.childName}
                                                </div>
                                                <div className={styles.reviews__slidePerson__childInfo}>
                                                    {slide.child.childAge}տ
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.reviews__slideText}>
                                        {slide.text}
                                    </div>
                                    <div className={styles.reviews__slideRate}>
                                        {
                                            slide.rate.map((icon, idx) => (
                                                <img src={icon} key={idx} alt="" />
                                            ))
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews
