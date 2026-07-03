import PropTypes from "prop-types";

import css from "../../css/statistics.module.css";

export default function StatisticsItem({itemData}) {
    return(
        <li className={css.item}>
            <span className={css.label}>{itemData.label}</span>
            <span className={css.percentage}>{itemData.percentage}%</span>
        </li>
    );
}

StatisticsItem.propTypes = {
    itemData: PropTypes.object.isRequired,
};