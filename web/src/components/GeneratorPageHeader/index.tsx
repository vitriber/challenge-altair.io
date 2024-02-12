import styles from './styles.module.css'

interface GeneratorPageHeaderProps {
    handleChangeCharacter: (value: string) => void;
    getGrid: () => void;
}

export const GeneratorPageHeader = ({handleChangeCharacter, getGrid}: GeneratorPageHeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.character}>
                <p>Character</p>
                <input 
                    type="character" 
                    placeholder='Character' 
                    onChange={(e)=> {handleChangeCharacter(e.target.value)}}
                />
            </div>

            <div className={styles.watch}><img src="/clock.png" alt="Clock" /></div>
            
            <button onClick={() => getGrid()} className={styles.generateButton}>Generate 2D Grid</button>
        </div>
    )
}