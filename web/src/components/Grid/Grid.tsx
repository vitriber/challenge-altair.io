
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { api } from '../../services/api';

export const Grid = () => {
    const [grid, setGrid] = useState<string[][]>();
    const [code, setCode] = useState<string>();

    const getGrid = async (character?: string) => {
        try {
            api.get('grid', {
                params: {
                    character
                }, 
            }).then(response => {
                const grid = response.data.data;
                const code = response.data.code;
                setGrid(grid);
                setCode(code);
        })} catch (e) {
            console.log(e);
        }

    }

    const handleChangeCharacter = (value: string) => {
        if(value) {
            getGrid(value);
        }
    }

    useEffect(() => {
        const intervalCall = setInterval(() => {
            getGrid();
        }, 2000);
        return () => {
          clearInterval(intervalCall);
        };
      }, []);

    return (
        <>
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
            
            <div className={styles.grid}>
            <table>
                <tbody>
                    {grid?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <div className={styles.containerCode}>
                <div className={styles.contentCode}>
                    <div className={styles.live}>
                        <span className={styles.dot}></span>
                        <p>Live</p>
                    </div>
                    <div className={styles.code}>
                        <p>Your Code: {code}</p>
                    </div>
                </div>
            </div>

        </>
    )
}