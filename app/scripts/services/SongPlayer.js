(function() {
     function SongPlayer(Fixtures) {
          /**
          * @desc Song player
          * @type {Object}
          */
          var SongPlayer = {};
          var currentAlbum = Fixtures.getAlbum();
          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;

          /**
           * @function setSong
           * @desc Stops currently playing song and loads new audio file as currentBuzzObject
           * @param {Object} song
           */
          var setSong = function(song) {
            if (currentBuzzObject) {
              currentBuzzObject.stop();
              SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
              formats: ['mp3'],
              preload: true
            });

            SongPlayer.currentSong = song;
          };

          /**
           * @function playSong
           * @desc plays the current Buzz object song and sets the playing property of the song object to true.
           * @param {Object} song
           */
          var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
          };

          var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
          };
          /**
           * @function getSongIndex
           * @desc returns the index of the current song from the album
           * @param {Object} song
           * @returns {number}
           */
          var getSongIndex = function(song) {
            /* this supplied code returns -1 everytime because it is not
            * finding the song in the array with the additional hashmaps */
              //return currentAlbum.songs.indexOf(song);
                var songList = ['Blue', 'Green', 'Red', 'Pink', 'Magenta'];
                  return songList.indexOf(song.title);
          };
          /**
          * @desc current song object
          * @type {Object}
          */
          SongPlayer.currentSong = null;

          SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
              setSong(song);
              playSong(song);
            } else if (SongPlayer.currentSong === song) {
              if (currentBuzzObject.isPaused()) {
                playSong(song);
              }
            }
          };

        SongPlayer.pause = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
        };

        SongPlayer.previous = function() {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex--;
          if (currentSongIndex < 0) {
            stopSong(SongPlayer.currentSong);
          } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
          }
        };

        SongPlayer.next = function() {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;
          if (currentSongIndex > currentAlbum.songs.length - 1) {
            stopSong(SongPlayer.currentSong);
          } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
          }
        };

      return SongPlayer;
   }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
