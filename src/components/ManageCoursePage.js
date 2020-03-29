import React from "react";

const ManageCoursePage = ({ match }) => {
  return (
    <>
      <h2>Manage Course</h2>
      {match.params.slug}
    </>
  );
};

export default ManageCoursePage;
