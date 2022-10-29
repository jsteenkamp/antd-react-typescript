import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { layoutState } from '../../state/layout';
import './start.less';

const PANELS = ['top', 'bottom', 'left', 'right', 'main'];

const Button = ({ panel }) => {
  const buttonRef = useRef([]);
  const [panels, setPanels] = useRecoilState(layoutState);

  const togglePanel = (panel) => (event) => {
    event.preventDefault();
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

  return <button className={`button-${panel}`} onClick={togglePanel(panel)} />;
};

const Controls = () => {
  return (
    <div className="panel-controls" style={{ display: 'flex', gap: '4px' }}>
      {PANELS.map((panel) => (
        <Button key={`button-${panel}`} panel={panel} />
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
      <header className="header">
        <p>Header</p>
      </header>

      <nav className="nav">
        <p>Nav</p>
      </nav>

      <main className="main">
        <p>Main</p>
      </main>

      <aside className="aside">
        <p>Aside</p>
      </aside>

      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};
