import css from './Transactions.module.css';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
    return (
        <div className={css.container}>

                <table className={css.transactionHistory}>
                <thead>
                  <tr className={css.head}>
                    <th className={css.headText}>Type</th>
                    <th className={css.headText}>Amount</th>
                    <th className={css.headText}>Currency</th>
                  </tr>
                </thead>
              
                {items.map(item=> {
                return (
                    <TransactionItem 
                    key={item.id}
                    item={item}
                    />
            );
          })}
                  
              </table>
        </div>
    )
    };

        