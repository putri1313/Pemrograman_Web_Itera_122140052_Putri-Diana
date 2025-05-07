import React from "react";
import { render } from "@testing-library/react";
import FilterBar from "../components/FilterBar";

test("renders FilterBar without crashing", () => {
  const mockSetFilter = jest.fn();
  render(<FilterBar filter="semua" setFilter={mockSetFilter} />);
});
