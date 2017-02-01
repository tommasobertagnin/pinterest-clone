import { Mongo } from 'meteor/mongo';

export const Pins = new Mongo.Collection('pins');

if (Meteor.isServer) {
  Meteor.publish('pins', function pinsPublication () {
    return Pins.find({}, { limit: 20, sort: {createdAt: -1}});
  });
}

Pins.allow({
  insert: function() { return true }
});

Meteor.methods({
  'createPin': function(doc){
    check(doc.src, String);
    check(doc.description, String);

    console.log(Meteor.user());

    if(Meteor.user().services){
      doc.userId = Meteor.user().services.twitter.id;
      doc.avatar = Meteor.user().services.twitter.profile_image_url;
    }
    doc.createdAt = Date.now();

    check(doc.userId, String);
    check(doc.avatar, String);

    Pins.insert(doc);
  }
});