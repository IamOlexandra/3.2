import PropTypes from "prop-types";

import css from "../../css/transaction_history.module.css";

import TransactionHistoryTableBody from "./TransactionHistoryTableBody";

export default function TransactionHistory({items}) {
    return(
        <table className={css.transactionHistory}>
            <thead className={css.head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <TransactionHistoryTableBody items={items}/>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};