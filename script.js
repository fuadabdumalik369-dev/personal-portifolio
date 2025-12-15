// ============================
// SAMPLE STUDENT DATA (AUTO GENERATE)
// ============================
let students = [
  { id: 1, name: "Fuad Abdumalik", department: "IT" },
  { id: 2, name: "Fami Ahmed", department: "CS" },
  { id: 3, name: "Jamhikaa Adunya", department: "SE" }
];

// ============================
// DISPLAY STUDENTS ON LOAD
// ============================
window.onload = function () {
  displayStudents();

  // Load dark mode if enabled
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
  }
};

// ============================
// ADD STUDENT
// ============================
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let department = document.getElementById("department").value;

  let student = {
    id: Date.now(),
    name: name,
    department: department
  };

  students.push(student);
  displayStudents();
  this.reset();
});

// ============================
// DISPLAY STUDENTS
// ============================
function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.department}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

// ============================
// DELETE STUDENT
// ============================
function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
  displayStudents();
}

// ============================
// DARK MODE
// ============================
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
}

// ============================
// LOGOUT
// ============================
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}



