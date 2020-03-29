import React, { useEffect, useState } from "react";

import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return <CourseList courses={courses} />;
}

export default CoursesPage;
