import { Fake } from 'meteor/anti:fake';

export default function ({ Collections, Logger }) {
  //
  // On startup, create sample data
  //
  if (Collections.SampleModules.find().count() < 5) {
    for (var i = 0; i < 5; i++) {
      var profile = Fake.user({ fields: [ 'name', 'surname' ] });
      Collections.SampleModules.insert({
        profile: {
          firstName: profile.name,
          lastName: profile.surname
        },
        status: Fake.fromArray([ 'open', 'closed' ]),
        purpose: Fake.fromArray([ 'Mortgage', 'Business Loan' ]),
        date: new Date()
      });
    }
    Logger.info('Create Sample Collection data');
  }
}
