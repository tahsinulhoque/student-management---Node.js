import API from "../api";

const StudentList = ({ students, fetchStudents }) => {

  const handleDelete = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map((s) => (
        <div key={s._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><b>Name:</b> {s.name}</p>
          <p><b>Email:</b> {s.email}</p>
          <p><b>Age:</b> {s.age}</p>
          <p><b>Course:</b> {s.course}</p>
          <button onClick={() => handleDelete(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;