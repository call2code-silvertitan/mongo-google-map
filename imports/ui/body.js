import { Template } from 'meteor/templating';
import {GeoData} from '../api/database.js';
 
import './body.html';
 
Template.body.onCreated(function bodyonCreated(){
    this.subscribe('geodata');
})

Template.body.helpers({
    geoData() {
        return GeoData.find({});
    }
});



Template.addpointform.events({
    "submit form": function(event, template) {
        event.preventDefault();
        
        GeoData.insert({
            location: {
                type: "Point",
                coordinates: [
                    Number(template.find(".latitude").value), 
                    Number(template.find(".longitude").value)
                ]
            },
            title: template.find(".name").value,
        });
    }
});