import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CourseList({ courses, onDeleteCourse }) {
  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={`/course/${course.slug}`}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDeleteCourse(course.id)}
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteCourse: PropTypes.func.isRequired
};

export default CourseList;
