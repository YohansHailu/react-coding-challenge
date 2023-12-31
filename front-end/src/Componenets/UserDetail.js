import { Skeleton, Alert, } from 'antd';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import baseUrl from '../config'
const fetcher = (...args) => fetch(...args).then(res => res.json());


function UserDetail({ userId }) {

  userId = userId || '00000000000000';

  const { data, error, isLoading } = useSWR(`${baseUrl}/users/${userId}`, fetcher);

  if (error) {
    return <Alert message="Error" description="Error while loading sectors" type="error" showIcon />
  }
  if (isLoading) {
    return <Skeleton active />
  }

  return (
    <div>
      <p>
        <strong>Name :</strong> {data.name || 'unknown'}
      </p>
      <p>
        <strong>Sector :</strong> {data.sector_names?.join('/') || 'unknown'}
      </p>
    </div>
  );
}

export default UserDetail;
