import { useUser } from '@clerk/clerk-react';
import FinancialRecordForm from './financial-record-form';
import FinancialRecordList from './financial-record-list';
import "./financial-record.css";
import { useFinancialRecords } from '../../contexts/financial-record-context';
import { useMemo } from 'react';

export const Dashboard = () => {
    const { user } = useUser();
    const { records } = useFinancialRecords();
    const totalMonthly = useMemo(() => {
        return records.reduce((acc, cur) => {
            acc = acc + cur.amount;
            return acc;
        }, 0);
    }, [records]);

    return (
        <div className="dashboard-container">
            <h1>Welcome {user?.firstName}! Here are your Finances:</h1>

            <FinancialRecordForm />
            <div>Total Monthly: ${totalMonthly}</div>
            <FinancialRecordList />
        </div>
    );
}