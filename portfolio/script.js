function sendMail() {
    event.preventDefault();
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // emailjs.send("service_mcn462h", "template_9d4pdxk", parms).then (alert("Email sent!!"))

  emailjs
    .send("service_mcn462h", "template_9d4pdxk", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .then(
      (response) => {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Something went wrong. Please try again.");
      }
    );
}
