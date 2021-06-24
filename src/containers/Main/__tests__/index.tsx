import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Main from "..";

it("renders correctly", () => {
  renderer.create(<Main />);
});
