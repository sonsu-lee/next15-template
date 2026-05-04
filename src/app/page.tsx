import { Button } from "@base-ui/react/button";
import { Popover } from "@base-ui/react/popover";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="template-title">
        <p className={styles.kicker}>Next.js + Base UI</p>
        <div className={styles.header}>
          <h1 id="template-title">Base UI is configured.</h1>
          <p>
            The template is ready for unstyled, accessible React primitives with
            CSS Modules.
          </p>
        </div>

        <Popover.Root>
          <Popover.Trigger render={<Button className={styles.button} />}>
            Open popover
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner sideOffset={8}>
              <Popover.Popup className={styles.popup}>
                <Popover.Arrow className={styles.arrow}>
                  <ArrowSvg />
                </Popover.Arrow>
                <Popover.Title className={styles.popupTitle}>
                  Portal check
                </Popover.Title>
                <Popover.Description className={styles.popupDescription}>
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
