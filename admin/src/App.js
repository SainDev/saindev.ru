import React from 'react';
import { Admin, Resource } from 'react-admin';

import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
  } from 'react-admin-firebase';
import { WorkList, WorkShow, WorkCreate, WorkEdit } from "./resources/works";
import { CmsList, CmsShow, CmsCreate, CmsEdit } from "./resources/cms";
import { Dashboard } from './dashboard';

import { firebaseConfig } from './config/firebase';
const options = {};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
            <Resource name="works" options={{ label: 'Проекты' }} list={WorkList} show={WorkShow} create={WorkCreate} edit={WorkEdit} />
            <Resource name="cms" options={{ label: 'CMS' }} list={CmsList} show={CmsShow} create={CmsCreate} edit={CmsEdit} />
        </Admin>
    );
}

export default App;
