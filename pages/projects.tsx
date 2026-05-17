import { Url } from "next/dist/shared/lib/router/router";
import ProjectCard from "./components/ProjectCard";
import styles from './projects.module.css';
import Link from "next/link";

export interface Project {
    name: string;
    description: string;
    href: Url;
}

const Projects = () => {
    const projects: Project[] = [
        {
            name: "GSSI Pulse",
            description: "Builds a Global Supply Chain Stress Index (GSSI) from macro and market data, runs a few forecast models (ARIMA, XGBoost, Prophet), and shows everything in a dashboard.",
            href: "https://github.com/cool-chemix/gssi-pulse"
        },
        {
            name: "FirstConnect (AWS Hackathon Winner)",
            description: "Use agentic AI and AWS services to detect issues, simulate outages, and automatically open tickets, reducing manual effort and speeding up resolution.",
            href: "https://github.com/rithikagantla/FirstConnect"
        },

        {
            name: "Dream",
            description: "A distributed streaming platform based on P2P message transfer built atop a Kademlia DHT to ensure low-latency, high-throughput data transmission.",
            href: 'https://github.com/kamui-fin/dream'
        },

        {
            name: 'LogSense',
            description: 'A highly scalable, distributed system-focused log anomaly detection architecture that harnesses the power of LLMs for real-time inferencing',
            href: 'https://github.com/kamui-fin/log-sense'
        },

    ];

    return (
        <div className={styles.projectsContainer}>
            {projects.map((project: Project) => (
                <Link href={project.href} target='_blank'><ProjectCard name={project.name} description={project.description} href={project.href} /></Link>
            ))}
        </div>

    )
}

export default Projects;