import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const ControlledTabs = () => {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <p>okokok </p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>dfsdfdsf </p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>sdfdsfdfds </p>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;