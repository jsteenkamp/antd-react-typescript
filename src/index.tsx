import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Views } from './views';
import { ErrorFallback, Loading } from './components/common';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import './css/index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <Views />
        </Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  </StrictMode>,
);
