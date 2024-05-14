import React from "react";
import styles from './CenterCard.module.css'
import Link from "next/link";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const CenterCard = () => {

    return(
        <div className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
                <div className={`${styles.leftside}`}>
                    <div>
                        <div className={`${styles.name} ${styles.russoOneRegular}`}>VENKATA<span className={styles.shortname}>SAI</span> GUDISA</div>
                        <div className={`${styles.tag} ${styles.russoOneRegular}`}>Building software that makes life better.</div>
                    </div>
                    <div className={`${styles.links}`}>
                        <Link className={`${styles.navlink} ${styles.promptRegular}`} href='/projects'>projects</Link>
                        <Link className={`${styles.navlink} ${styles.promptRegular}`} href='/blog'>blog</Link>
                        <Link className={`${styles.navlink} ${styles.promptRegular}`} target='_blank' href='https://clovlog.com'>clov</Link>
                        <Link className={`${styles.navlink} ${styles.promptRegular}`} href='/bio'>BIO</Link>
                    </div>
                    <div className={`${styles.icons}`}>
                        <a  href="https://www.linkedin.com/in/venkatasai-gudisa/" target="_blank"><FaLinkedin /></a>
                        <a href='https://github.com/saigudisa6'><FaGithubSquare /></a>
                        <a href='https://www.instagram.com/sai_the_g/'><FaSquareInstagram /></a>
                    </div>
                </div>
                <div className={`${styles.rightside}`}></div>
            </div>
        </div>
    )
}

export default CenterCard;