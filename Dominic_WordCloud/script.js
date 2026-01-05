function generateCloud() {
    const text = document.getElementById("textInput").value.trim();
    const img = document.getElementById("wordCloud");

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    // Encode text for URL
    const encodedText = encodeURIComponent(text);

    // QuickChart Word Cloud API
    const apiUrl = `https://quickchart.io/wordcloud?text=${encodedText}`;

    img.src = apiUrl;
}
