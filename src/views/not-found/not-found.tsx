import styles from './not-found.module.less';

export const NotFound = () => (
  <div className={styles['container']}>
    <div className={styles['content']}>404</div>
    <div>This page could not be found</div>
  </div>
);
