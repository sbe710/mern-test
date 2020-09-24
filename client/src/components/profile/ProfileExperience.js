import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experience: {
    company,
    title,
    current,
    from,
    to,
    description
} }) => (
    <div className="profile-exp bg-white p-2">
        <h3 className="text-dark">{company}</h3>
        <p>
            <Moment format='YYYY/MM/DD'>{from}</Moment> - {current ? <span> Now</span> : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>
        <p>
            <strong>Position: </strong>{title}
        </p>
        <p>
            {description && (
                <Fragment>
                    <strong>Description: </strong> {description}
                </Fragment>
            )}
        </p>
    </div>
);

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
