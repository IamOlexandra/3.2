import PropTypes from "prop-types";

import StatisticsItem from "./StatisticsItem";

export default function StatisticsList({stats}) {
    return(
        <ul className="stat-list">
            {stats.map(itemData => <StatisticsItem itemData={itemData} key={itemData.id}/>)}
        </ul>
    );
}

StatisticsList.propTypes = {
    stats: PropTypes.array.isRequired,
};