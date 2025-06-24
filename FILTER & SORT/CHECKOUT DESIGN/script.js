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

  
}

// email 
// main code

function sendmail() {
  let parms = {
    no: document.getElementById("mobile").value.trim(),
    name: document.getElementById("fullname").value.trim(),
    email: document.getElementById("email").value.trim(),
    landmark: document.getElementById("landmark").value.trim(),
    instruction: document.getElementById("instructions").value.trim(),
    address: document.getElementById("address").value.trim(),
    total: document.getElementById("totalAmount").innerText,
    fee: document.getElementById("deliveryFee").innerText,
    discount: document.getElementById("discount").innerText,
    grandtotal: document.getElementById("grandTotal").innerText,
  };

  emailjs.send("service_qfmqcto", "template_wkv4q69", parms)
    .then(() => {
      alert("Your order has been placed successfully! We'll contact you shortly. Thank you for shopping with us!");
      window.location.href = "thankyou.html";
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("❌ Failed to send confirmation email. Please try again.");
    });

    // Reset form (optional)
  document.querySelectorAll('input, textarea').forEach(el => el.value = "");
}
