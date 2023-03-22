import LetterCounter from "@/tools/text/LetterCounter";
import ParagraphCounter from "@/tools/text/ParagraphCounter";
import SentenceCounter from "@/tools/text/SentenceCounter";
import WordCounter from "@/tools/text/WordCounter";

export const toolsData = [
  {
    id: 1,
    icon: "/favicon.ico",
    category: "text",
    slug: "letter-counter",
    component: LetterCounter,
    title: "Letter Counter",
    description:
      "This tool counts the number of letters in a given text. It also allows filtering the count based on a specific search term and supports case-sensitive matching.",
  },
  {
    id: 2,
    icon: "/favicon.ico",
    category: "text",
    slug: "word-counter",
    component: WordCounter,
    title: "Word Counter",
    description:
      "This tool counts the number of words in a given text. It also allows filtering the count based on a specific search term and supports case-sensitive matching. Additionally, it can count the number of unique words in the text.",
  },
  {
    id: 3,
    icon: "/favicon.ico",
    category: "text",
    slug: "sentence-counter",
    component: SentenceCounter,
    title: "Sentence Counter",
    description:
      "This tool counts the number of sentences in a given text. It also allows filtering the count based on a specific search sentence and supports case-sensitive matching.",
  },
  {
    id: 4,
    icon: "/favicon.ico",
    category: "text",
    slug: "paragraph-counter",
    component: ParagraphCounter,
    title: "Paragraph Counter",
    description:
      "This tool counts the number of paragraphs in a given text. It also allows filtering the count based on a specific search paragraph and supports case-sensitive matching.",
  },
];

const categoryData = [
  {
    title: "text",
    icon: "/favicon.ico",
    path: "text",
  },
];

export const sidebarData = categoryData.map((item) => {
  const filterByCategory = toolsData.filter((i) => i.category === item.title);
  return { ...item, filterByCategory };
});
