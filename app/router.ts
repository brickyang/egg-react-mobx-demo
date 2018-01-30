import { Application, Router } from 'egg';

export default (app: Application) => {
  const { router }: { router: Router } = app;

  router.get('/', 'home.index');
};
