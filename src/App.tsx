import { createComponent } from '@vue/composition-api';
import './App.css';

import Header from './layout/Header/Header';
import Body from './layout/Body/Body';

import Phaser from 'phaser';
import gameStart from './game/start';

export default createComponent({
  name: 'App',
  setup() {
    const width = document.body.offsetWidth;
    const height = '100vh';

    const config = {
      type: Phaser.AUTO,
      // parent: 'app',
      width,
      height,
      scene: [gameStart]
    };

    const game = new Phaser.Game(config);

    return () => <div id="app">{/* <Header></Header>
        <Body></Body> */}</div>;
  }
});
