//Module in Node.js to create Relative Route
const path = require('path');

//Generate an HTML file with script tags
//Compile multiple html files into one
//The other solution is to use file-loader
const HtmlWebpackPlugin = require('html-webpack-plugin');

//HotModuleReplacementPlugin is inbuilt in webpack,reload without refresh
const webpack = require('webpack');

// Extract CSS into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Styles-loader: combine plenty webpack configs into one
// const merge = require('webpack-merge'); 
// const StylesLoader = require('styles-loader');

//  const CleanWebpackPlugin = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

//All Configurations Go In Module Object
module.exports = {
    mode: 'development',
    //Also set multiple entries in an object
    entry: "./src/js/index.js",
    output: {
        filename: "./js/bundle.js", //or './js/[name].js'
        path: path.resolve(__dirname, "build"),
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
        // publicPath:'/assets/' //directory:dist/assets/js/bundle.js
    },

    // Create one bundle.js file with all repeated code 
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },

    //watch file changes
    watch: true,
    // watchOptions: {
    //     aggregationTimeout: 500,
    //     poll: 1000,
    //     ignored: /node_modules/
    // },
    devtool: 'source-maps',
    devServer: {
        port: 1234,//default port 8080
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        //Update Without Reload
        hot: true,
        //Open Page When Start Server
        open: true,
        //Inject Javascript Inline
        inline: true,
        // writeToDisk:true //Will save/cache as a hash titled file
    },



    module: {
        rules: [
            //
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            outputPath: './build/css/',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: '[name].[ext]',
                    }
                }]
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin(
            {
                title: "Profile project",
                template: path.resolve("./src/index.html"),
                filename: "./index.html"
            }
        ),

        new MiniCssExtractPlugin(
            //Options similar to the same options in webpackOptions.output
            {
                filename: "./css/[name].css"
            }
        ),

        //  new webpack.HotModuleReplacementPlugin(),
        //  // new CleanWebpackPlugin(['dist']),
    ],
}
