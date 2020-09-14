import Service from '@ember/service';
import { Subject } from 'rxjs';

export default class KeyboardHandlerService extends Service {

  constructor() {
    super(...arguments);

    this.keyVal = new Subject();
  }

  listenKeyDown() {
    window.addEventListener('keydown', (event) => {
      this.keyVal.next(event.key);
    });
  }

}
