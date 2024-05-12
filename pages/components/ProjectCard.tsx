import { Project } from "../projects";
import styles from './ProjectCard.module.css'

const ProjectCard = ({name, description}: Project) => {
    return(
        <div className={styles.card}>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;