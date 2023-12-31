import React from 'react';
import { Alert, Cascader, Skeleton } from 'antd';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const mapOptions = (item) => {
  const mappedItem = {
    value: item.name,
    label: item.name,
  };

  if (item.children && item.children.length > 0) {
    mappedItem.children = item.children.map(mapOptions);
  }

  return mappedItem;
};

const makeOtherLast = (items) => {
  const otherIndex = items.findIndex(item => item.value && item.value.toLowerCase().startsWith('other'));

  if (otherIndex !== -1) {
    const [other] = items.splice(otherIndex, 1);
    items.push(other);
  }

  items.forEach(item => {
    if (item.children && item.children.length > 0) {
      makeOtherLast(item.children);
    }
  });
};


const SelectBox = ({ defaultValue, setSector }) => {
  const { data, error, isLoading } = useSWR('http://localhost:5500/sectors/full_graph', fetcher);

  if (error) {
    return <Alert message="Error" description="Error while loading sectors" type="error" showIcon />
  }

  if (isLoading) {
    return <Skeleton active />
  }

  const onChange = (value) => {
    setSector(value);
  };

  const sectorOptions = data.map(mapOptions);
  makeOtherLast(sectorOptions);

  return <Cascader allowClear={false}
    style={{ width: '100%' }}
    options={sectorOptions}
    expandTrigger="hover"
    defaultValue={defaultValue}
    size="large" controlWidth="900"
    onChange={onChange}
    placeholder="Select the sector you are in" />;
};


export default SelectBox;
