import React from 'react';
import Dropzone from 'react-dropzone';

const FileUploadZone = () => {
  const handleDrop = acceptedFiles => {
    console.log(acceptedFiles);
  };

  return (
    <Dropzone onDrop={handleDrop}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
            <input {...getInputProps()} />
            <p className="text-gray-600">Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileUploadZone;