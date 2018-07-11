import { Mongo } from 'meteor/mongo';
export const GeoData = new Mongo.Collection('geodata');

if (Meteor.isServer) { 
    // This code only runs on the server
       

    Meteor.publish('GeoData', function publishGeodata() {
        return GeoData.find({});
    })
}





