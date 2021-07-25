import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoxList from "./BoxList";

it("renders without crashing", () => {
    render(<BoxList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new Box", () => {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const btn = queryByText("Make a new Box");
    expect(queryByText("Your Added Boxes")).not.toBeInTheDocument();
});
