import React from "react";

function ProfilePage({ params }) {

  const {id} = params;

  
  return <div>{id}</div>;
}

export default ProfilePage;
