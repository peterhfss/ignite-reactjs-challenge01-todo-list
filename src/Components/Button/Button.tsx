import iconAdd from "../../assets/plus.svg";

import styles from './Button.module.scss';

const Button = () =>{
    return(
        <button className={styles.btnAdicionarNewTask}>
            Criar <img src={iconAdd} alt="Icon Add new task" className={styles.iconAdd} />
        </button>
    )
}

export default Button;