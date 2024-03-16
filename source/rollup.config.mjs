import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/PluraJS.js',
	output: [
        {
            file: 'dist/PluraJS.cjs.js',
            format: 'cjs'
        },
        {
			file: 'dist/PluraJS.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		},
    ],
    plugins: [json()]
};