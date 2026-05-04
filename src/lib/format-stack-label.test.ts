import { describe, expect, test } from "vitest";

import { formatStackLabel } from "./format-stack-label";

describe("formatStackLabel", () => {
  test("joins stack labels with plus separators", () => {
    expect(formatStackLabel(["Next.js", "Base UI", "StyleX"])).toBe("Next.js + Base UI + StyleX");
  });

  test("ignores blank labels", () => {
    expect(formatStackLabel(["Next.js", " ", "StyleX"])).toBe("Next.js + StyleX");
  });
});
