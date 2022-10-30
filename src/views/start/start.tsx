import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { layoutState } from '../../state/layout';
import './start.less';
import styles from './start.module.less';

import { Button, Card } from 'antd';

const PANELS: string[] = ['top', 'bottom', 'left', 'right', 'main'];

const InstaCard = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
  >
    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
  </Card>
);

const PanelButton = ({ panel }: { panel: string }) => {
  const buttonRef = useRef<string[]>([]);
  const [panels, setPanels] = useRecoilState(layoutState);

  const togglePanel = (panel) => (event) => {
    event.preventDefault();
    if (panel === 'main') {
      // store previous panel state on ref - could use Recoil
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

  return <button className={`button-${panel}`} onClick={togglePanel(panel)} />;
};

const Controls = () => {
  return (
    <div className='panel-controls' style={{ display: 'flex', gap: '4px' }}>
      {PANELS.map((panel) => (
        <PanelButton key={`button-${panel}`} panel={panel} />
      ))}
    </div>
  );
};

export const Start = () => {
  const panels = useRecoilValue(layoutState);
  const containerStyles = panels.map((panel) => `hide-${panel}`).join(' ');

  return (
    <div className={`layout-wrapper ${containerStyles}`}>
      <Controls />
      <header className='header'>
        <p className={styles.heading}>Header</p>
      </header>

      <nav className='nav'>
        <p>Nav</p>
      </nav>

      <main className='main'>
        <p>Main</p>
        <Button>Button</Button>
        <InstaCard />
      </main>

      <aside className='aside'>
        <p>Aside</p>
      </aside>

      <footer className='footer'>
        <p>Footer</p>
      </footer>
    </div>
  );
};
