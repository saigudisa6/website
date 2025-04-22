import { Project } from "../projects";
import classes from './ProjectCard.module.css'

const ProjectCard = ({name, description, href}: Project) => {
    return(
        <div className={classes.card}>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;