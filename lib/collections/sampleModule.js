import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseSchema from './schemas/base';

var SampleModuleSchema = new SimpleSchema([ BaseSchema, {
  profile: {
    type: Object
  },
  'profile.firstName': {
    type: String
  },
  'profile.lastName': {
    type: String
  },
  status: {
    type: String,
    regEx: /(open|closed)/
  },
  purpose: {
    type: String
  },
  date: {
    type: Date
  }
}] );

var SampleModules = new Mongo.Collection('sampleModule');

SampleModules.attachSchema(SampleModuleSchema);

//
// Export it for convenience
//
export default SampleModules;
