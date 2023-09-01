import { Paths } from './Routes/Routes';
import { UrlProvider } from './Contexts/URLContext/URLContext';

function App() {
  return (
    <div
    className="font-text font-medium text-[18px] min-h-screen text-center overflow-clip scroll-smooth leading-loose">
      <UrlProvider>
        <Paths />
      </UrlProvider>
    </div>
  );
}

export default App;
