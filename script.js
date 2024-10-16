const inputele = document.getElementById('input');
const outputele = document.getElementById('output');

function upperwordc() {
    outputele.value = inputele.value.toUpperCase();
}

function lowerwordc() {
    const inputtext = inputele.value;
    outputele.value = inputtext.toLowerCase();
}

function charcount() {
    const inputval = inputele.value.length;
    outputele.value = "Character Count: " + inputval;
}

function wordcount() {
    const wordCount = inputele.value.split(/\s+/).filter(Boolean).length; 
    outputele.value = "Word Count: " + wordCount;
}
