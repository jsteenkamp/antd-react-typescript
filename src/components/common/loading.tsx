export const Loading = ({ message = 'Loading...' }: { message?: string }) => (
  <div style={{ margin: '1rem', fontStyle: 'italic', opacity: '0.75' }}>{message}</div>
);
