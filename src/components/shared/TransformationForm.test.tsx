import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import TransformationForm from "./TransformationForm";

describe("TransformationForm", () => {
  vi.mock("next/navigation", () => {
    return {
      useRouter: vi.fn(),
      useSearchParams: vi.fn(),
    };
  });

  beforeEach(() => {
    cleanup();
    vi.stubEnv("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME", "ds6alf9e8");
  });

  it("should render form", () => {
    render(
      <TransformationForm
        action="Add"
        userId="asd123"
        type={"restore"}
        creditBalance={10}
      />
    );
    expect(screen.getByTestId("transformation-form")).toBeDefined();
  });

  it("should fill textinput", async () => {
    render(
      <TransformationForm
        action="Add"
        userId="asd123"
        type={"restore"}
        creditBalance={10}
      />
    );

    const title = screen.getByTestId("title") as HTMLInputElement;
    await fireEvent.change(title, { target: { value: "image restore" } });

    expect(title.value).toMatch("image restore");
  });

  it.todo("should submit form", async () => {
    render(
      <TransformationForm
        action="Add"
        userId="asd123"
        type={"restore"}
        creditBalance={10}
      />
    );

    const form = screen.getByTestId("transformation-form") as HTMLFormElement;
    const onSubmit = vi.fn();
    const onSubmitSpy = vi
      .spyOn({ onSubmit }, "onSubmit")
      .mockImplementation(onSubmit);
    const sumitBtn = screen.getByRole("submit");
    const title = screen.getByTestId("title") as HTMLInputElement;
    await fireEvent.change(title, { target: { value: "image restore" } });
    await fireEvent.click(sumitBtn);

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });
});
