import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem Vindo ao <span> Project Management</span></h1>
            <p>
                Gerencie seus projetos agora mesmo!
            </p>
            <LinkButton to="/newproject" text="Criar novo projeto" />
            <img src={savings} alt='Management'/>
        </section>
    )
}

export default Home