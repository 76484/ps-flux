import React, { useState } from "react";

import { saveCourse } from "../api/courseApi";
import CourseForm from "./CourseForm";

const ManageCoursePage = ({ history, match }) => {
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

  const handleSubmit = event => {
    event.preventDefault();

    saveCourse(course).then(() => {
      history.push("/courses");
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
