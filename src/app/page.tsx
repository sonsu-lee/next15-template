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
            The template is ready for unstyled, accessible React primitives styled through StyleX.
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
                <Popover.Title {...stylex.props(styles.popupTitle)}>Portal check</Popover.Title>
                <Popover.Description {...stylex.props(styles.popupDescription)}>
                  This popup renders through a Base UI portal above the page content.
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
      <path d="M0 10H20L12.1 2.1C10.9 0.9 9.1 0.9 7.9 2.1L0 10Z" fill="currentColor" />
    </svg>
  );
}

const styles = stylex.create({
  page: {
    padding: {
      default: 32,
      "@media (max-width: 600px)": 20,
    },
    placeItems: "center",
    backgroundImage:
      "radial-gradient(circle at top left, rgb(225 239 255 / 74%), transparent 30rem), linear-gradient(135deg, #f8fafc 0%, #ffffff 48%, #f4f7f5 100%)",
    display: "grid",
    flexBasis: "0%",
    flexGrow: "1",
    flexShrink: "1",
    minHeight: "100svh",
  },
  panel: {
    padding: {
      default: 40,
      "@media (max-width: 600px)": 28,
    },
    borderColor: "#d9e1e8",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "rgb(255 255 255 / 90%)",
    boxShadow: "0 24px 64px rgb(15 23 42 / 10%)",
    columnGap: 28,
    display: "flex",
    flexDirection: "column",
    rowGap: 28,
    width: "min(100%, 560px)",
  },
  kicker: {
    color: "#12625c",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1,
    textTransform: "uppercase",
  },
  header: {
    columnGap: 12,
    display: "flex",
    flexDirection: "column",
    rowGap: 12,
  },
  title: {
    color: "#111827",
    fontSize: {
      default: 42,
      "@media (max-width: 600px)": 34,
    },
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.05,
    maxWidth: 460,
  },
  lead: {
    color: "#4b5563",
    fontSize: 17,
    lineHeight: 1.6,
    maxWidth: 460,
  },
  button: {
    borderColor: {
      default: "#111827",
      ":hover": "#263244",
    },
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: {
      default: "#111827",
      ":hover": "#263244",
    },
    color: "#ffffff",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: 15,
    fontWeight: 650,
    justifyContent: "center",
    outlineColor: {
      default: null,
      ":focus-visible": "#2563eb",
    },
    outlineOffset: {
      default: null,
      ":focus-visible": 3,
    },
    outlineStyle: {
      default: null,
      ":focus-visible": "solid",
    },
    outlineWidth: {
      default: null,
      ":focus-visible": 2,
    },
    transform: {
      default: null,
      ":active": "translateY(1px)",
    },
    transitionDuration: "160ms",
    transitionProperty: "background-color, border-color, outline-color, transform",
    transitionTimingFunction: "ease",
    height: 42,
    minWidth: 136,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    width: "fit-content",
  },
  popup: {
    padding: 18,
    borderColor: "#d9e1e8",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    boxShadow: "0 18px 48px rgb(15 23 42 / 18%)",
    color: "#111827",
    transformOrigin: "var(--transform-origin)",
    width: "min(280px, var(--available-width))",
  },
  arrow: {
    color: "#ffffff",
    display: "flex",
  },
  popupTitle: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: 6,
    marginTop: 0,
  },
  popupDescription: {
    margin: 0,
    color: "#4b5563",
    fontSize: 14,
    lineHeight: 1.5,
  },
});
