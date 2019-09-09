import React from 'react';
import { Admin, Resource } from 'react-admin';

import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
  } from 'react-admin-firebase';
import { WorkList, WorkShow, WorkCreate, WorkEdit } from "./works";
import { TechnologyList, TechnologyShow, TechnologyCreate, TechnologyEdit } from "./technologies";
import { Dashboard } from './dashboard';

import { firebaseConfig } from './config/firebase';
const options = {};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
            <Resource name="works" list={WorkList} show={WorkShow} create={WorkCreate} edit={WorkEdit} />
            <Resource name="technologies" list={TechnologyList} show={TechnologyShow} create={TechnologyCreate} edit={TechnologyEdit} />
        </Admin>
    );
}

export default App;
