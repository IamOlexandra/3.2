import PropTypes from "prop-types";

export default function ProfileDescription({data}) {
    return(
        <div className="description">
                <img
                src={data.avatar}
                alt={data.username}
                className="avatar"
                />
                <p className="name">{data.username}</p>
                <p className="tag">@{data.tag}</p>
                <p className="location">{data.location}</p>
        </div>
    );
}

ProfileDescription.propTypes = {
    data: PropTypes.object.isRequired,
};