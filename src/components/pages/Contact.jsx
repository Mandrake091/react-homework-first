import React, { useState } from "react";
import Axios from "axios";

function Contact() {
  const url = "https://webhook.site/d1870a2b-10ac-47f0-859c-1af0cc295840";

  const [isPrivacy, setPrivacy] = useState(false);


  const submit = (event) => {
  
    event.preventDefault();

    setPrivacy((current) => !current);

    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const privacy = event.target.privacy.value;
    const text = event.target.text.value;

    try {
      fetch(url, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          privacy,
          subject,
          text,
        }),
      });
    } catch (e) {}
  };

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-6">
          <form onSubmit={submit}>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 p-0">
                <label className="form-label">Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-12 col-lg-5 p-0">
                <label htmlform="exampleInputEmail1" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-7 p-0">
                <label htmlform="exampleInputEmail1" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-12 col-lg-4 p-0">
                <label htmlform="exampleInputEmail1" className="form-label">
                  subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-12 mb-3">
                <label htmlform="exampleInputEmail1" className="form-label">
                  textarea
                </label>
                <div className="form-floating">
                  <textarea
              
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="text"
                  ></textarea>
                  <label htmlform="floatingTextarea">Comments</label>
                </div>
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
            </div>

            <div className="mb-3 form-check">
              <input
                value={isPrivacy}
                type="checkbox"
                className="form-check-input"
                id="privacy"
              />
              <label className="form-check-label" htmlform="exampleCheck1">
                Privacy consent
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
