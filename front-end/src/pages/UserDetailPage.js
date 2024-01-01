import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import the pencil icon
import { deleteUser } from "../utility/UserApiUtility"
import { useParams } from 'react-router-dom';
import UserDetail from '../Componenets/UserDetail';

function UserDetailPage() {
  const { id } = useParams();

  let [loading, setLoading] = React.useState(false);

  function handleDelete() {
    deleteUser(id, setLoading);
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card
          title="User Detail"
          hoverable
          loading={loading}
          extra={
            <>
              <Button type="text" icon={<EditOutlined />} href={`/user/update/${id}`}>
                Edit
              </Button>
              <Button type="text" icon={<DeleteOutlined />} onClick={handleDelete}>
                Delete
              </Button>
            </>
          }
        >
          <UserDetail userId={id} />
        </Card>
      </Col >
    </Row >
  );
}

export default UserDetailPage;
