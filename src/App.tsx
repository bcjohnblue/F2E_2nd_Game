import './App.css';
import { createComponent } from '@vue/composition-api';
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
