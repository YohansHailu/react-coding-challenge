import React from 'react';
import { Row, Col, Card, Input, Space, Checkbox, Button, Alert } from 'antd';
import SelectBox from './Componenets/selectBox';
import './registerPage.css'
import baseUrl from './config'
import axios from 'axios';


function RegisterPage() {
  let [name, setName] = React.useState("");
  let [sector_names, setSector] = React.useState([]);
  let [agreed, setAgreed] = React.useState(false);
  let [validationError, setValidationError] = React.useState(null);
  let [submitting, setSubmitting] = React.useState(false);




  const clearValidationError = () => {
    if (validationError !== null) {
      setValidationError(null);
    }
  };

  function handleNameChange(event) {
    setName(event.target.value);
    clearValidationError()
  }

  function handleAgreementChange(event) {
    setAgreed(event.target.checked);
    clearValidationError()
  }

  function handleSubmit() {
    if (!name) {
      setValidationError("Please enter a name.");
      return;
    }

    if (sector_names.length === 0) {
      setValidationError("Please select your sector.");
      return;
    }

    if (!agreed) {
      setValidationError("Please agree to the terms.");
      return;
    }

    clearValidationError()
    // If all validations pass, proceed with submission
    setSubmitting(true);
    console.log("submitting sector -> " + sector_names.join('/') + "  and name ->" + name);
    let userData = { name: name, sector_names: sector_names }
    axios.post(`${baseUrl}/users`, userData).then((response) => {

      console.log(response.data);
      window.location.href = "/users/" + response.data._id;
    }).catch((error) => {

      console.log(error);
      alert("Error in submitting data, Please try Again");
    }).finally(() => {
      setSubmitting(false);
    });
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>

      <Col xs={24} sm={20} md={16} lg={12} xl={8} >
        <Card title="Register" className={validationError ? 'animated-input error' : 'animated-card'} bordered={false} hoverable >
          <Input
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            style={{ marginBottom: 16 }}
            className={validationError && !name ? 'animated-input error' : 'animated-input'}
          />

          <Space direction="vertical" style={{ width: '100%' }}>
            <SelectBox defaultValue={[]} setSector={setSector} />
            <Checkbox
              className={validationError ? 'animated-input error' : 'animated-input'}
              onChange={handleAgreementChange}>Agree to terms</Checkbox>
            {validationError && <Alert message={validationError} type='error' showIcon closable className="animated-alert" />}
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={handleSubmit}
              className="animated-button"
              loading={submitting}
            >
              {submitting ? 'submitting' : 'Submit'}
            </Button>

          </Space>
        </Card>
      </Col>
    </Row>
  );
}

export default RegisterPage;
