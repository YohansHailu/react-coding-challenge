import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons'; // Import the pencil icon
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import UserDetail from './Componenets/UserDetail';

function UserDetailPage() {
  const { id } = useParams();
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card
          title="User Detail"
          hoverable
          extra={
            <Button type="text" icon={<EditOutlined />}>
              <Link to="/">Edit</Link>
            </Button>
          }
        >
          <UserDetail userId={id} />
        </Card>
      </Col>
    </Row>
  );
}

export default UserDetailPage;
