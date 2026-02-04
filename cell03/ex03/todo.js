// โหลด TO DO จาก cookie ตอนเปิดหน้า
window.onload = function () {
  loadTodos();
};

// สร้าง TO DO ใหม่
function newTodo() {
  let text = prompt("Enter a new TO DO");

  if (!text || text.trim() === "") return;

  addTodo(text);
  saveTodos();
}

// เพิ่ม TO DO บนสุด
function addTodo(text) {
  let div = document.createElement("div");
  div.innerText = text;

  div.style.cursor = "pointer";

  // คลิกเพื่อลบ
  div.onclick = function () {
    if (confirm("Do you want to remove this TO DO?")) {
      div.remove();
      saveTodos();
    }
  };

  document.getElementById("ft_list").prepend(div);
}

// บันทึก TO DO ลง cookie
function saveTodos() {
  let todos = [];
  document.querySelectorAll("#ft_list div").forEach(item => {
    todos.push(item.innerText);
  });

  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

// โหลด TO DO จาก cookie
function loadTodos() {
  document.cookie.split("; ").forEach(c => {
    if (c.startsWith("todos=")) {
      let data = JSON.parse(decodeURIComponent(c.split("=")[1]));
      data.forEach(todo => addTodo(todo));
    }
  });
}
