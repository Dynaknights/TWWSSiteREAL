const { DateTime } = require ( "luxon" );

module.exports = function (eleventyConfig) {

  // Blog start
  eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

  function extractExcerpt(post) {
    if (!post.templateContent) return '';
    if (post.templateContent.indexOf('</p>') > 0) {
      let end = post.templateContent.indexOf('</p>');
      return post.templateContent.substr(0, end + 4);
    }
    return post.templateContent;
  }

  eleventyConfig.addPassthroughCopy('./src/assets/source/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('/src/robots.txt');

  eleventyConfig.addFilter("postDate", (dateString) => {
    const dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_MED);
  });

  // Gallery start

/*eleventyConfig.addFilter('limit', function (arr, n) {
	return arr.slice(0, n);
});

    eleventyConfig.addFilter('getOnlyMyArt', function (arr) {
	return arr.filter(a => !a.author);
});

eleventyConfig.addFilter('filterGallery', function (arr, f) {
	return arr.filter(a => a.Ct?.includes(f.toLowerCase()));
});*/

  // Page ordering start

  function sortByTitle(a, b) {
    let nameA = a.data.title.toUpperCase();
    let nameB = b.data.title.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }

  eleventyConfig.addCollection("mainpage", c => c.getFilteredByGlob("src/*.md").sort(sortByTitle));
  eleventyConfig.addCollection("cast", c => c.getFilteredByGlob("src/cast/*.md").sort(sortByTitle));
  eleventyConfig.addCollection("world", c => c.getFilteredByGlob("src/world/*.md").sort(sortByTitle));
  eleventyConfig.addCollection("misc", c => c.getFilteredByGlob("src/misc/*.md").sort(sortByTitle));

    
    return {
    dir: {
    input: "src"
    }
}};