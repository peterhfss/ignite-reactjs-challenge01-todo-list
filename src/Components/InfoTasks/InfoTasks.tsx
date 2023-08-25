import styles from './InfoTasks.module.scss';

const InfoTasks = () =>{
    return(
        <div className={styles.infoTasksContainer}>
            <div className={styles.tasksCreated}>
                <h3 className={styles.tasksCreatedText}>Tarefas criadas</h3>
                <span className={styles.tasksCounter}>0</span>
            </div>
            <div className={styles.tasksDone}>
                <h3 className={styles.tasksDoneText}>Concluídas</h3>
                <span className={styles.tasksCounter}>0</span>
            </div>
        </div>
    )
}

export default InfoTasks;