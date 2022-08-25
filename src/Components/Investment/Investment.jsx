import React from 'react';
import styles from './Investment.module.scss';
import { Title, Button } from '../../Items';

const Investment = () => {

    const investments = [
        {
            id: 1,
            color: "#BB6BD9",
            name: "TRIAL",
            lesson: "Անվճար փորձնական դաս",
            discount: false,
            price: {
                lesson: "0 €",
                lessonName: "",
                package: "",
                packageName: ""
            },
            info: [
                "Տևողությունը` 20-30 րոպե",
                "Ավելի լավ է մեկ անգամ փորձել, քան հազար անգամ լսել։"
            ],
            button: "ՄԱՍՆԱԿՑԵԼ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻՆ"
        },
        {
            id: 2,
            color: "#00BF90",
            name: "POPULAR",
            lesson: "8 դաս",
            discount: false,
            price: {
                lesson: "6.25 €",
                lessonName: "1 դաս",
                package: "50 €",
                packageName: "փաթեթի արժեք"
            },
            info: [
                "Տևողությունը` 50 րոպե",
                "Ճկուն գրաֆիկ",
                "Շաբաթական դասերի հաճախականությունը՝ ըստ ձեր հայեցողության։",
                "Անձնական օգնական, ով կաջակցի ձեզ ցանկացած հարցում։"
            ],
            button: "ՄԱՍՆԱԿՑԵԼ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻՆ"
        },
        {
            id: 3,
            color: "#4472CA",
            name: "EFFECTIVE",
            lesson: "12 դաս",
            discount: "15% ԶԵՂՉ",
            price: {
                lesson: "5.41 €",
                lessonName: "1 դաս",
                package: "65 €",
                packageName: "փաթեթի արժեք"
            },
            info: [
                "Տևողությունը` մոտ 50 րոպե",
                "Ճկուն գրաֆիկ",
                "Շաբաթական դասերի հաճախականությունը՝ ըստ ձեր հայեցողության",
                "Գումարի խնայողություն",
                "Անձնական օգնական, ով կաջակցի ձեզ ցանկացած հարցում։"
            ],
            button: "ՄԱՍՆԱԿՑԵԼ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻՆ"
        }
    ]

    return (
        <section className={styles.investment} id="investment">
            <div className="container">
                <Title name="Ձեր լավագույն ներդրումը" />
                <div className={styles.investment__content}>
                    {
                        investments.map(investment => (
                            <div className={styles.investment__contentInvestment} key={investment.id}>
                                <div>
                                    <div className={styles.investment__contentInvestment__name} style={{ background: investment.color }}>
                                        {investment.name}
                                    </div>
                                    <div className={styles.investment__contentInvestment__lesson}>
                                        {investment.lesson}
                                    </div>
                                    <div className={styles.investment__contentInvestment__price}>
                                        {
                                            <>
                                                <div className={styles.investment__contentInvestment__priceLesson}>
                                                    <div className={styles.investment__contentInvestment__priceLesson__price} style={{ color: investment.color }}>
                                                        {
                                                            investment.price.lesson
                                                        }
                                                    </div>
                                                    <div className={styles.investment__contentInvestment__priceLesson__name}>
                                                        {
                                                            investment.price.lessonName
                                                        }
                                                    </div>
                                                </div>
                                                <div className={styles.investment__contentInvestment__pricePackage}>
                                                    <div className={styles.investment__contentInvestment__pricePackage__price} style={{ color: investment.color }}>
                                                        {
                                                            investment.price.package
                                                        }
                                                    </div>
                                                    <div className={styles.investment__contentInvestment__pricePackage__name}>
                                                        {
                                                            investment.price.packageName
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <ul className={styles.investment__contentInvestment__list}>
                                        {
                                            investment.info.map(item => (
                                                <li style={{ listStyle: "disc" }} className={styles.investment__contentInvestment__listItem} key={Math.random()}>
                                                    <div className={styles.investment__contentInvestment__listItem__circle}></div> {item}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <Button name={investment.button} color={investment.color} className={styles.investment__contentInvestment__button} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Investment
