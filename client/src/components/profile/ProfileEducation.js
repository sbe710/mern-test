import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ education: {
    school,
    degree,
    fieldofstudy,
    current,
    from,
    to,
    description
} }) => (
    <div className="profile-exp bg-white p-2">
        <h3 className="text-dark">{school}</h3>
        <p>
            <Moment format='YYYY/MM/DD'>{from}</Moment> - {current ? <span> Now</span> : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>
        <p>
            <strong>Degree: </strong>{degree}
        </p>
        <p>
            <strong>Field Of Study: </strong>{fieldofstudy}
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

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired,
};

export default ProfileEducation;
