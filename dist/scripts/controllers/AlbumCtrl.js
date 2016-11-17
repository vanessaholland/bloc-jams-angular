(function() {
     function AlbumCtrl(Fixtures) {
       this.songs = [];
       this.albumData = Fixtures.getAlbum();
       for (var i=0; i < this.albumData.songs.length; i++) {
         this.songs.push(angular.copy(this.albumData.songs[i]));
       }
      }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
