import Profile from 'components/pages/profile/Profile';
import Search from 'components/pages/search/Search';
import Settings from 'components/pages/settings/Settings';
import YourLibrary from 'components/pages/your_library/YourLibrary';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="search" element={<Search />} />
        <Route path="collection/playlists" element={<YourLibrary />} />
      </Route>
    </Routes>
  );
}

export default App;
