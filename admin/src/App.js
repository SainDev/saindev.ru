import * as React from 'react';
import { Admin, Resource } from 'react-admin';

import { WorkList, WorkShow, WorkCreate, WorkEdit } from "./works";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';

import { firebaseConfig } from './config/firebase';
const options = {
    //logging: true,
    //rootRef: 'rootrefcollection/works',
    //app: firebaseAppInstance,
    //watch: ['works']
    // dontwatch: ['comments']
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
            <Resource name="works" list={WorkList} show={WorkShow} create={WorkCreate} edit={WorkEdit} />
        </Admin>
    );
}

export default App;
