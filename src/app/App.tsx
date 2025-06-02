import { Route, Routes } from 'react-router-dom';
import CountryDetails from 'pages/CountryDetails/CountryDetails';
import Home from 'pages/Home/Home';
import { LINKS } from 'shared/links/links';

function App() {
  return (
    <>
      <Routes>
        <Route path={LINKS.home} element={<Home />} />
        <Route path={LINKS.country} element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
