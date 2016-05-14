import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const appRootElId = 'app-root';
const postsDataId = 'postsData'


function renderComponent(component, rootEl){
  if(rootEl){
    ReactDOM.render(component, rootEl);
  } else{
    console.warn(`Could not render component ${component} to element ${rootEl}`);
  }
}

window.onload = () => {
  const dataEl = document.getElementById('postsData');
  const appData = dataEl ? JSON.parse(dataEl.innerHTML) : [];
  renderComponent(<App posts={appData}/>, document.getElementById(appRootElId));
}