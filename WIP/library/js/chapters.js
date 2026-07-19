// THIS CODE IS FOR NEOCITIES. If you aren't using neocities, and the table of contents looks weird, try using "TEST-chapters-not-neocities" instead.

// Make sure to change TESTChapters to be consistent with what you're listing with these chapters. make sure to check all the other notes, i've marked where all the changes need to be made.
const TESTChapters = (function () {
    const chapters = [
        { title: "Test Fic 1", url: "TEST-fic1.html" },
        { title: "Test Fic 2", url: "TEST-fic2.html" },
        { title: "Test Fic 3", url: "TEST-fic3.html" },
        { title: "Test Fic 4", url: "#" },
        { title: "Test Fic 5", url: "#" },
        { title: "Test Fic 6", url: "#" },
        { title: "Test Fic 7", url: "#" },
        { title: "Test Fic 8", url: "#" },
        { title: "Test Fic 9", url: "#" },
    ];


    function generateTableOfContents() {
        // Change the TEST-table-of-contents to have a prefix related to what you're listing with these chapters.
        const toc = document.getElementById("TEST-table-of-contents");
        if (!toc) return;

        chapters.forEach(chapter => {
            const link = document.createElement("a");

            if (chapter.url !== "#") {
                // change "chapter-title-here/" to the name of the folder you have your chapter HTML files stored in
                link.href = "chapter-title-here/" + chapter.url;
            } else {
                link.href = chapter.url;
            }

            link.textContent = chapter.title;
            const listItem = document.createElement("li");
            listItem.appendChild(link);
            toc.appendChild(listItem);
        });
    }

    function setupNavigation() {
        // change "chapter-title-here/" to the name of the folder you have your chapter HTML files stored in
        const currentUrl = window.location.pathname.split('/').pop();
        const formattedCurrentUrl = currentUrl.endsWith(".html") ? currentUrl : currentUrl + ".html";
        const currentIndex = chapters.findIndex(chapter => formattedCurrentUrl === chapter.url);

        if (currentIndex === -1) return;
        
        // Change the TEST-prev-chapter to have a prefix related to what you're listing with these chapters. Make sure to update the TEST-prev-chapter and TEST-next-chapter elements in your chapter HTML files! if you do that right away at the start, you'll only have to do it once per storyline/fandom/etc.
        const navPrev = document.getElementById("TEST-prev-chapter");
        const navNext = document.getElementById("TEST-next-chapter");

        if (!navPrev || !navNext) return;

        if (currentIndex > 0) {
            navPrev.href = chapters[currentIndex - 1].url;
            navPrev.style.display = "inline";
        } else {
            navPrev.style.display = "none";
        }

        if (currentIndex < chapters.length - 1) {
            navNext.href = chapters[currentIndex + 1].url;
            navNext.style.display = "inline";
        } else {
            navNext.style.display = "none";
        }
    }

    return { generateTableOfContents, setupNavigation };
})();

// remember TESTChapters at the top? yeah make sure these two things match that
document.addEventListener("DOMContentLoaded", function () {
    TESTChapters.generateTableOfContents();
    TESTChapters.setupNavigation();
});
