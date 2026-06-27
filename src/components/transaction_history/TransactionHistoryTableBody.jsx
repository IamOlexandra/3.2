import PropTypes from "prop-types";

import TransactionHistoryTableRow from "./TransactionHistoryTableRow";

export default function TransactionHistoryTableBody({items}) {
    return(
        <tbody>
            {items.map(itemData => <TransactionHistoryTableRow itemData={itemData} key={itemData.id}/>)}
        </tbody>
    );
}

TransactionHistoryTableBody.propTypes = {
    items: PropTypes.array.isRequired,
};