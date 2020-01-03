import * as React from "react";

import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    Filter,
    SimpleShowLayout,
    SimpleForm,
    DateField,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    UrlField,
    RichTextField,
    BooleanField,
    BooleanInput,
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
import AvatarField from '../components/AvatarField'

const WorkFilter = props => (
    <Filter {...props}>
        <TextInput label="Поиск" source="title" alwaysOn />
    </Filter>
);

export const WorkList = props => (
    <List {...props} filters={<WorkFilter />} sort={{ field: 'startDate', order: 'DESC' }}>
        <Datagrid>
            <AvatarField source="pictures" label="Скриншот" />
            <TextField source="title" label="Название проекта" />
            <TextField source="slug" />
            <UrlField source="site_url" label="Сайт" />
            <UrlField source="repo_url" label="Репозиторий" />
            <ReferenceArrayField label="CMS" reference="cms" source="cmsId">
                <SingleFieldList linkType={false}>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <DateField source="startDate" label="Дата начала" options={{ year: 'numeric', month: 'long' }} />
            <BooleanField label="Портфолио" source="showInSite" />
            <ShowButton label="" />
            <EditButton label="" />
        </Datagrid>
    </List>
);

export const WorkShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" label="Название проекта" />
            <TextField source="slug" />
            <UrlField source="site_url" label="Сайт" />
            <UrlField source="repo_url" label="Репозиторий" />
            <DateField source="startDate" label="Дата начала" options={{ year: 'numeric', month: 'long' }} />
            <RichTextField source="body" />
            <ReferenceArrayField label="CMS" reference="cms" source="cmsId">
                <SingleFieldList linkType={false}>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <BooleanField label="Портфолио" source="showInSite" />
            <ImageField source="pictures" src="src" title="title" />
        </SimpleShowLayout>
    </Show>
);

export const WorkCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="Название проекта" />
            <TextInput source="slug" />
            <TextInput source="site_url" label="Сайт" />
            <TextInput source="repo_url" label="Репозиторий" />
            <DateInput source="startDate" label="Дата начала" options={{ format: 'MM.yyyy' }} />
            <RichTextInput source="body" />
            <ReferenceArrayInput label="CMS" reference="cms" source="cmsId">
                <SelectArrayInput>
                    <ChipField source="name" />
                </SelectArrayInput>
            </ReferenceArrayInput>
            <BooleanInput label="Портфолио" source="showInSite" />
            <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple placeholder={<p>Drop your files here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const WorkEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" label="Название проекта" />
            <TextInput source="slug" />
            <TextInput source="site_url" label="Сайт" />
            <TextInput source="repo_url" label="Репозиторий" />
            <DateInput source="startDate" label="Start date" options={{ format: 'MM.yyyy' }} />
            <RichTextInput source="body" />
            <ReferenceArrayInput label="CMS" reference="cms" source="cmsId">
                <SelectArrayInput>
                    <ChipField source="name" />
                </SelectArrayInput>
            </ReferenceArrayInput>
            <BooleanInput label="Портфолио" source="showInSite" />
            <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple placeholder={<p>Drop your files here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);