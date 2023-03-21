import CountBox from "@/components/CountBox";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useState } from "react";

const LetterCounter = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");

  const textCount = (value) => {
    count(value, searchText);
    setText(value);
  };

  const searchTextCount = (value) => {
    count(text, value);
    setSearchText(value);
  };

  const count = (value, searchValue) => {
    const regex = new RegExp(searchValue, "ig");

    if (searchValue) {
      return setTotalCount(String(value)?.match(regex)?.length || 0);
    } else {
      return setTotalCount(value.length);
    }
  };

  return (
    <div className="flex flex-col gap-3 max-w-md">
      <TextArea onChange={textCount} placeholder={"Enter your text..."} />
      <Input onChange={searchTextCount} placeholder={"Enter search text..."} />
      <CountBox num={totalCount} text={"Total letter is"} />
    </div>
  );
};

export default LetterCounter;
