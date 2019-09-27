import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';

const styles = {
    img: {
        width: 80,
        height: 80
    },
    root: {},
};

const ListAvatar = ({ className, record, source, classes }) => {
    return (
        <Avatar
            src={record[source] ? record[source][0].src : null}
            className={classNames(classes.root, classes.img, className)}
        />
    );
};

ListAvatar.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles)(ListAvatar);