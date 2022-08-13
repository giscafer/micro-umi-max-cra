import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function () {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>CLICK ME</Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        title="qiankun"
      >
        Probably the most complete micro-frontends solution you ever met
      </Modal>
    </>
  );
}
