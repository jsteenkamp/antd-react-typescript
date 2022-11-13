import { Button } from 'antd';
import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { layoutState } from '../../state/layout';
import styles from './start.module.css';

const PANELS: string[] = ['top', 'bottom', 'left', 'right', 'main'];

const PanelButton = ({ panel }: { panel: string }) => {
  const buttonRef = useRef<string[]>([]);
  const [panels, setPanels] = useRecoilState(layoutState);

  const togglePanel = (panel) => (event) => {
    event.preventDefault();
    // store previous panel state on ref - could use Recoil
    if (panel === 'main') {
      if (panels.includes('main')) {
        setPanels(buttonRef.current);
        buttonRef.current = [];
      } else {
        buttonRef.current = panels;
        setPanels(PANELS);
      }
    } else {
      setPanels((hide) => (hide.includes(panel) ? hide.filter((value) => value !== panel) : [...hide, panel]));
    }
  };

  return (
    <Button size="small" className={styles[`button-${panel}`]} onClick={togglePanel(panel)}>
      {panel}
    </Button>
  );
};

const Controls = () => {
  return (
    <div className={styles['panel-controls']} style={{ display: 'flex', gap: '4px' }}>
      {PANELS.map((panel) => (
        <PanelButton key={`button-${panel}`} panel={panel} />
      ))}
    </div>
  );
};

export const Start = () => {
  const panels = useRecoilValue(layoutState);
  const containerStyles = panels.map((panel) => styles[`hide-${panel}`]).join(' ');

  return (
    <div className={`${styles['layout-wrapper']} ${containerStyles}`}>
      <Controls />
      <header className={styles['top']}>
        <p className={styles.heading}>top</p>
      </header>

      <nav className={styles['left']}>
        <p>left</p>
      </nav>

      <main className={styles['main']}>
        <p>main</p>
      </main>

      <aside className={styles['right']}>
        <p>right</p>
      </aside>

      <footer className={styles['bottom']}>
        <p>bottom</p>
      </footer>
    </div>
  );
};

