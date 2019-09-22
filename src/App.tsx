import { createComponent, onMounted } from '@vue/composition-api';
import './App.css';

import Header from './layout/Header/Header';
import Body from './layout/Body/Body';

import Phaser from 'phaser';
import gameStart from './game/start';
import gamePlay from './game/play';

export default createComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      console.log('mount');

      const width = document.body.offsetWidth;
      const height = '100vh';

      const config = {
        type: Phaser.AUTO,
        // parent: 'app',
        width,
        height,
        physics: {
          default: 'arcade',
          arcade: {
            // gravity: {
            //   y: 700
            // },
            debug: true
          }
        },
        scene: [gamePlay, gameStart]
      };

      const game = new Phaser.Game(config);
    })

    // <Header></Header>
    //         <Body></Body>

    return () => < div id="app" />;
  }
});
