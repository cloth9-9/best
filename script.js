window.onload = () => {
  // Hide loader after 1.2 sec
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1200);
};

// Toggle Dark / Light Theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Close Popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// After Review Click
function reviewDone() {
  alert("Our rewards is pending or under construction");
}

// Show Popup after 2.5 sec
setTimeout(() => {
  document.getElementById("popup").style.display = "flex";
}, 2500);

// WhatsApp Order Button
function orderNow(product) {
  window.open(`https://wa.me/918001223331?text=I want to order ${product}`);
}

// Tailoring Form Submit
function sendOrder(e) {
  e.preventDefault();
  alert("Request submitted! We will contact you soon.");
}
