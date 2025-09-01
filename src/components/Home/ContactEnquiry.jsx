const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ loading: true, success: null });

  const templateParams = {
    user_name: formData.name,
    user_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    // 1️⃣ Send email via EmailJS
    await emailjs.send(
      "service_d3cmn09",
      "template_896zkcf",
      templateParams,
      "VNkGJBgBYKU8OjweK"
    );

    // 2️⃣ Save data to Google Sheets via Web App URL
    await fetch(
      "https://script.google.com/macros/s/AKfycbz3fVU1goR7DCWhPm-wXYeGYHpAFfv9sjsGfXpCfDQa3ol2JYikB-gn43z8ZhaV145Wjw/exec",
      {
        method: "POST",
        body: new URLSearchParams({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
        }),
      }
    );

    setStatus({ loading: false, success: true });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error(error);
    setStatus({ loading: false, success: false });
  }
};
