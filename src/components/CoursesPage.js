import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    const onChange = () => {
      setCourses(courseStore.getCourses());
    };

    courseStore.addChangeListener(onChange);

    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }

    return () => courseStore.removeChangeListener(onChange);
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
