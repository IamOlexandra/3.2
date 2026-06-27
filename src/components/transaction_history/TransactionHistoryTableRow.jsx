import PropTypes from "prop-types";

export default function TransactionHistoryTableRow({itemData}) {
    return(
        <tr>
            <td>{itemData.type}</td>
            <td>{itemData.amount}</td>
            <td>{itemData.currency}</td>
        </tr>
    );
}

TransactionHistoryTableRow.propTypes = {
    itemData: PropTypes.object.isRequired,
};