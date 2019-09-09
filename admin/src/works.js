import * as React from "react";

import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    Filter,
    DisabledInput,
    SimpleShowLayout,
    SimpleForm,
    DateField,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    UrlField,
    RichTextField,
    ReferenceArrayInput,
    SelectArrayInput,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    ImageInput,
    ImageField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { DateInput } from "react-admin-date-inputs";

const WorkFilter = props => (
    <Filter {...props}>
        <TextInput label="Поиск" source="title" alwaysOn />
    </Filter>
);

export const WorkList = props => (
    <List {...props} filters={<WorkFilter />} sort={{ field: 'createdate', order: 'DESC' }}>
        <Datagrid>
            <TextField source="title" label="Название проекта" />
            <TextField source="slug" />
            <UrlField source="site_url" label="Сайт" />
            <UrlField source="repo_url" label="Репозиторий" />
            <ReferenceArrayField label="Технологии" reference="technologies" source="technologies">
                <SingleFieldList linkType={false}>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <DateField source="startDate" label="Дата начала" options={{ year: 'numeric', month: 'long' }} />
            <DateField source="createdate" label="Добавлено" showTime />
            <ShowButton label="" />
            <EditButton label="" />
        </Datagrid>
    </List>
);

export const WorkShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="createdate" showTime />
            <DateField source="lastupdate" showTime />
            <TextField source="title" label="Название проекта" />
            <TextField source="slug" />
            <UrlField source="site_url" label="Сайт" />
            <UrlField source="repo_url" label="Репозиторий" />
            <DateField source="startDate" label="Дата начала" options={{ year: 'numeric', month: 'long' }} />
            <RichTextField source="body" />
            <ReferenceArrayField label="Технологии" reference="technologies" source="technologies">
                <SingleFieldList linkType={false}>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ImageField source="pictures" src="src" title="title" />
        </SimpleShowLayout>
    </Show>
);

export const WorkCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="Название проекта" />
            <TextInput source="slug" />
            <DateInput source="startDate" label="Дата начала" options={{ format: 'MM.yyyy' }} />
            <RichTextInput source="body" />
            <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple placeholder={<p>Drop your files here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const WorkEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="createdate" />
            <DisabledInput source="lastupdate" />
            <TextInput source="title" label="Название проекта" />
            <TextInput source="slug" />
            <DateInput source="startDate" label="Start date" options={{ format: 'MM.yyyy' }} />
            <RichTextInput source="body" />
            <ReferenceArrayInput label="Technologies" reference="technologies" source="technologies">
                <SelectArrayInput>
                    <ChipField source="name" />
                </SelectArrayInput>
            </ReferenceArrayInput>
            <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple placeholder={<p>Drop your files here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);