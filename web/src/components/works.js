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
                <div className={classes.cardGrid}>
                    <Grid container spacing={3}>
                        {Object.keys(works).map(id => (
                            works[id].pictures && works[id].pictures.length > 0 ? (
                            <Grid item key={id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea className={classes.cardAction}>
                                        {works[id].pictures && works[id].pictures.length > 0 ? (
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={works[id].pictures[0].src}
                                                title={works[id].pictures[0].title}
                                            />
                                        ) : null}
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {works[id].title}
                                            </Typography>
                                            {works[id].cmsId ? (
                                                <Typography variant="body2" color="textSecondary" component="small">
                                                    CMS: {works[id].cmsId}
                                                </Typography>
                                            ) : null}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ) : null))}
                    </Grid>
                </div>
            </div>
        : 
            'Loading...'
    )
}

export default Works