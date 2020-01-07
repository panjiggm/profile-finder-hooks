import React from "react";

const Profile = ({ profiles }) => {
  console.log(profiles);

  return profiles.length > 0 ? (
    profiles.map((profile, index) => (
      <div key={profile.id}>
        <h3>{profile.name}</h3>
      </div>
    ))
  ) : (
    <div>No Profiles..</div>
  );
};

export default Profile;
