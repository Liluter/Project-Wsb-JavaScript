const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        kontakt: "./src/kontakt.js",
        kontakt_head: "./src/css/kontakt.css",
    },
    output: {
        path: path.resolve(__dirname, "docs"), // trzeba było zamienić na docs ze względu na github
        filename: "[name].[contenthash].bundle.js",
        clean: true,
        assetModuleFilename: 'assets/images/[hash][ext][query]' // ten zapis dodany dla asset module aby przekierować z domyśnego ./ na ./assets/imgages
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "docs"),
        },
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"],
            inject: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/kontakt.html",
            chunks: ["kontakt","kontakt_head"],//, "kontakt_head" bez stylu
            inject: true,
            filename: "kontakt.html",
        }),
        new MiniCssExtractPlugin(), // tworzenie pliku css w docs było dist 
        new CopyWebpackPlugin({  // kopiowanie assetów dodatkowych do wskazanego folderu bez url
            patterns: [ 
                {
                    from: "./src/assets/images/*",
                    to() {
                        return "assets/images/[name][ext]";
                    },
                },
                {
                    from: "./src/assets/*",
                    to() {
                        return "assets/[name][ext]";
                    },
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i, //ładujemy scss a do niego ewentualnie następne poprzez import
                use: [
                    "style-loader",// MiniCssExtractPlugin.loader, // lub  który do taga domyslnie laduje
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["autoprefixer"]],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i, //ładujemy css jeśli jest wymagany 
                use: [
                    "style-loader", // za pomocą "style-loader" który do taga domyslnie laduje
                    "css-loader",
                    "sass-loader", // spróbuje to wyłączyć "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["autoprefixer"]],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: "asset/resource", // asset modules
            },
        ],
    },
};
