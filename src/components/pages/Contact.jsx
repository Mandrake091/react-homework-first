import React, { useState } from "react";
import Axios from "axios";

function Contact() {
  const url = "https://webhook.site/d1870a2b-10ac-47f0-859c-1af0cc295840";

  // const [data, setData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   subject: "",
  //   text: "",
  //   privacy: "",
  // });

  const submit = (event) => {
    // const newData = { ...data };
    // newData[e.target.id] = e.target.value;
    // setData(newData);
    // console.log(newData);
    event.preventDefault();
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

  // function submit(e) {
  //   e.preventDefault();

  //   axios.post(url, {});
  // }
  // axios
  //   .post(url, {
  //     firstname: data.firstname,
  //     lastname: data.lastname,
  //     email: data.email,
  //     subject: data.subject,
  //     text: data.text,
  //     privacy: data.privacy,
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   });

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-6">
          <form onSubmit={submit}>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 p-0">
                <label class="form-label">Firstname</label>
                <input
                  // onChange={(e) => handleSubmit(e)}
                  value="firstname"
                  type="text"
                  class="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-12 col-lg-5 p-0">
                <label for="exampleInputEmail1" class="form-label">
                  Lastname
                </label>
                <input
                  // onChange={(e) => handleSubmit(e)}
                  // value={data.lastname}
                  type="text"
                  class="form-control"
                  id="lastname"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-7 p-0">
                <label for="exampleInputEmail1" class="form-label">
                  email
                </label>
                <input
                  // onChange={(e) => handleSubmit(e)}
                  // value={data.email}
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-12 col-lg-4 p-0">
                <label for="exampleInputEmail1" class="form-label">
                  subject
                </label>
                <input
                  // onChange={(e) => handleSubmit(e)}
                  // value={data.subject}
                  type="text"
                  class="form-control"
                  id="subject"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                textarea
              </label>
              <div class="form-floating">
                <textarea
                  // onChange={(e) => handleSubmit(e)}
                  // value={data.text}
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="text"
                ></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div class="mb-3 form-check">
              <input
                // onChange={(e) => handleSubmit(e)}
                // value={data.privacy}
                type="checkbox"
                class="form-check-input"
                id="privacy"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
