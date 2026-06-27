import PropTypes from "prop-types";

export default function StatisticsItem({itemData}) {
    return(
        <li className="item">
            <span className="label">{itemData.label}</span>
            <span className="percentage">{itemData.percentage}%</span>
        </li>
    );
}

StatisticsItem.propTypes = {
    itemData: PropTypes.object.isRequired,
};