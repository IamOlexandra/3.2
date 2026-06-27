import PropTypes from "prop-types";

export default function FriendListItem({friend}) {
    return(
        <li className="item">
            <span className="status">{friend.isOnline ? "Online" : "Not Online"}</span>
            <img className="avatar" src={friend.avatar} alt={friend.name + "'s avatar"} width="48" />
            <p className="name">{friend.name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.object.isRequired,
};