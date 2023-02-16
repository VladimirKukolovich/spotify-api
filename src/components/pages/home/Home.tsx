import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { axiosApiInstance } from 'components/main/constant';
import { useNavigate } from 'react-router-dom';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Home() {
  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [searchTrackKey, setSearchTrackKey] = useState('');
  const navigate = useNavigate();
  const [uris, setUris] = useState('');
  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem('token');
    if (!token && hash) {
      token = hash.slice(14).split('&')[0];
      setToken(token);
      localStorage.setItem('token', token);
    }
    if (token) setToken(token);
  }, []);

  const ClIENT_ID = 'eceaf8591c974d329edc421af94be74e';
  // const ClIENT_ID = '29ff191fd0d44abba74543e4c8460984';
  // const ClIENT_ID = 'f8d044236c4543eb89893a8c401932d3';
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    navigate('');
  };
  console.log(token);
  const searchArtists = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axiosApiInstance.get('https://api.spotify.com/v1/search', {
      params: {
        q: searchKey,
        type: 'artist',
      },
    });
    console.log(data);
  };

  const searchTracks = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axiosApiInstance.get('https://api.spotify.com/v1/search', {
      params: {
        q: searchTrackKey,
        type: 'track',
        include_external: 'audio',
        // scope: 'trapi.alerts.news.crud .... trapi.streaming.pricing.read',
        limit: 1,
      },
    });
    console.log(data);
    setUris(data.tracks.items[0].uri);
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${ClIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        {token ? (
          <form onSubmit={(e) => searchArtists(e)}>
            <input type={'text'} onChange={(e) => setSearchKey(e.target.value)}></input>
            <button type="submit">Search Artists</button>
          </form>
        ) : (
          <h2>Pleas login</h2>
        )}
        {token ? (
          <form onSubmit={(e) => searchTracks(e)}>
            <input type={'text'} onChange={(e) => setSearchTrackKey(e.target.value)}></input>
            <button type="submit">Search Track</button>
          </form>
        ) : null}
        <SpotifyPlayer token={token} uris={uris} />
      </div>
    </div>
  );
}
