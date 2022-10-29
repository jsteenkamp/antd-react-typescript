const CracoAntDesignPlugin = require('craco-antd');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  webpack: { plugins: { add: [new AntdDayjsWebpackPlugin()] } },
};
