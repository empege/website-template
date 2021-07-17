import TestButton from './components/atoms/testButton/testButton';
import Navigation from './components/molecules/Navigation/Navigation'
// import 'bootstrap/dist/css/bootstrap.css';

import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'

const navData = {
  items: [
    {
      id: '1',
      text: 'item-1',
      src: 'item-1'
    },
    {
      id: '2',
      text: 'item-2',
      src: 'item-2'
    },
    {
      id: '3',
      text: 'item-3',
      src: 'item-3'
    },
    {
      id: '4',
      text: 'item-4',
      src: 'item-4'
    }
  ],
  topNav: {
    isVisible: true,
    text: 'Top Navigation Text'
  },
  navLogo: true,
  navSocial: {
    isVisible: true,
    items: [
      {
        id: '1',
        text: '1',
        icon: img1,
        src: '#'
      },
      {
        id: '2',
        text: '2',
        icon: img2,
        src: '#'
      },
      {
        id: '3',
        text: '3',
        icon: img3,
        src: '#'
      }
    ]
  },
}

function App() {
  return (
    <div className="App">

      <Navigation navData={navData} />

      {/* <div className="container-fluid h-wrapper">
        <div className='row'>
          <div className='col col-8'>
            <TestButton />
          </div>
          <div className='col col-4'>
            <TestButton />
          </div>
        </div>
      </div> */}

    </div >
  );
}

export default App;
