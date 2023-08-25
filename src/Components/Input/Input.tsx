import styles from './Input.module.scss';

const Input = () =>{
    return(
        <input 
        type="text" 
        required 
        className={styles.inputNewTask} 
        placeholder='Adicione uma nova tarefa'
        />
    )
}

export default Input;