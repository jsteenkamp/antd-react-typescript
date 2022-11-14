import { PanelButton } from './panel-button';
import styles from './start.module.css';

const PANELS: string[] = ['top', 'bottom', 'left', 'right', 'main'];

export const PanelControls = () => {
  return (
    <div className={styles['panel-controls']}>
      {PANELS.map((panel) => (
        <PanelButton key={`button-${panel}`} panel={panel} panels={PANELS} />
      ))}
    </div>
  );
};
