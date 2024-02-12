import styles from './styles.module.css'

interface CodeProps {
    code?: string;
}

export const Code = ({code}: CodeProps) => {
    return (
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
    )
}