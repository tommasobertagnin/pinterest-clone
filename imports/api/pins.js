import { Mongo } from 'meteor/mongo';

export const Pins = new Mongo.Collection('pins');

if (Meteor.isServer) {
  Meteor.publish('pins', function pinsPublication () {
    return Pins.find({}, { limit: 20 });
  })
}

Meteor.methods({
  'createPin': function(doc){
    check(doc.userId, String);
    check(doc.src, String);
    check(doc.description, String);
    if(Meteor.userId() && (doc.userId === Meteor.userId())){
      Pins.insert(doc);
    }
  }
});