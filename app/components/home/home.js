import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeComponent extends Component {
  @service('database-service') database;
  @service('keyboard-handler') keyboard;

  constructor() {
    super(...arguments);

    this.keyboard.listenKeyDown();
    this.ref.on('value', (data) => {
      this.x = data.val().x;
      this.y = data.val().y;
    });

    this.keyboard.keyVal.subscribe(pressedKey => {
        switch (pressedKey) {
          case 'ArrowDown':
            this.y--;
            this.database.updateVal(this.ref, {x: this.x, y: this.y});
            break;
          case 'ArrowUp':
            this.y++;
            this.database.updateVal(this.ref, {x: this.x, y: this.y});
            break;
          case 'ArrowLeft':
            this.x--;
            this.database.updateVal(this.ref, {x: this.x, y: this.y});
            break;
          case 'ArrowRight':
            this.x++;
            this.database.updateVal(this.ref, {x: this.x, y: this.y});
            break;
        }

        console.log(pressedKey);
        console.log('X:',this.x, 'Y: ', this.y);
    });

  }

  ref = this.database.getRef('number');

  @action count(val) {
    this.x = this.x + val;
    this.database.updateVal(this.ref, {x: this.x, y: this.y});
  }

}

