import React, { useState } from "react";

import CourseForm from "./CourseForm";

const ManageCoursePage = ({ match }) => {
  const [course, setCourse] = useState({
    id: null,
    authorId: null,
    category: "",
    slug: "",
    title: ""
  });

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
