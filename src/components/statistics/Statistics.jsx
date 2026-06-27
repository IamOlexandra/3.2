import PropTypes from "prop-types";

import StatisticsList from "./StatisticsList";

export default function Statistics({title, stats}) {
    if(title) {
        return(
            <section className="statistics">
                <h2 className="title">{title}</h2>
                <StatisticsList stats={stats}/>
            </section>
        );
    } else {
        return(
            <section className="statistics">
                <StatisticsList stats={stats}/>
            </section>
        );        
    }
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};