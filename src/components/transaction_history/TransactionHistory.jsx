import PropTypes from "prop-types";

import TransactionHistoryTableBody from "./TransactionHistoryTableBody";

export default function TransactionHistory({items}) {
    return(
        <table className="transaction-history">
            <thead>
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