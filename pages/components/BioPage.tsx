import styles from './BioPage.module.css';

const BioPage = () => {
    return(
        <div className={`${styles.textColor}`}>
                <h1 className={styles.russoOneRegular}>SAI GUDISA</h1>
                <ul className={styles.list}>
                    <li>Summer '25 SWE Intern @ LinkedIn</li>
                    <li>Interested in Distributed Systems, Machine Learning, and Data Science</li>
                    <li>Love Basketball and Movies</li>
                </ul>
                <p className={styles.description}>
                    Hello there! My name is Venkatasai Gudisa (Sai) for short. 
                    I'm a student at the University of Texas at Dallas studying Computer Science.
                    I began coding when I was a junior in high school with Java as my first language. 

                    <br/>
                    <br/>
                    <b className={styles.subhead}>
                        Pre-University
                    </b>
                    <br/>
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
                    <b className={styles.subhead}>
                        Year 1/4
                    </b>
                    <br/>
                    My first semester at UTD was spent exploring any and every organization related to techonology. I helped build 
                    tools to help students with registration and explored my interest in UX Design. Although neither endeavors lasted
                    long, I loved my experience and met a lot of amazing people through them. During my second semester, I focused more on
                    Machine Learning. Specifically, my friend and I spent a lot of time learning the fundamental math that composed it and 
                    tried our best to understand it from the perspective of numbers and equations. 

                    As the semester progressed, we decided to build a project relating to Machine Learning: <a style={{color: "white", textDecoration: "underline"}} href='https://www.github.com/kamui-fin/logsense'>LogSense</a>.
                    Throughout the course of building this product, I learned a lot more about distriuted systems and their applicability in the real
                    world. I was simply taken by the complexity surrounding these systems and how important they were to almost every day-to-day system. 
                    So, going into the summer, I started reading books like DDIA and Alex Xu to learn more about Distributed Systems and how they're designed/used.
                    <br/>
                    <br/>

                    <b className={styles.subhead}>
                        Year 2/4
                    </b>
                    <br/>

                    Throughout my second year, my main focuses were: strengthening my understanding of distributed systems and increasing
                    my experience with machine learning algorithms and concepts. The former I acheived through more reading and working on 
                    projects such as <a style={{color: "white", textDecoration: "underline"}} href='https://www.github.com/kamui-fin/dream'>Dream</a> while the
                    latter was done through being a Research Assistant for an AR research lab at my university. 

                    Although I didn't branch into any new concepts like I did in year 1, I loved building on my understanding and practicing what I was learning.
                    On that theme, as the year came to an end, I started focusing more on preparing for my internship, which will involve a lot of Rust and Go programming. 
                    I'm incredibly grateful that I get to prusue my passion of distributed systems programming at my internship and am very excited for the summer.
                </p>
        </div>
    )
}

export default BioPage;