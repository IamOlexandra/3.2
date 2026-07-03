import PropTypes from "prop-types";

import css from "../../css/friend_list.module.css";

import FriendListItem from "./FriendListItem";

export default function FriendList({friends}) {
    return(
        <ul className={css.friendList}>
            {friends.map(friend => <FriendListItem friend={friend} key={friend.id}/>)}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};