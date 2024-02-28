import styles from './Select.module.css';

function Select({ text, name, options, hanldeOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
            name={name} 
            id={name} 
            onChange={hanldeOnChange} 
            value={value || ''}>
                <option value="">Selecione uma opção</option>
                {options.map((options) => {
                    <option value={options.id} key={options.id}>
                        {options.name}
                    </option>
                })}
            </select>
        </div>
    );
}

export default Select;