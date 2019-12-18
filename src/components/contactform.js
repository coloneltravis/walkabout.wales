import React from "react";

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mvogvlgz"
          method="POST"
        >

        <div>
          <label htmlFor="queryType" style={{fontWeight: `bold`}}>Type of Query:</label>
          <select id="queryType" name="queryType">
             <option value="walks">Walks</option>
             <option value="courses">Courses</option>
             <option value="website">Web site</option>
           </select>
        </div>

        <div>
          <label htmlFor="yourname" style={{fontWeight: `bold`}}>Your name:</label>
          <input type="text" id="yourname" name="yourname" />
        </div>

        <div>
          <label htmlFor="email" style={{fontWeight: `bold`}}>Your email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="subject" style={{fontWeight: `bold`}}>Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div>
          <label htmlFor="message" style={{fontWeight: `bold`}}>Type you message here:</label>
          <textarea name="message" id="message" rows="3" cols="50"></textarea>
          </div>

        <div>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>

        </form>
      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }
  