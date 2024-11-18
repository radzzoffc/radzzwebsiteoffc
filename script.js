const orders = [
  { name: "Reyhana Rahma M.", class: "9E", status: "Belum Lunas" },
  { name: "Lionel Aflah Zaidan", class: "9F", status: "Belum Lunas" },
  // Tambahkan data lainnya...
];

function loadOrders() {
  const tbody = document.getElementById("orders-body");
  tbody.innerHTML = orders
    .map(
      (order, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${order.name}</td>
        <td>${order.class}</td>
        <td>${order.status}</td>
      </tr>
    `
    )
    .join("");
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
// chage admin user
  if (username === "pengurus" && password === "penguruslist") {
    location.href = "admin.html";
  } else {
    alert("Wkwkwkw ngapain?? kalo gatau gausah coba-coba yoo.....");
  }
}

function loadAdminOrders() {
  const tbody = document.getElementById("orders-body-admin");
  tbody.innerHTML = orders
    .map(
      (order, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${order.name}</td>
        <td>${order.class}</td>
        <td>${order.status}</td>
        <td><button onclick="markAsPaid(${index})">Lunas</button></td>
      </tr>
    `
    )
    .join("");
}

function markAsPaid(index) {
  orders[index].status = "Lunas";
  loadAdminOrders();
}

function addOrder(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const className = document.getElementById("class").value;

  orders.push({ name, class: className, status: "Belum Lunas" });
  loadAdminOrders();
}

function logout() {
  location.href = "siliwangisct.html";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.includes("index.html")) loadOrders();
  if (location.pathname.includes("login.html"))
    document.getElementById("login-form").addEventListener("submit", login);
  if (location.pathname.includes("admin.html")) {
    loadAdminOrders();
    document
      .getElementById("add-order-form")
      .addEventListener("submit", addOrder);
  }
});
