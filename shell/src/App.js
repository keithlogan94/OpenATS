/*

Open ATS - Applicant Tracking Software

Copyright (C) 2022  Keith Becker
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see https://www.gnu.org/licenses/agpl-3.0.

*/


import logo from './logo.svg';
import './App.css';
import './scss/main.scss';
import './css/tailwind-compiled.css';

import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Dashboard />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
