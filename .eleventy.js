const { DateTime } = require ( "luxon" );
const TIME_ZONE = "America/Chicago";

module.exports=function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

   // eleventyConfig.addFilter("postDate", (dateObj) => {
      //return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
   // })

    return {
    dir: {
    input: "src"
    }
};
}