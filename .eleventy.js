const { DateTime } = require ( "luxon" );

module.exports=function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/assets/source/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateString) => {
      dateObj = new Date(dateString);
      return DateTime.fromJSDate(dateObj, { zone: 'utc'}).toLocaleString(DateTime.DATE_MED);
    })

    eleventyConfig.addFilter('getOnlyMyArt', function (arr) {
	return arr.filter(a => !a.author);
});
eleventyConfig.addFilter('filterGalleryByDate', function (arr, f) {
	return arr.filter(a => a.date?.includes(f));
});

eleventyConfig.addFilter('filterGallery', function (arr, f) {
	return arr.filter(a => a.Ct?.includes(f.toLowerCase()));
});
    
    return {
    dir: {
    input: "src"
    }
};
}