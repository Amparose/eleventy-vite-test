import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';

export default function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets')

  eleventyConfig.addLayoutAlias('base', 'base.njk')

  eleventyConfig.addPlugin(EleventyVitePlugin)

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
