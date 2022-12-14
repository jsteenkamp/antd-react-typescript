import { ErrorFallback, Loading } from '@components/common';
// import 'antd/dist/reset.css';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import './css/base.css';
import { Views } from './views';

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
