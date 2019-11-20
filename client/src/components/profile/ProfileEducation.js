import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ profile: { education } }) => (
  <div className='profile-edu bg-white p-2'>
    <h2 className='text-primary'>Education</h2>
    {education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.school}</h3>
        <p>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
          {edu.current === true ? (
            ' Present'
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>Masters
        </p>
        <p>
          <strong>Field Of Study: </strong>Computer Science
        </p>
        <p>
          <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente
          suscipit dicta eius velit amet aspernatur asperiores modi quidem
          expedita fugit.
        </p>
      </div>
    ))}
  </div>
);

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileEducation;
