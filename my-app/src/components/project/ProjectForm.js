import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name='name' id='name' placeholder="Insira o nome do projet" />
            <Input type="number" text="Orçamento do projeto" name='budget' id='name' placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecionar a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm