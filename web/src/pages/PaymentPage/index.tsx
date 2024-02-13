import { useEffect, useState } from "react";
import { Code } from "../../components/Code";
import { api } from "../../services/api";
import { PaymentInput } from "../../components/PaymentInput";
import { PaymentList } from "../../components/PaymentList";

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
    const getPayments = async () => {
        try {
            api.get('payments', {
            }).then(response => {
                const payments = response.data;
                setPayments(payments);
        })} catch (e) {
            console.log(e);
        }
    }

    const addPayment = async () => {
        try {
            api.post('payments', {
                name: paymentName,
                amount,
                code,
                grid 
            }).then(response => {
                const payments = response.data;
                setPayments(payments);
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
        addPayment()
    }

    useEffect(() => {
        getPayments();
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
            <PaymentInput handleAddPayment={handleAddPayment} setAmount={setAmount} setPaymentName={setPaymentName} />
            <PaymentList payments={payments} />
        </>
    )
}