export function formatStackLabel(parts: readonly string[]) {
  return parts
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .join(" + ");
}
