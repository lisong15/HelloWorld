import {PropTypes} from 'react';
import {requireNativeComponent, View} from 'react-native';

var iface = {
    name: 'ImageView',
    propTypes: {
        path: PropTypes.string,
        color: PropTypes.string,
        alpha: PropTypes.number,
        ...View.propTypes //包含默认的View的属性
    },
};

module.exports = requireNativeComponent('RCTImageViews', iface);