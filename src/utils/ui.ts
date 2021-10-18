import {Dimensions} from 'react-native';

/**UI 宽度尺寸 */
const uiWidth = 750;

/**设备宽度 */
export const deviceW = Dimensions.get('window').width;
/**设备高度 */
export const deviceH = Dimensions.get('window').height;

/**
 * 适配宽高
 */
export function px2dp(px: number) {
  return (px * deviceW) / uiWidth;
}
