import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'react-admin';

const styles = {
    media: {
        height: '18em',
    },
};

const mediaUrl = `https://marmelab.com/posters/beard-${parseInt(
    Math.random() * 10,
    10
) + 1}.jpeg`;

const Welcome = ({ classes, translate }) => (
    <Card>
        <CardMedia image={mediaUrl} className={classes.media} />
        <CardContent>
            <Typography variant="headline" component="h2">
                Админка для saindev.ru
            </Typography>
            <Typography component="p">
                Менеджер проектов
            </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button href="https://saindev.ru">
                <HomeIcon style={{ paddingRight: '0.5em' }} />
                Сайт
            </Button>
            <Button href="https://github.com/SainDev/saindev.ru">
                <CodeIcon style={{ paddingRight: '0.5em' }} />
                Исходники
            </Button>
        </CardActions>
    </Card>
);

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(Welcome);