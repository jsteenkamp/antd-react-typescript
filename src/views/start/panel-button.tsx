import { layoutState } from '@state/layout';
import { Button } from 'antd';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import styles from './start.module.css';

export const PanelButton = ({ panel, panels: PANELS }: { panel: string, panels: string[] }) => {
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
    <Button size='small' className={styles[`button-${panel}`]} onClick={togglePanel(panel)}>
      {panel}
    </Button>
  );
};