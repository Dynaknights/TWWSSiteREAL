const glossary = {
    
    // some words for series 1
    "dogs":"A domesticated animal that is commonly used by humans for work and companionship.",
    "swords":"A weapon made of metal or wood, usually with a long blade and short grip",
    
    // some words for series 2
    "cats":"An animal that is commonly used by humans for companionship. Barely domesticated",
    "daggers":"A weapon made of metal or wood, usually with a short blade and short grip",
    
};

function showPopup(term, description, event) {
    let popup = document.getElementById("glossary-popup");

    if (!popup) {
        popup = document.createElement("div");
        popup.id = "glossary-popup";
        popup.style.position = "absolute";
        popup.style.background = "linear-gradient(to bottom, #ffd54c 0%, #e88d55 100%)";
        popup.style.color = "black";
        popup.style.padding = "10px";
        popup.style.borderRadius = "5px";
        popup.style.maxWidth = "250px";
        popup.style.zIndex = "1000";
        popup.style.display = "none"; // Initially hidden
        popup.style.boxShadow = "5px 10px black";
        popup.style.pointerEvents = "auto"; // Allow interactions
        popup.style.fontSize = "14px";
        //popup.style.transition = "opacity 0.1s ease-in-out";
        document.body.appendChild(popup);
    }

    popup.textContent = description;

    popup.style.left = `${event.pageX + 10}px`;
    popup.style.top = `${event.pageY + 10}px`;
    popup.style.display = "block";
    popup.style.opacity = "1";

    console.log("Popup displayed:", term);

    setTimeout(() => {
        document.addEventListener("click", function hidePopup(e) {
            if (!popup.contains(e.target) && e.target !== event.target) {
                popup.style.display = "none";
                document.removeEventListener("click", hidePopup);
            }
        });
    }, 50); 
}

function highlightGlossaryTerms() {
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li"); 

    elements.forEach(element => {
        Object.keys(glossary).forEach(term => {
            const regex = new RegExp(`\\b${term}\\b`, "g");
            element.innerHTML = element.innerHTML.replace(regex, `<span class="glossary-term" data-term="${term}">${term}</span>`);
        });
    });

    document.querySelectorAll(".glossary-term").forEach(span => {
        // Change the color of glossary words here:
        span.style.color = "#00c6c0";
        span.style.cursor = "pointer";
        span.style.textDecoration = "none";
        span.addEventListener("click", function (event) {
            event.stopPropagation();
            const term = this.dataset.term;
            showPopup(term, glossary[term], event);
        });
    });

    console.log("Glossary terms highlighted"); 
}

document.addEventListener("DOMContentLoaded", highlightGlossaryTerms);
