import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from "../layouts/Message"
import Container from '../layouts/Container'
import LinkButton from '../layouts/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {
    const [projects,setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Novo Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClaass="start">
                <p>Projetos..</p>
            </Container>
        </div>
    )
}

export default Projects