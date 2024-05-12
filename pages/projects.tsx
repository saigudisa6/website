import ProjectCard from "./components/ProjectCard";
import styles from './projects.module.css';
import Link from "next/link";

export interface Project{
    name: string;
    description: string;
}

const Projects = () => {
    const projects: Project[] = [
        { 
            name:'LogSense', 
            description: 'A highly scalable, distributed system-focused log anomaly detection architecture that harnesses the power of LLMs for real-time inferencing'
        },
    ];

    return(
        <div className={styles.projectsContainer}>
            {projects.map((project: Project) => (
                <Link href='https://github.com/kamui-fin/log-sense' target='_blank'><ProjectCard name={project.name} description={project.description}/></Link>
            ))}
        </div>
        
    )
}

export default Projects;