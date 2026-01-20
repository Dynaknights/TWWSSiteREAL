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

    eleventyConfig.addCollection("mainpage", function(collection) {
        return collection.getFilteredByGlob("src/*.md").sort(function(a, b) {
            let nameA = a.data.title.toUpperCase();
            let nameB = b.data.title.toUpperCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });

    eleventyConfig.addCollection("cast", function(collection) {
        return collection.getFilteredByGlob("src/cast/*.md").sort(function(a, b) {
            let nameA = a.data.title.toUpperCase();
            let nameB = b.data.title.toUpperCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });

        eleventyConfig.addCollection("world", function(collection) {
        return collection.getFilteredByGlob("src/world/*.md").sort(function(a, b) {
            let nameA = a.data.title.toUpperCase();
            let nameB = b.data.title.toUpperCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });

        eleventyConfig.addCollection("misc", function(collection) {
        return collection.getFilteredByGlob("src/misc/*.md").sort(function(a, b) {
            let nameA = a.data.title.toUpperCase();
            let nameB = b.data.title.toUpperCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });
    
    return {
    dir: {
    input: "src"
    }
};
}