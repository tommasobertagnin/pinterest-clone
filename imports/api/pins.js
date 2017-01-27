import { Mongo } from 'meteor/mongo';

export const Pins = new Mongo.Collection('pins');

if (Meteor.isServer) {
  Meteor.publish('pins', function pinsPublication () {
    return Pins.find({}, { limit: 20 });
  })
}

// TODO: add methods to create delete pins
Meteor.methods();