import logo from './logo.svg';
import iconWhite from './argo-icon-white.png';
import iconBlack from './argo-icon-black.png';
import iconBlue from './argo-icon-blue.png';
import iconGreen from './argo-icon-green.png';

import './App.css';

function App() {
  let envName = 'blue';
  let envColor = '#17306E';
  let envIcon = iconBlue;
  if (process.env.REACT_APP_ARGO_ENV === 'green') {
    envName = 'green';
    envColor = '#114A1F';
    envIcon = iconGreen;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Luna</h1>
        <div className='App-info'>
          <p>Continuos Deployments with ArgoCD</p>
          <p>
            You are viewing the <span color={envColor}>{envName.toLocaleUpperCase()} Environment!</span>
          </p>
          <p>FEATURE!!!</p>
        </div>
        <img src={envIcon} className="jump" alt="logo" width={200} height={200} />
      </header>
    </div>
  );
}

export default App;
