import { version as antdVersion } from 'antd';
import { version as reactVersion } from 'react';

export default function () {
  return (
    <>
      <h1 className="app-title">React Demo</h1>
      <p className="app-lib">
        React version: {reactVersion}, AntD version: {antdVersion}
      </p>
    </>
  );
}
