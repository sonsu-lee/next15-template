import { Button } from "@base-ui/react/button";
import { Popover } from "@base-ui/react/popover";
import * as stylex from "@stylexjs/stylex";

export default function Home() {
  return (
    <main {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.panel)} aria-labelledby="template-title">
        <p {...stylex.props(styles.kicker)}>Next.js + Base UI + StyleX</p>
        <div {...stylex.props(styles.header)}>
          <h1 id="template-title" {...stylex.props(styles.title)}>
            Base UI is configured.
          </h1>
          <p {...stylex.props(styles.lead)}>
            The template is ready for unstyled, accessible React primitives
            styled through StyleX.
          </p>
        </div>

        <Popover.Root>
          <Popover.Trigger render={<Button {...stylex.props(styles.button)} />}>
            Open popover
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner sideOffset={8}>
              <Popover.Popup {...stylex.props(styles.popup)}>
                <Popover.Arrow {...stylex.props(styles.arrow)}>
                  <ArrowSvg />
                </Popover.Arrow>
                <Popover.Title {...stylex.props(styles.popupTitle)}>
                  Portal check
                </Popover.Title>
                <Popover.Description
                  {...stylex.props(styles.popupDescription)}
                >
                  This popup renders through a Base UI portal above the page
                  content.
                </Popover.Description>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </section>
    </main>
  );
}

function ArrowSvg() {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
      <path
        d="M0 10H20L12.1 2.1C10.9 0.9 9.1 0.9 7.9 2.1L0 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

const styles = stylex.create({
  page: {
    flex: 1,
    minHeight: "100svh",
    display: "grid",
    placeItems: "center",
    padding: 32,
    backgroundImage:
      "radial-gradient(circle at top left, rgb(225 239 255 / 74%), transparent 30rem), linear-gradient(135deg, #f8fafc 0%, #ffffff 48%, #f4f7f5 100%)",
    "@media (max-width: 600px)": {
      padding: 20,
    },
  },
  panel: {
    width: "min(100%, 560px)",
    display: "flex",
    flexDirection: "column",
    gap: 28,
    padding: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d9e1e8",
    borderRadius: 8,
    backgroundColor: "rgb(255 255 255 / 90%)",
    boxShadow: "0 24px 64px rgb(15 23 42 / 10%)",
    "@media (max-width: 600px)": {
      padding: 28,
    },
  },
  kicker: {
    color: "#12625c",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1,
    textTransform: "uppercase",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    maxWidth: 460,
    color: "#111827",
    fontSize: 42,
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: 0,
    "@media (max-width: 600px)": {
      fontSize: 34,
    },
  },
  lead: {
    maxWidth: 460,
    color: "#4b5563",
    fontSize: 17,
    lineHeight: 1.6,
  },
  button: {
    width: "fit-content",
    minWidth: 136,
    height: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#111827",
    borderRadius: 6,
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 0,
    paddingLeft: 16,
    backgroundColor: "#111827",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 650,
    cursor: "pointer",
    transitionProperty: "background-color, border-color, transform",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease",
    ":hover": {
      backgroundColor: "#263244",
      borderColor: "#263244",
    },
    ":active": {
      transform: "translateY(1px)",
    },
    ":focus-visible": {
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: "#2563eb",
      outlineOffset: 3,
    },
  },
  popup: {
    width: "min(280px, var(--available-width))",
    padding: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d9e1e8",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    color: "#111827",
    boxShadow: "0 18px 48px rgb(15 23 42 / 18%)",
    transformOrigin: "var(--transform-origin)",
  },
  arrow: {
    display: "flex",
    color: "#ffffff",
  },
  popupTitle: {
    marginTop: 0,
    marginBottom: 6,
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.4,
  },
  popupDescription: {
    margin: 0,
    color: "#4b5563",
    fontSize: 14,
    lineHeight: 1.5,
  },
});
