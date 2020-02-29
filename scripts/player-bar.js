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

//Changing a song's position based on time slider input
$('#time-control input').on('input', function(event){
  player.skipTo(event.target.value);
});



//Setting track slider to reflect the time position of the song
setInterval( ()=>{
    if (player.playState !== 'playing') {return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(currentTime);
    $('#time-control .total-time').text(duration);
    $('#time-control input').val(percent);
  }, 1000 );

}
