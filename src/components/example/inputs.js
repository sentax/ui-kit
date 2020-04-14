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
        <Input
          type="text"
          name="text1"
          placeholder="TextOne"
          id="text1"
          style={{ marginBottom: 10 }}
        />

        <Input
          type="password"
          name="text2"
          placeholder="TextTwo"
          id="text2"
          style={{ marginBottom: 10 }}
        />

        <Input
          type="text"
          name="text3"
          placeholder="TextThree"
          id="text3"
          style={{ marginBottom: 10 }}
          className={`outlined`}
        />

        <Input
          type="password"
          name="text4"
          placeholder="TextFour4"
          id="text4"
          style={{ marginBottom: 10 }}
          className={`outlined`}
        />
      </Card>
    </div>
  );
};

export default Inputs;
