import { Route, Switch } from 'wouter';
import { NotFound } from './not-found';
import { Start } from './start';

export const Views = (): JSX.Element => (
  <Switch>
    <Route path="/" component={Start} />
    <Route component={NotFound} />
  </Switch>
);
