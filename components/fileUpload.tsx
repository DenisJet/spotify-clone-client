import { useRef } from 'react';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: any;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files || evt.target.files.length === 0) return;
    setFile(evt.target.files[0]);
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type='file'
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;