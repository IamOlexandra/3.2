import PropTypes from "prop-types";

import css from "../../css/profile.module.css";

export default function ProfileStats({stats}) {
    return(
        <ul className={css.stats}>
            <li className={css.stat}>
                <span className={css.statName}>Followers</span>
                <span className={css.statQuantity}>{stats.followers}</span>
            </li>
            <li className={css.stat}>
                <span className={css.statName}>Views</span>
                <span className={css.statQuantity}>{stats.views}</span>
            </li>
            <li className={css.stat}>
                <span className={css.statName}>Likes</span>
                <span className={css.statQuantity}>{stats.likes}</span>
            </li>
        </ul>
    );
}

ProfileStats.propTypes = {
    stats: PropTypes.object.isRequired,
};