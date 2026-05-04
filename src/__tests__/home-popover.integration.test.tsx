import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import Home from "@/app/page";

test("Home page opens the Base UI popover", async () => {
  const user = userEvent.setup();

  render(<Home />);

  await user.click(screen.getByRole("button", { name: "Open popover" }));

  expect(await screen.findByText("Portal check")).toBeInTheDocument();
  expect(
    screen.getByText("This popup renders through a Base UI portal above the page content."),
  ).toBeInTheDocument();
});
