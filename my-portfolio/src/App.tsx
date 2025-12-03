import { Theme } from '@radix-ui/themes';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <body>
        <Theme>
          <div className="center">
            <div className="title">
              <h1>Julianna Messineo</h1>
              <span className="subtitle">Product Minded Developer</span>
            </div>
          </div>
        </Theme>
      </body>
    </>
  );
}

export default App;
