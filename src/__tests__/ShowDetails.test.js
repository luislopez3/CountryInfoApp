import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router";
import ShowDetails from "../ShowDetails.js";

describe("Show Details component", () => {
  test("Matches the snapshot", () => {
    const wrapper = create(
      <MemoryRouter>
        <ShowDetails />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
