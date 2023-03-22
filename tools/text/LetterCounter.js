import Check from "@/components/Check";
import CountBox from "@/components/CountBox";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useState } from "react";

const LetterCounter = () => {

  const [totalCount, setTotalCount] = useState(0);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const textCount = (value) => {
    count(value, searchText, isCheck);
    setText(value);
  };

  const check = (value) => {
    count(text, searchText, value);
    setIsCheck(value);
  };

  const searchTextCount = (value) => {
    count(text, value, isCheck);
    setSearchText(value);
  };

  const count = (value, searchValue, check) => {
    const regex = new RegExp(searchValue, `${check ? "" : "i"}g`);
    console.log(regex)

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
      <Check onChange={check} text={"Case Sensetive"} />
      <CountBox num={totalCount} text={"Total letter is"} />
    </div>
  );
};

export default LetterCounter;
