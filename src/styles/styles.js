/**
 * Created by 1 on 2016/11/16.
 */
import {
    StyleSheet,
    PixelRatio
} from "react-native";
const _base_btn_dp_height = 48;
const _base_btn_dp_ttext_size = 20;
const _base_btn_dp_ctext_size = 16;
const _base_density = 1.5;
const _base_text_px_size = (PixelRatio.get() / _base_density) * _base_btn_dp_ttext_size;
const _base_ctext_px_size = (PixelRatio.get() / _base_density) * _base_btn_dp_ctext_size;
const _base_btn_dx_height = (PixelRatio.get() / _base_density) * _base_btn_dp_height;
const _base_blue = '#02cad7';
const _base_yellow = '#fab03f';
const _base_native_img_path = 'react-native/Libraries/CustomComponents/NavigationExperimental/assets/';//这些原生的图片都从npm中过来的


const styles = StyleSheet.create({
                                     button: {
                                         height: 40,
                                         width: 100,
                                         borderRadius: 10,
                                         backgroundColor: 'yellow',
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                     },
                                     welcome: {
                                         fontSize: 20,
                                         textAlign: 'center',
                                         margin: 10,
                                     },
                                     disabled: {
                                         backgroundColor: 'gray',
                                     },
                                 });

const views = StyleSheet.create({
                                    normal: {
                                        fontSize: 24,
                                        fontFamily: 'Avenir Medium'
                                    },
                                    alternate: {
                                        fontSize: 50,
                                        fontFamily: 'Avenir Heavy',
                                        color: '#ffffff'
                                    },
                                    big: {
                                        fontSize: 32,
                                        alignSelf: 'center',
                                        fontFamily: 'Avenir Medium',
                                    },
                                    /**
                                     *居中显示文字
                                     */
                                    _btn_common: {
                                        height: _base_btn_dx_height,
                                        backgroundColor: _base_yellow,
                                        borderRadius: 5,
                                        justifyContent: 'center'
                                    },
                                    _head_view: {
                                        backgroundColor: _base_blue,
                                        height: _base_btn_dx_height
                                    },
                                    /**
                                     * 不指定Text宽高，类似于warp-content
                                     * 最外层指定justifyContent:'center'
                                     */
                                    _common_text: {
                                        // backgroundColor: 'blue',
                                        alignSelf: 'center',
                                        textAlign: 'center',
                                        fontSize: _base_text_px_size,
                                        color: '#ffffff',
                                    }
                                });


export default {
    styles,
    views,
    _base_text_px_size,
    _base_ctext_px_size,
    _base_btn_dx_height,
    _base_blue,
    _base_native_img_path,
    _base_yellow
}
