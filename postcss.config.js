const tailwindcss = require("tailwindcss");
module.exports = {
	plugins: ["postcss-preset-env", tailwindcss],
};

// https://github.com/postcss/postcss
// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     require('postcss-nested')
//   ]
// }
