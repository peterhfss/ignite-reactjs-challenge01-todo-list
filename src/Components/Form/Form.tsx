import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './Form.module.scss';

const Form = ( ) => {
    return (
        <div className={styles.container}>
            <Input />
            <Button />
        </div>
    )
}

export default Form;