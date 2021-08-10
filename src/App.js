import { createStore } from 'redux';
import TestButton from './components/atoms/testButton/testButton';
import Navigation from './components/molecules/Navigation/Navigation';
import navData from './components/molecules/Navigation/data/data';
import reducers from './reducers';
// import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

// Initial store
const initialStore = {
  navData,
}

// Store - stores data, think of state - storing all reducers into one here
const store = createStore(reducers, initialStore);

function App() {
  return (
    <Provider store={store}>

      <Navigation />

      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            1<TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>
      <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div>

    </Provider >
  );
}

export default App;
