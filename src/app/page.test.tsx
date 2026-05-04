import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "./page";

test("Home page renders the template heading", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Base UI is configured." }),
  ).toBeInTheDocument();
  expect(screen.getByText("Next.js + Base UI + StyleX")).toBeInTheDocument();
});
