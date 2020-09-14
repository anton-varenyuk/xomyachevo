import RealtimeDatabaseAdapter from 'emberfire/adapters/firestore';
import { inject as service } from '@ember/service';

export default RealtimeDatabaseAdapter.extend({
    firebaseApp: service('firebase')
});
