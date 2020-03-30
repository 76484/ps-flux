import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import courseStore from "../stores/courseStore";
import CourseForm from "./CourseForm";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = ({ history, match }) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
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
      courseActions.saveCourse(course).then(() => {
        history.push("/courses");
        toast.success("Course saved.");
      });
    }
  };

  const onStoreChange = () => {
    setCourses(courseStore.getCourses());
  };

  useEffect(() => {
    const slug = match.params.slug;

    courseStore.addChangeListener(onStoreChange);

    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onStoreChange);
  }, [courses.length, match.params.slug]);

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
