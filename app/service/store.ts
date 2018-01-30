import { Service } from 'egg';

export default class StoreService extends Service {
  get initialStore() {
    return [
      { title: 'my first task', finished: false, id: '0' },
      { title: 'second task', finished: false, id: '1' },
      { title: 'third task', finished: false, id: '2' },
    ];
  }
}
