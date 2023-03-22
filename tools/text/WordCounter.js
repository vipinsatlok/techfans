import Check from "@/components/Check";
import CountBox from "@/components/CountBox";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useState } from "react";
import { getWordCounts } from "./logics";

const WordCounter = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const textCount = (value) => {
    setText(value);
    setTotalCount(getWordCounts(value, searchText, isCheck));
  };

  const check = (value) => {
    setTotalCount(getWordCounts(text, searchText, value));
    setIsCheck(value);
  };

  const searchTextCount = (value) => {
    setTotalCount(getWordCounts(text, value, isCheck));
    setSearchText(value);
  };

  return (
    <div className="flex flex-col gap-3 max-w-md">
      <TextArea onChange={textCount} placeholder={"Enter your text..."} />
      <Input onChange={searchTextCount} placeholder={"Enter search text..."} />
      <Check onChange={check} text={"Case Sensetive"} />
      <CountBox num={totalCount} text={"Total word is"} />
    </div>
  );
};

export default WordCounter;
