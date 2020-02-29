{
  $('button#play-pause').on('click', function(){
    player.playPause();
    $(this).attr('playstate', player.playState);
  });


//Click handler for next track button
$('button#next').on('click', function(){
  if(player.playState !== 'playing') {return; }

  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;
  if (nextSongIndex >= album.songs.length) { return; }

  const nextSong = album.songs[nextSongIndex];
  player.playPause(nextSong);
});


//Click handler for previous track button
$('button#previous').on('click', function(){
  if(player.playState !== 'playing') {return; }

  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const previousSongIndex = currentSongIndex - 1;
  if (previousSongIndex < 0) {return; }

  const previousSong = album.songs[previousSongIndex];
  player.playPause(previousSong);
});

}
