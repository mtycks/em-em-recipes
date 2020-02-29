// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

export default class MyForm extends React.Component {
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
      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/xqkzpkrb"
        method="POST"
      >
        <FormGroup>
            <Label for="name_field">Your Name</Label>
            <Input type="text" name="name" id="name_field" placeholder="Jane Doe" />
        </FormGroup>
        <FormGroup>
            <Label for="email_field">Your Email</Label>
            <Input type="email" name="email" id="email_field" placeholder="email@yourcompany.com" />
        </FormGroup>
        <FormGroup>
            <Label for="message_field">Message</Label>
            <Input type="textarea" name="message" id="message_field" />
        </FormGroup>
        

        {status === "SUCCESS" ? <p>Thanks, I'll get back to you ASAP!</p> : <Button color="primary" block>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </Form>
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