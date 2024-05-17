import { describe, it, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render heading 2", () => {
    render(<Header title="my title" />);
    expect(screen.getByText("my title")).toBeDefined();
  });

  it("should not render subtitle if not prop is passed", () => {
    render(<Header title="my title" />);
    expect(screen.queryByRole("paragraph")).toBeNull();
  });

  it("should show subtitle if it's defined", () => {
    render(<Header title="Some title" subtitle="this is the subtitle" />);
    expect(screen.getAllByRole("paragraph")).toBeDefined();
  });
});
