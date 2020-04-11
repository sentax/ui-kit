import React from "react";
import Card from "../kit/Card/card";
import Tabs from "../kit/Tabs/tabs";

const TabsEx = () => {
  return (
    <div style={{ marginLeft: 24 }}>
      <h4 style={{ marginTop: 0 }}>Tabs</h4>
      <Card
        style={{
          margin: 10,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Tabs>
          <div label="Tab1">this is first tab</div>
          <div label="Tab2">this is second tab</div>
        </Tabs>
      </Card>
    </div>
  );
};

export default TabsEx;
