
import styles from './styles.module.css'

interface GridProps {
    grid?: string[][];
}

export const Grid = ({grid}: GridProps) => {
    return (  
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
    )
}