import React from 'react';
import { Row, Col, Card, Input, Space, Checkbox, Button, Alert, Skeleton } from 'antd';
import SelectBox from '../Componenets/selectBox';
import '../style/registerPage.css'
import { postUser, updateUser } from "../utility/UserApiUtility"
import useSWR from 'swr';
import { fetcher } from '../utility/sectorUtility';
import { clearValidationError, validateForm } from '../utility/validationUtility';
import baseUrl from '../config'

function RegisterPage({ swrUser }) {

  let [name, setName] = React.useState(null);
  let [sector_names, setSector] = React.useState(null);
  let [agreed, setAgreed] = React.useState(false);
  let [validationError, setValidationError] = React.useState(null);
  let [submitting, setSubmitting] = React.useState(false);

  let swrOptions = useSWR(`${baseUrl}/sectors/full_graph`, fetcher);


  function handleNameChange(event) {
    setName(event.target.value);
    clearValidationError(setValidationError)
  }

  function handleAgreementChange(event) {
    setAgreed(event.target.checked);
    clearValidationError(setValidationError)
  }


  function handleSubmit() {
    if (!validateForm(name, sector_names, agreed, setValidationError)) {
      return;
    }
    clearValidationError(setValidationError)

    if (swrUser && swrUser.data && swrUser.data._id) {
      updateUser(name, sector_names, swrUser.data._id, setSubmitting);

    } else {

      postUser(name, sector_names, setSubmitting);
    }
  }

  if (swrUser && swrUser.isLoading) {
    return <Skeleton active block={true} />
  }

  if (swrUser && swrUser.data && swrUser.data.name && !name) {
    if (name == null) {
      setName(swrUser.data.name);
    }
    if (sector_names == null) {
      setSector(swrUser.data.sector_names);
    }
  }


  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>

      <Col xs={24} sm={20} md={16} lg={12} xl={8} >
        <Card title={swrUser ? "update" : "Register"} className={validationError ? 'animated-input error' : 'animated-card'} bordered={false} hoverable >
          <Input
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            style={{ marginBottom: 16 }}
            className={validationError && !name ? 'animated-input error' : 'animated-input'}
          />

          <Space direction="vertical" style={{ width: '100%' }}>
            <SelectBox sector_names={sector_names} setSector={setSector} swrOptions={swrOptions} />
            <Checkbox
              className={validationError ? 'animated-input error' : 'animated-input'}
              onChange={handleAgreementChange}>Agree to terms</Checkbox>
            {validationError && <Alert message={validationError} type='error' showIcon closable className="animated-alert" />}
            {swrUser && swrUser.error && <Alert message="Error" description="Error while loading user" type="error" showIcon />}
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
