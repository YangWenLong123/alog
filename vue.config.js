const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}
const CompressionPlugin = require("compression-webpack-plugin"); //Gzip
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("views", resolve("src/views"));
    },
    configureWebpack: config => {
        //开启骨架
        // config.plugins.push(new SkeletonWebpackPlugin({
        //   webpackConfig: {
        //     entry: {
        //       app: path.join(__dirname, './src/skeleton.js'),
        //     },
        //   },
        //   minimize: true,
        //   quiet: true,
        // }))
        const isProduction = process.env.NODE_ENV == 'production';


        // 生产环境相关配置
        if (isProduction) {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
            //gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css'];

            config.plugins.push(
                new CompressionPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            );
        }
        // 公共代码抽离
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        test: /node_modules/,
                        name: 'vendor',
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: 'all',
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: 'common',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true
                    },
                    runtimeChunk: {
                        name: 'manifest'
                    }
                }
            }
        };
    },


    // 基本路径
    publicPath: "./",

    // 输出文件目录
    outputDir: "dist",

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: "static",

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    // 如果机器有超过1个内核，则在默认情况下为生产构建中的babel&ts使用线程加载器
    parallel: require("os").cpus().length > 1,

    // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,

    pwa: {},
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: true,
        // css预设器配置项
        loaderOptions: {},
        requireModuleExtension: false
        // 启用 CSS modules for all css / pre-processor files.
        // modules: false
    },

    // webpack-dev-server 相关配置
    devServer: {
        open: true, // 是否 自动打开浏览器 在项目启动的时候
        host: "",
        port: 8080, // 端口
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {},
};
