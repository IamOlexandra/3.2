import PropTypes from "prop-types";

import css from "../../css/profile.module.css";

export default function ProfileDescription({data}) {
    return(
        <div className={css.description}>
                <div className={css.avatarWrap}>
                    <img
                    src={data.avatar}
                    alt={data.username}
                    className={css.avatar}
                    />
                </div>
                <p className={css.name}>{data.username}</p>
                <p className={css.tag}>@{data.tag}</p>
                <p className={css.location}>{data.location}</p>
        </div>
    );
}

ProfileDescription.propTypes = {
    data: PropTypes.object.isRequired,
};