import React, { useCallback, useRef, useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { getBase64, beforeUpload } from '../../utils/photoUpload';
import useFaceDetector from '../../hooks/useFaceDetector';
import BoundingBoxes from '../BoundingBoxes/BoundingBoxes';

import styles from './PhotoAnalyzer.scss';

const PhotoAnalyzer = () => {
  const [isLoading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const photoRef = useRef(null);

  const { predictions } = useFaceDetector(photoRef, imageUrl);

  const onImageUpload = useCallback((info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (localImageUrl) => {
        setLoading(false);
        setImageUrl(localImageUrl);
      });
    }
  }, []);

  return (
    <>
      <Upload
        name="avatar"
        listType="text"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={onImageUpload}
        maxCount={1}
        customRequest={({ onSuccess }) => {
          onSuccess('ok');
        }}
      >
        <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
      </Upload>
      <img
        ref={photoRef}
        src={imageUrl}
        alt="avatar"
        className={styles['image-wrapper']}
      />
      <BoundingBoxes
        predictions={predictions}
        width={photoRef?.current?.clientWidth}
        height={photoRef?.current?.clientHeight}
      />
    </>
  );
};

export default PhotoAnalyzer;
