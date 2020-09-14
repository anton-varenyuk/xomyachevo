import Service from '@ember/service';
import firebase from "firebase";

export default class DatabaseService extends Service {

  getRef(path) {
    return firebase.database().ref().child(path)
  }

  updateVal(ref, val){
    ref.update({...val});
  }
}
