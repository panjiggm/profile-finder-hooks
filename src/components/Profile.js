import React from "react";

const Profile = ({ profiles }) => {
  return profiles.length > 0 ? (
    profiles.map((profile, index) => (
      <div key={index} className="card">
        <h3>{profile.name}</h3>

        <hr />

        <p>Username : {profile.username}</p>
        <p>Email : {profile.email}</p>
        <p>Phone : {profile.phone}</p>
        <p>Website : {profile.website}</p>
      </div>
    ))
  ) : (
    <div>No Profiles..</div>
  );
};

export default Profile;
