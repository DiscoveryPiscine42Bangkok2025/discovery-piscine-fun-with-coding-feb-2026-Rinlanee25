$(document).ready(function () {
  loadTodos();

  $("#new").click(function () {
    let text = prompt("Enter a new TO DO");
    if (!text || text.trim() === "") return;

    addTodo(text);
    saveTodos();
  });
});

function addTodo(text) {
  let div = $("<div></div>").text(text).css("cursor", "pointer");

  div.click(function () {
    if (confirm("Do you want to remove this TO DO?")) {
      $(this).remove();
      saveTodos();
    }
  });

  $("#ft_list").prepend(div);
}

function saveTodos() {
  let todos = [];
  $("#ft_list div").each(function () {
    todos.push($(this).text());
  });

  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
  document.cookie.split("; ").forEach(function (c) {
    if (c.startsWith("todos=")) {
      let data = JSON.parse(decodeURIComponent(c.split("=")[1]));
      data.forEach(function (todo) {
        addTodo(todo);
      });
    }
  });
}
