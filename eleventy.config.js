import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';
import viteConfig from './vite.config.js';

export default function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets')

  eleventyConfig.addLayoutAlias('base', 'base.njk')

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite",
    viteOptions: viteConfig,
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dst',
      includes: '_includes',
      layouts: 'layouts',
      data: '_data'
    }
  }
}
