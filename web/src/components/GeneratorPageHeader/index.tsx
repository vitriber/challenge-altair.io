import styles from './styles.module.css'

interface GeneratorPageHeaderProps {
    handleChangeCharacter: (value: string) => void;
    handleGenerateGrid: (value?: string) => void;
    isChangeCharacter: boolean;
}

export const GeneratorPageHeader = ({handleChangeCharacter, handleGenerateGrid, isChangeCharacter}: GeneratorPageHeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.character}>
                <p>Character</p>
                <input 
                    type="character" 
                    placeholder='Character' 
                    onChange={(e)=> { handleChangeCharacter(e.target.value)}}
                    disabled={isChangeCharacter}
                />
            </div>

            <div className={styles.watch}><img src="/clock.png" alt="Clock" /></div>
            
            <button onClick={() => handleGenerateGrid()} className={styles.generateButton}>Generate 2D Grid</button>
        </div>
    )
}