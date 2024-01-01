import { Skeleton, Alert, Tag, Typography } from 'antd';
import useSWR from 'swr';
import baseUrl from '../config'
const fetcher = (...args) => fetch(...args).then(res => res.json());


const { Text } = Typography;
function UserDetail({ userId }) {

  userId = userId || '00000000000000';

  const { data, error, isLoading } = useSWR(`${baseUrl}/users/${userId}`, fetcher);

  if (error) {
    return <Alert message="Error" description="Error while loading User, User IS NOT FOUND" type="error" showIcon />
  }
  if (isLoading) {
    return <Skeleton active />
  }

  return (
    <div>




      <p>
        <strong>Name :</strong>
        <Text keyboard>{data.name || 'unknown'}</Text>

      </p>
      <p>
        <strong>Sectors:</strong>
        {data.sector_names?.map((sector, index) => (
          <Tag key={index} color="geekblue" style={{ margin: 3, marginLeft: 20 }}>
            {sector.join(' / ')}
          </Tag>
        ))}
      </p>
    </div>
  );
}

export default UserDetail;
