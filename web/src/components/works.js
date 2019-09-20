import React from "react"
import { useFirebase } from "gatsby-plugin-firebase"

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardAction: {
        height: '100%'
    },
    cardMedia: {
        backgroundPosition: 'top',
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
    },
    section: {
        padding: theme.spacing(8, 3),
        //textAlign: "center"
    },
}));

const Works = () => {
    const classes = useStyles();
    const [works, setWorks] = React.useState(() => {
        const initialWorks = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('works'));
        return initialWorks;
    })

    useFirebase(firebase => {
        firebase
        .firestore()
        .collection("works")
        .where('showInSite', '==', true)
        .orderBy('startDate', 'desc')
        .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
            let data = [];
            snapshot.forEach((doc) => {
                data.push(doc.data());
            });
            const cachedWorks = typeof window !== 'undefined' && localStorage.getItem('works');
            if (cachedWorks === null || cachedWorks !== JSON.stringify(data)) {
                typeof window !== 'undefined' && localStorage.setItem('works', JSON.stringify(data));
                setWorks(data);
            }
        });
    }, [])

    return (
        works ?
            <div className={classes.section}>
                <h2>Проекты</h2>
                <div>
                    works
                </div>
            </div>
        : 
            'Loading...'
    )
}

export default Works