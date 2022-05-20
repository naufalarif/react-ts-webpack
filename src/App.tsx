import './styles.css';
import Image from './react.png';
import { FunctionComponent } from 'react';
import Counter from './Counter';

const App: FunctionComponent = () => (
  <div>
    <h1>
      Edited Hello App - {process.env.NODE_ENV} | {process.env.name}
    </h1>
    <img src={Image} alt="react-logo" width={300} />
    <Counter />
  </div>
);

export default App;
