import { Payment } from '../../pages/PaymentPage';
import styles from './styles.module.css'

interface PaymentListProps {
    payments: Payment[];
}

export const PaymentList = ({payments}: PaymentListProps) => {
    return (
        <div className={styles.paymentList}>
            <p className={styles.paymentTitle}>Payment List</p>
            <table>
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>AMOUNT</th>
                        <th>CODE</th>
                        <th>GRID</th>
                    </tr>
                    {payments?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.name}</td>
                            <td>{row.amount}</td>
                            <td>{row.code}</td>
                            <td>{row.grid?.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}