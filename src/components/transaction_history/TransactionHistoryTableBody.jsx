import PropTypes from "prop-types";

import css from "../../css/transaction_history.module.css";

import TransactionHistoryTableRow from "./TransactionHistoryTableRow";

export default function TransactionHistoryTableBody({items}) {
    return(
        <tbody className={css.body}>
            {items.map(itemData => <TransactionHistoryTableRow itemData={itemData} key={itemData.id}/>)}
        </tbody>
    );
}

TransactionHistoryTableBody.propTypes = {
    items: PropTypes.array.isRequired,
};