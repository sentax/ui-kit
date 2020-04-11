import React from "react";
import Buttons from "./buttons";
import TabsEx from "./tabsEx";
import Inputs from "./inputs";

const Examples = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Buttons />

      <TabsEx />

      <Inputs />
    </div>
  );
};

export default Examples;
