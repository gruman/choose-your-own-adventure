// Importing constant data for different genres
const rooms = require('../constants/rooms');
const candice = require('../constants/candice');
const lawyer = require('../constants/lawyer');

// Controller function to get room data based on user choices
exports.getRoom = (req, res, next) => {
  // Extracting data from the request body
  const id = req.body.num;
  const roomid = req.body.roomid;

  // Initializing an empty array for room data
  let room = [];

  // Switching between different genres based on roomid
  switch (roomid) {
    case 0:
      room = rooms; // Adventure genre
      break;
    case 1:
      room = candice; // Comedy genre
      break;
    case 2:
      room = lawyer; // Lawyer genre
      break;
    default:
      room = lawyer; // Default to Lawyer genre
  }

  // Sending the specific room data based on id as a response
  res.send(room[id]);
};
