 /*
 * @description: babel配置
 * @Author: along
 * @Date: 2019-11-12
 */
const babelConfig = {
    /**
     * https://www.babeljs.cn/docs/7.2.0/presets
     */
    presets: [
        "@babel/preset-env",
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}

module.exports = babelConfig;