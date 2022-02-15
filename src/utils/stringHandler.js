function toTitleCase(text) {
    text = text.trim();
    
    let splitedText = text.split("");

    return splitedText.map((char, index) => {
        if (index === 0) {
            return char.toUpperCase();
        }
        else if (char === " ") {
            splitedText[index+1] = splitedText[index+1].toUpperCase();
        }

        return splitedText[index];
    }).join("");
}

export { toTitleCase };