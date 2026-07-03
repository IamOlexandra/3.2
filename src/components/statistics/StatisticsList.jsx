import PropTypes from "prop-types";

import css from "../../css/statistics.module.css";

import StatisticsItem from "./StatisticsItem";

export default function StatisticsList({stats}) {
    return(
        <ul className={css.list}>
            {stats.map(itemData => <StatisticsItem itemData={itemData} key={itemData.id}/>)}
        </ul>
    );
}

StatisticsList.propTypes = {
    stats: PropTypes.array.isRequired,
};