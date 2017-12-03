import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

class EditForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit} = this.props;

    return <form onSubmit={handleSubmit}>
      {/* First Name */}
      <Field label="First Name" name="firstName" component={this.renderTitleField}/> {/* Last Name */}
      <Field label="Last Name" name="lastName" component={this.renderTitleField}/> {/* Bio/ About */}
      <div className="form-group row">
        <label htmlFor="about" className="col-sm-2 col-form-label">Bio</label>
        <div className="col-sm-5">
          <Field name="bio" className="form-control" component="textarea" type="text"/>
        </div>
      </div>
      {/* City */}
      <Field label="City" name="city" component={this.renderTitleField}/>

      <Field label="Video link to Youtube/Vimeo" name="video" component={this.renderTitleField}/>
      <Field label="Link to website" name="website" component={this.renderTitleField}/>

      <div>
        <label className="form-check-label">Years of comedy training</label>
        <div>
          <div>
            <div><Field className="form-check-input" name="training" component="input" type="radio" value="less than 1 year"/>
              less than 1 year</div>
          </div>
          <div>
            <div><Field name="training" component="input" type="radio" value="1-3 years"/>
              1-3 years</div>
          </div>
          <div>
            <div><Field className="form-check-input" name="training" component="input" type="radio" value="4-7 years"/>
              4-7 years</div>
          </div>
          <div>
            <div><Field className="form-check-input" name="training" component="input" type="radio" value="7-10 years"/>
              7-10 years</div>
          </div>
          <div>
            <div><Field className="form-check-input" name="training" component="input" type="radio" value="11+ years"/>
              11+ years</div>
          </div>
        </div>
      </div>

      <div>
        <label className="form-check-label">Years of professional comedy working in the industry</label>
        <div>
          <div>
            <div><Field className="form-check-input" name="experience" component="input" type="radio" value="less than 1 year"/>
              less than 1 year</div>
          </div>
          <div>
            <div><Field name="experience" component="input" type="radio" value="1-3 years"/>
              1-3 years</div>
          </div>
          <div>
            <div><Field className="form-check-input" name="experience" component="input" type="radio" value="4-7 years"/>
              4-7 years</div>
          </div>
          <div>
            <div><Field className="form-check-input" name="experience" component="input" type="radio" value="7-10 years"/>
              7-10 years</div>
          </div>
          <div>
            <div><Field className="form-check-input" name="experience" component="input" type="radio" value="11+ years"/>
              11+ years</div>
          </div>
        </div>
      </div>

      
      <label>Avaliable to meet for</label>
      <Field label="Coffee" name="Coffee" component={this.renderCheckbox}/>
      <Field label="Feedback/Advice" name="Feedback/Advice" component={this.renderCheckbox}/>
      <Field label="Mentorship" name="Mentorship" component={this.renderCheckbox}/>
      <Field label="New Friends In Comedy" name="New Friends In Comedy" component={this.renderCheckbox}/>
      <Field label="Open Mic Buddy" name="Open Mic Buddy" component={this.renderCheckbox}/>
      <Field label="Seeking Mentors" name="Seeking Mentors" component={this.renderCheckbox}/>

      <button type="submit" className="btn btn-danger">Submit</button>
    </form>
  }

  renderTitleField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field
    const className = `form-group row ${touched && error
      ? 'has-danger'
      : ''}`;

    return (<div className={className} id="field-form">
      <label className="col-sm-2 col-form-label">{field.label}</label>
      <div className="col-sm-5">
        <input className="form-control" type="text" {...field.input} placeholder={field.label}/>

        <div className="text-help">
          {
            touched
              ? error
              : ''
          }
        </div>
      </div>

    </div>);
  }

  renderCheckbox(field) {
    return (<div>
      <label className="checkbox-inline"><input type="checkbox" {...field.input}/>{field.label}</label>
    </div>)
  }

}

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Enter a first name';
  }
  if (!values.lastName) {
    errors.lastName = "Enter a last name";
  }

  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = "Enter an password";
  }
  if (!values.gender) {
    errors.gender = "Enter a gender";
  }
  if (!values.video) {
    errors.video = "Enter a video link";
  }
  if (!values.city) {
    errors.city = "Enter a city";
  }
  if (!values.training) {
    errors.training = "Enter training";
  }
  if (!values.experience) {
    errors.experience = "Enter experience";
  }
  if (!values.website) {
    errors.website = "Enter website";
  }

  return errors;
}

EditForm = reduxForm({validate, form: 'userEdit'})(EditForm)

export default EditForm
