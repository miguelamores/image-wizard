import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import TransformationForm from "./TransformationForm";

vi.mock("next/navigation", () => {
  return {
    useRouter: vi.fn(),
    useSearchParams: vi.fn(),
  };
});

describe("TransformationForm", () => {
  // let addImageMock: any;

  beforeEach(() => {
    cleanup();
    vi.stubEnv("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME", "ds6alf9e8");

    // addImageMock = vi.fn().mockReturnValue(null);
    // vi.doMock("../../lib/actions/image.actions", async () => {
    //   const original = await vi.importActual("../../lib/actions/image.actions");
    //   return {
    //     ...(original as object),
    //     addImage: addImageMock,
    //     updateImage: vi.fn(),
    //   };
    // });
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

  it("should submit form", async () => {
    const addImageMock = vi.fn().mockResolvedValue(null);
    vi.doMock("../../lib/actions/image.actions", async importActual => {
      const original = await importActual();
      return {
        ...(original as object),
        addImage: addImageMock,
        updateImage: vi.fn(),
      };
    });

    render(
      <TransformationForm
        action="Add"
        userId="asd123"
        type={"restore"}
        creditBalance={10}
        data={{
          title: "image restore",
          aspectRatio: "1:1",
          color: "red",
          prompt: "prompt",
          publicId: "publicId",
        }}
      />
    );

    const form = screen.getByTestId("transformation-form") as HTMLFormElement;
    const sumitBtn = screen.getByRole("submit");
    const title = screen.getByTestId("title") as HTMLInputElement;
    await fireEvent.change(title, { target: { value: "image restore" } });
    await fireEvent.click(sumitBtn);

    expect(addImageMock).toHaveBeenCalled();
  });
});
