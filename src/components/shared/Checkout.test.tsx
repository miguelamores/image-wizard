import { describe, expect, it, beforeEach, vi } from "vitest";
import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Checkout", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render checkout button", () => {
    render(<Checkout plan="free" amount={10} credits={1000} buyerId="1234" />);
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("should render form", () => {
    render(<Checkout plan="free" amount={10} credits={1000} buyerId="1234" />);
    expect(screen.getByTestId("buy-credits-form")).toBeDefined();
  });
});
