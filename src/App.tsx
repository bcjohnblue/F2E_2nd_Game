import { createComponent } from '@vue/composition-api';
import './App.css';

import Header from './layout/Header/Header';
import Body from './layout/Body/Body';

export default createComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="app">
        <Header></Header>
        <Body></Body>
      </div>
    );
  }
});
