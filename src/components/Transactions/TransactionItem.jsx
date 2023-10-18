import css from './Transactions.module.css';
export const TransactionItem = ({ item }) => {
    return (
        <tbody>

                
                    <tr className={css.row}>
                        <td className={css.rowText}>{item.type}</td>
                        <td className={css.rowText}>{item.amount}</td>
                        <td className={css.rowText}>{item.currency}</td>
                    </tr>
                
            
        
        </tbody>
    )
    };