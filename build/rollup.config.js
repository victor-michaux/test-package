import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import postcss from 'rollup-plugin-postcss'

export default {
    input: './main.js',
    output: {
        name: 'MyComponent',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        postcss({
            // extract: true,
            config: {
                path: './postcss.config.js',
            }
        }),
    ],
  };