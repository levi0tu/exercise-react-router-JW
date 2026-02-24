// TODO: Import necessary modules and data
import React from "react";
import { useParams } from "react-router-dom";
import songsData from '../data/songs.json';

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  const { songTitle } = useParams();

  const song = songsData.songs.find(
    (s) => s.title.toLowerCase() === decodeURIComponent(songTitle).toLowerCase()
  );
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  if (!song) {
    return <h2>Song not found!</h2>;
  }

  return (
    <>
      <div>
        <h2>{song.title}</h2>
        {/* TODO: Display song details or a "Song not found!" message */}
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Year: {song.year}</p>
        <p>Rank: {song.rank}</p>
      </div>
    </>
  );
}

export default SongInfo;
