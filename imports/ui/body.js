import { Template } from 'meteor/templating';
import {GeoData} from '../api/database.js';
 
import './body.html';
 
Template.body.helpers({
    geoData() {
        return GeoData.find({});
    }
});

Template.addpointform.events({
    "submit form": function(event, template) {
        event.preventDefault();
        
        GeoData.insert({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    Number(template.find(".latitude").value), 
                    Number(template.find(".longitude").value)
                ]
            },
            "properties": {
                "name": template.find(".name").value
            }
        });
    }
});