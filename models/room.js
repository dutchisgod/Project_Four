var mongoose = require('mongoose'),
    // ttl      = require('mongoose-ttl'),
    Schema   = mongoose.Schema;

var roomSchema = Schema({
    organizer: String,
    hotel_name: { type: String, required: true },
    street_address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    room_type: { type: String, required: true },
    max_people: { type: String, required: true },
    content: String,
    price: { type: Number, required: true },
    walker: String,
    createdAt: { type: Date, default: Date.now, index: { expireAfterSeconds: 43200 } }
});

// roomSchema.plugin(ttl, { ttl: 5000 });
// roomSchema.index({ createdAt: 1 }, { expireAfterSeconds: 43200 });
var Room = mongoose.model("Room", roomSchema);

mongoose.model('Room').ensureIndexes(function(err) {
    console.log('ensure index', err)
})

module.exports = Room;