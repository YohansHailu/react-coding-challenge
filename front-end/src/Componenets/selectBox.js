import React from 'react';
import { Alert, Cascader, Skeleton } from 'antd';
import { mapOptions, makeOtherLast, fetcher } from '../utility/sectorUtility';


const SelectBox = ({ sector_names, setSector, swrOptions }) => {

  if (swrOptions.error) {
    return <Alert message="Error" description="Error while loading sectors" type="error" showIcon />
  }

  if (swrOptions.isLoading) {
    return <Skeleton active />
  }

  const onChange = (value) => {
    setSector(value);
  };

  const sectorOptions = swrOptions.data.map(mapOptions);
  makeOtherLast(sectorOptions);

  return <Cascader
    style={{ width: '100%' }}
    options={sectorOptions}
    defaultValue={sector_names}
    onChange={onChange}
    placeholder="Select the sector you are in" />;
};


export default SelectBox;
