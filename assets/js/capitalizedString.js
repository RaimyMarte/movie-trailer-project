export const capitalizedString = (string) => {
    const words = string.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const capitalizedSentence = capitalizedWords.join(" ");

    return capitalizedSentence
}