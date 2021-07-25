import React from "react";
import { render } from "@testing-libary/react";
import Box from "./Box";

test("it should render without crashing", () => {
    render(<Box />);
});

test("it should match snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});
