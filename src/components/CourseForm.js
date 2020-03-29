import React from "react";

import TextInput from "./common/TextInput";

function CourseForm({ course, errors, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        error={errors.title}
        label="Title"
        name="title"
        onChange={onChange}
        value={course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={onChange}
            value={course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {errors.authorId && (
          <div className="alert alert-danger">{errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        error={errors.category}
        label="Category"
        name="category"
        onChange={onChange}
        value={course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
