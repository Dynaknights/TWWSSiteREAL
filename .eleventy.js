const { DateTime } = require ( "luxon" );

module.exports=function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/assets/source/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateString) => {
      dateObj = new Date(dateString);
      return DateTime.fromJSDate(dateObj, { zone: 'utc'}).toLocaleString(DateTime.DATE_MED);
    })
    
    return {
    dir: {
    input: "src"
    }
};
}