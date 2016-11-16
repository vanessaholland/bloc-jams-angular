(function() {
     function AlbumCtrl() {
       this.songs = [];
       this.albumData = angular.copy(albumPicasso);
       for (var i=0; i < albumPicasso.songs.length; i++) {
         this.songs.push(angular.copy(albumPicasso.songs[i]));
       }
      }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
