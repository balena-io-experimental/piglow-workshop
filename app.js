var express = require('express');
var piGlow = require('piglow');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var glowLeg = [ 'leg_2', 'leg_1', 'leg_0' ];
var i = 0;


piGlow(function (error, pi) {
  if (error) {
    return console.log('Could not initialize PiGlow board');
  }

  setInterval(function () {
    i++;
    pi.all = 0;
    var leg = glowLeg[i % 3];
    pi[leg] = 100;
  }, 2000);

  // PiGlow LED light-up server
  app.use('/', express.static(__dirname + '/public'));

  server.listen(80, function () {
    console.log('Blink backend is listening on port 80');
  });

  io.on('connection', function (socket) {
    socket.on('lightup', function() {
      console.log('Light them up!');
      // Uncomment the next line to enable the 'Light up' button
      //pi.all = 200;
    });
  });
});

