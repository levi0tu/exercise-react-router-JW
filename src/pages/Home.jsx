// TODO: Import necessary modules and data
import React from "react";
import { Link } from "react-router-dom";
import songsData from "../data/songs.json";

function Home() {
  // TODO: Implement logic to display the list of songs
  const songs = songsData.songs;

  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {/* TODO: Display the list of songs with links */}
        <ul>
          {songs.map((song) => (
            <li key={song.title}>
              <Link to={`/song/${encodeURIComponent(song.title.toLowerCase())}`}>
                {song.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
