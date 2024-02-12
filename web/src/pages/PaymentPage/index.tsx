import { useEffect, useState } from "react";
import { Code } from "../../components/Code";

import styles from './styles.module.css'
import { api } from "../../services/api";


export interface Payment {
    name?: string;
    amount?: number;
    code?: string;
    grid?: string[][];
}

export const PaymentPage = () => {
    const [code, setCode] = useState<string>();
    const [grid, setGrid] = useState<string[][]>();

    const [paymentName, setPaymentName] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [payments, setPayments] = useState<Payment[]>([]);

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

    const handleAddPayment = () => {
        setPayments([
            ...payments,
            {
                name: paymentName,
                amount,
                code,
                grid
            }
        ]);
    }

    useEffect(() => {
        const intervalCall = setInterval(() => {
            getGrid();
        }, 2000);
        return () => {
          clearInterval(intervalCall);
        };
      }, [])

    return (
        <>
            <Code code={code} />
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
        </>
    )
}