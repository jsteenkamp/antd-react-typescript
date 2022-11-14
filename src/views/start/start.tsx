import { layoutState } from '@state/layout';
import { useRecoilValue } from 'recoil';
import { PanelControls } from './panel-controls';
import styles from './start.module.css';

export const Start = () => {
  const panels = useRecoilValue(layoutState);
  const containerStyles = `${styles['layout-wrapper']} ${panels
    .map((panel) => styles[`hide-${panel}`])
    .join(' ')}`.trim();

  return (
    <div className={containerStyles}>
      <PanelControls />
      <header className={styles['panel-top']}>
        <p className={styles.heading}>top</p>
      </header>

      <nav className={styles['panel-left']}>
        <p>left</p>
      </nav>

      <main className={styles['panel-main']}>
        <p>main</p>
      </main>

      <aside className={styles['panel-right']}>
        <p>right</p>
      </aside>

      <footer className={styles['panel-bottom']}>
        <p>bottom</p>
      </footer>
    </div>
  );
};
