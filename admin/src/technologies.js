import * as React from "react";

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
} from "react-admin";

export const TechnologyList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const TechnologyShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const TechnologyCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const TechnologyEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);