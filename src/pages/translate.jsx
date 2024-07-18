import React, { useState } from "react";
import { CustomSelect } from "../utils/customSelect";
import { TranslateBox } from "../components/translate/translateBox";

// select 박스에 들어갈 내용들 선언
const selectMenu = ["Level 1", "Level 2", "Level 3"];

const word = {
  aksldfja: 1,
  kdlfjsadklfjasdlkf: 2,
  klfasjdflk: 3,
};
const text =
  "fdkslaj flkasdjfkldsafj aksldfja slkfdjas kdlfjsadklfjasdlkf jasklfj asdklfjsdaklfjsda klfasjdflk asjdflk asjdf";

export const Translate = () => {
  //번역 단계 저장 변수
  const [level, setLevel] = useState(null);

  return (
    <div className="pt-3 pl-24 pr-24 h-auto">
      <p className="text-lg font-bold ">Select Translate Level</p>
      <CustomSelect
        fileType={level}
        setFileType={setLevel}
        width={"w-1/6"}
        name={"Select Level"}
        selectMenu={selectMenu}
      />
      <div className="flex gap-10 mt-5">
        {/* 원본 텍스트 */}
        <TranslateBox title={"Original Text"}></TranslateBox>
        {/* 번역후 텍스트 */}
        <TranslateBox title={"Translated Text"}></TranslateBox>
      </div>
    </div>
  );
};