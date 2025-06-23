function submitOrder() {
  const fullName = document.getElementById('fullname').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!fullName || !mobile || !address) {
    alert("Please fill in all required fields.");
    return;
  }

  // Optional: Save order data locally or send to server
  alert("✅ Your order has been placed successfully!");

  // Reset form (optional)
  document.querySelectorAll('input, textarea').forEach(el => el.value = "");
}
