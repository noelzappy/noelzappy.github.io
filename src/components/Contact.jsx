import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const clearVals = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  function sendEmail() {
    setIsSending(true);
    const templateParams = {
      from_name: name,
      message,
      reply_to: email,
    };

    // Replace the service ID, template ID, and user ID with your values.
    // You can find them in your emailjs account.
    // You should probably store them in environment variables.
    emailjs
      .send(
        "service_o9ywi4t",
        "template_9l9dwjo",
        templateParams,
        "user_VqE10PjT4j0SPNZTrxml4"
      )
      .then((res) => {
        toast.success("Message sent successfully");
        clearVals();
      })
      .catch((err) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="fields">
          <div className="contact_form">
            <div className="first">
              <ul>
                <li>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button
                type="submit"
                className="ib-button"
                disabled={!name || !email || !message || isSending}
                onClick={sendEmail}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </div>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
