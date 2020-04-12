import React from "react";
import Input from "../kit/Input/input";
import Card from "../kit/Card/card";

const Inputs = () => {
  return (
    <div style={{ display: "flex", flexDirection: `column` }}>
      <h4 style={{ marginTop: 0 }}>Inputs</h4>
      <Card
        style={{
          padding: 16,
          marginRight: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Input type="text" name="text1" placeholder="TextOne" id="text1" />
        <Input type="password" name="text2" placeholder="TextTwo" id="text2" />
      </Card>
    </div>
  );
};

export default Inputs;
