import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import './index.css';

var div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <>
      <Popup
        trigger={
          <button className='button' id='pixibotest'>
            {' '}
            Pixibo{' '}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className='modal'>
            <button className='close' onClick={close}>
              &times;
            </button>
            <div className='header'> Pixibo </div>
            <div className='content'>
              <h1>Hello World!!</h1>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
