import React, { useState } from "react";
import { toast } from "react-toastify";

import { saveCourse } from "../api/courseApi";
import CourseForm from "./CourseForm";

const ManageCoursePage = ({ history }) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    authorId: null,
    category: "",
    slug: "",
    title: ""
  });

  const formIsValid = () => {
    const _errors = {};

    if (!course.title) {
      _errors.title = "Title is required";
    }
    if (!course.authorId) {
      _errors.authorId = "Author ID is required";
    }
    if (!course.category) {
      _errors.category = "Category is required";
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formIsValid()) {
      saveCourse(course).then(() => {
        history.push("/courses");
        toast.success("Course saved.");
      });
    }
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
