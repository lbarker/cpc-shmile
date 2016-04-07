
// Set up the socket
var socket = io.connect('/')

socket.on('connect', function() {
  console.log('connected evt');
});

// Everytime a new image is saved, notify and update the PhotoSwipe view.
socket.on('composited', function(url) {
  console.log('generated_thumb evt: '+url);

});
