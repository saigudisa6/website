import styles from './BioPage.module.css';

const BioPage = () => {
    return(
        <div className={`${styles.textColor}`}>
                <h1 className={styles.russoOneRegular}>SAI GUDISA</h1>
                <ul className={styles.list}>
                    <li>ML/AR Undergraduate Researcher at HeXD Lab UTD</li>
                    <li>Interested in Distributed Systems, Machine Learning, and Data Science</li>
                    <li>Love Basketball and Movies</li>
                </ul>
                <p className={styles.description}>
                    Hello there! My name is Venkatasai Gudisa (Sai) for short. 
                    I'm a student at the University of Texas at Dallas studying Computer Science.
                    I began coding when I was a junior in high school with Java as my first language. 
                    Although I wasn't too taken by it at first, it would soon turn into my entire life. 
                    From weekend coding contests to weekly tutoring to routine leetcoding, I was fully emersed in the world of Java.
                    <br/>
                    <br/>
                    During my Senior year of high school, I branched out to Python and discovered the incredible world of Data Science and Machine Learning.
                    I began watching some of Andrew Ng's lectures on youtube and analyzing datasets on Kaggle, 
                    but I soon faced the reality that I didn't know enough to understand this material well. 
                    I had long ways to go in terms of Math before I could grasp this information, leaving me no choice but to put this on hold.
                    <br/>
                    <br/>
                    Towards the end of Senior year, I branched out to web development with The Odin Project. 
                    It was fun at first but I soon realized that Web Development was not my cup of tea.
                    I'd loved building cool little websites and learning about the principles of design, 
                    but I wasn't too interested in diving into the world of web dev.
                    <br/>
                    <br/>
                    Towards the end of last year, I met another student at UTD who had to abandon his interest in ML due to mathematical limitations and we
                    decided that there was no reason to be imprisoned by such self-imposed bounds. All of the material necessary is available for free online,
                    so why not learn it ourselves?

                    So we created a roadmap through ML and tracked our progress through <a href='https://clovlog.com'>CLOVLOG</a>.
                    We started with Linear Algebra from Dr.Strang, then two of Andrew Ng's specializations, then dove deeper into NLP through
                    Stanford's NLP course on youtube. Using the insights i gained throughout this journey, I was able to join HeXD Lab, 
                    an HCI Lab at UTD. My team's focus revolves around AR Storytelling, check out my blog for updates!

                </p>
        </div>
    )
}

export default BioPage;