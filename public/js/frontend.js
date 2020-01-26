async function sendEmail(html, email) {
  const options = {
    html: html,
    subject: "You Prescription",
    recieversEmailId: email
  };
  try {
    const result = await axios.post("/email", options);
    if (result.data.result) {
      alert("Email Send to Patient");
    }
  } catch (err) {
    console.log(err);
  }
}
