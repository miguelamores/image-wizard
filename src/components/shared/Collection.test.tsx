import { describe, it, expect, vi, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Collection } from "./Collection";

vi.mock("next/navigation", () => {
  return {
    useRouter: vi.fn(),
    useSearchParams: vi.fn(),
  };
});

const imageMock = {
  title: "my image",
  transformationType: "removeBackground",
  publicId: "ru72uw",
  secureURL: "https://res.cloudinary.com/mycloud/image/upload/v1234/myimage",
  width: 500,
  height: 400,
};

describe("Collection", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render empty collection", () => {
    render(<Collection images={[]} page={1} />);
    expect(screen.getByText("Empty List")).toBeDefined();
  });

  it("should render search", () => {
    render(<Collection images={[]} page={1} hasSearch={true} />);
    expect(screen.getByRole("search")).toBeDefined();
  });

  it("should not render search", () => {
    render(<Collection images={[]} page={1} hasSearch={false} />);
    expect(screen.queryByRole("search")).toBeNull();
  });
});
