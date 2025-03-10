import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router";
import Welcome from "../Welcome.js";

describe("Show Details component", () => {
  test("Matches the snapshot", () => {
    const wrapper = create(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
