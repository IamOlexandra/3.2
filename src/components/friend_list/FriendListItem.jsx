import PropTypes from "prop-types";

import css from "../../css/friend_list.module.css";

export default function FriendListItem({friend}) {
    return(
        <li className={css.item}>
            <span className={friend.isOnline ? css.online : css.notOnline}></span>
            <div className={css.avatarWrap}>
                <img className={css.avatar} src={friend.avatar} alt={friend.name + "'s avatar"} width="48"/>
            </div>
            <p className={css.name}>{friend.name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.object.isRequired,
};