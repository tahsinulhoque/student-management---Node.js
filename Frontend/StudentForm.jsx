import { useState } from "react";
import API from "../api";

const StudentForm = ({ fetchStudents }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/students", form);
    fetchStudents();
    setForm({ name: "", email: "", age: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <input name="course" placeholder="Course" value={form.course} onChange={handleChange} />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;