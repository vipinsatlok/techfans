import Check from "@/components/Check";
import CountBox from "@/components/CountBox";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useState } from "react";
import { getParagraphCounts } from "./logics";

const ParagraphCounter = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const textCount = (value) => {
    setText(value);
    setTotalCount(getParagraphCounts(value, searchText, isCheck));
  };

  const check = (value) => {
    setTotalCount(getParagraphCounts(text, searchText, value));
    setIsCheck(value);
  };

  const searchTextCount = (value) => {
    setTotalCount(getParagraphCounts(text, value, isCheck));
    setSearchText(value);
  };

  return (
    <div className="flex flex-col gap-3 max-w-md">
      <TextArea onChange={textCount} placeholder={"Enter your text..."} />
      <Input onChange={searchTextCount} placeholder={"Enter search text..."} />
      <Check onChange={check} text={"Case Sensetive"} />
      <CountBox num={totalCount} text={"Total sentence is"} />
    </div>
  );
};

export default ParagraphCounter;
