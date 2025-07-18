
const Contact = () => {

  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }
  
  return (
    <section className="contact-section">
      <h2 className="section-heading">Contact Us</h2>

      <div className="form-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name.."
            name="username"
            className="username"
          />

          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email.."
            name="email"
            className="email"
          />

          <textarea
            name="msg"
            className="textarea"
            autoCapitalize="off"
            required
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>

  )
}

export default Contact;