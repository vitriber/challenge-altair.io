import styles from './styles.module.css'

interface PaymentInputProps {
    setPaymentName: (value?: string) => void;
    setAmount: (value?: number) => void;
    handleAddPayment: () => void;
}

export const PaymentInput = ({setAmount, setPaymentName, handleAddPayment}: PaymentInputProps) => {
    return (
        <div className={styles.paymentInput}>
                <div className={styles.paymentName}>
                    <p>Payment</p>
                    <input 
                        placeholder='Payment' 
                        onChange={(e)=> {setPaymentName(e.target.value)}}
                    />
                </div>

                <div className={styles.amount}>
                    <p>Amount</p>
                    <input 
                        placeholder='Amount' 
                        onChange={(e)=> {setAmount(Number(e.target.value))}}
                    />
                </div>
                
                <button onClick={() => handleAddPayment()} className={styles.addPayment}>+ ADD</button>
            </div>
    )
}