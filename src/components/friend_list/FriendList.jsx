import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

export default function FriendList({friends}) {
    return(
        <ul className="friend-list">
            {friends.map(friend => <FriendListItem friend={friend} key={friend.id}/>)}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};