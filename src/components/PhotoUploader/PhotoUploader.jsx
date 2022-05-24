import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';

import downloadIcon from 'assets/download.svg';

import styles from './PhotoUploader.scss';
import PhotoAnalyzer from '../PhotoAnalyzer/PhotoAnalyzer';

const PhotoUploader = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImages((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Upload a photo</div>
      <div className={styles['image-list']}>
        {images.map((image) => (
          <PhotoAnalyzer key={image.preview} imageUrl={image.preview} />
        ))}
      </div>

      <div
        {...getRootProps()}
        className={classNames(styles['file-wrapper'], {
          [styles['dropzone-active']]: isDragAccept,
        })}
      >
        <input {...getInputProps()} />
        <img src={downloadIcon} alt="icon" />
        <div className={styles.description}>
          <span>Click or drag file</span> to this area to upload
        </div>
      </div>
    </div>
  );
};

export default PhotoUploader;
