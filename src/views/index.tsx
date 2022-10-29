import { Route, Switch } from 'wouter';
import { Start } from './start';
import { NotFound } from './not-found';

export const Views = (): JSX.Element => (
  <Switch>
    <Route path="/" component={Start} />
    <Route component={NotFound} />
  </Switch>
);
