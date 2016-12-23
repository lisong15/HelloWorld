/**
 * Created by liyang on 16/12/2.
 */
import {PixelRatio, Dimensions} from "react-native";
/**
 * 根据屏幕密度换算成px
 * @param dp
 * @returns {number}
 */
dp2px = (dp = 0) => {

    return (dp * (PixelRatio.get() / 1.5) + 0.5);
};

/**
 * 获取屏幕宽高
 * @returns {Object}
 */
getWH = () => {
    return Dimensions.get('window');
};

onBack = (nav, info) => {
    if (!nav) {
        return true;
    }

    const routers = nav.getCurrentRoutes();

    if (routers.length > 1) {

        let route = routers[routers.length - 1];
        console.log('utils in onBack ' + '/' + !!route.params.id);
        if (route && route.params && route.params.backInfo) {
            route.params.backInfo(info, route.params.id);
        }
        // route.params && route.params.backInfo(info, route.params.id);
        nav.pop();
        return true;
    }
    return false;
};


export default {dp2px, onBack, getWH}