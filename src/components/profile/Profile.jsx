import PropTypes from "prop-types";

import ProfileDescription from "./ProfileDescription";
import ProfileStats from "./ProfileStats";

export default function Profile({data}) {
    return(
        <div className="profile">
            <ProfileDescription data={data}/>
            <ProfileStats stats={data.stats}/>
        </div>
    );
}

Profile.propTypes = {
    data: PropTypes.object.isRequired,
};