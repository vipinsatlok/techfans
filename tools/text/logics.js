export function getWordCounts(text, searchWord, caseSensitive) {
  // Split text into an array of words
  const words = text.split(" ");

  // Filter the words based on the searchWord, if provided
  const filteredWords = searchWord
    ? words.filter((word) =>
        caseSensitive
          ? word.includes(searchWord)
          : word.toLowerCase().includes(searchWord.toLowerCase())
      )
    : words;

  // Return the count of words, either filtered or unfiltered
  return filteredWords.length;
}

export function getSentenceCounts(text, searchSentence, caseSensitive) {
  // Split text into an array of sentences
  const sentences = text.split(/[.?!]/);

  // Filter the sentences based on the searchSentence, if provided
  const filteredSentences = searchSentence
    ? sentences.filter((sentence) =>
        caseSensitive
          ? sentence.trim() === searchSentence.trim()
          : sentence.toLowerCase().trim() ===
            searchSentence.toLowerCase().trim()
      )
    : sentences;

  // Return the count of sentences, either filtered or unfiltered
  return filteredSentences.length;
}

export function getParagraphCounts(text, searchParagraph, caseSensitive) {
  // Split text into an array of paragraphs
  const paragraphs = text.split(/\n\n+/);

  // Filter the paragraphs based on the searchParagraph, if provided
  const filteredParagraphs = searchParagraph
    ? paragraphs.filter((paragraph) =>
        caseSensitive
          ? paragraph.trim() === searchParagraph.trim()
          : paragraph.toLowerCase().trim() ===
            searchParagraph.toLowerCase().trim()
      )
    : paragraphs;

  // Return the count of paragraphs, either filtered or unfiltered
  return filteredParagraphs.length;
}
