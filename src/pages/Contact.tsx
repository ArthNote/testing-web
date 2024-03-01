import "../styles/Contact.css"

function Contact() {
  return (
    <>
      <section className="container-box">
        <div className="img-holder">
        </div>
        <div className="contact">
          <h1>Contact Us</h1>
          <form action="">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact