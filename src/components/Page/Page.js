import * as React from "react";
import "./Page.css";
import { get } from "../../utilities/AppService";
import SingleLine from "../SingleLine/SingleLine";
const Page = (props) => {
  const [pageLines, setPageLines] = React.useState([]);
  const { chapterId, metaData, updateFontSize } = { ...props };
  React.useEffect(() => {
    get(`quran/verses/imlaei?chapter_number=${chapterId}`).then((data) =>
      setPageLines(data.data.verses)
    );
  }, [chapterId]);
 
  const engToArabNumber = (num)=>{ 
      return num.replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
    }
    
  console.warn(updateFontSize);
  let lineStyleObj = {
    direction: "rtl",
    // display: 'block',
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "2rem",
  };

  lineStyleObj = {...lineStyleObj, fontSize: updateFontSize+'em'};
  
  return (
    <>
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=1 */}
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?verse_key=1:1 */}
      <div className="pageHeaderContainer">
        <div className="pageHeader">{ metaData?.name_arabic}</div>
      </div>
      <div className="allLineContainer">
      <div className="parentBismillahContainer">
        <div className="bismillahContainer"></div>
      </div>
        {pageLines &&
          pageLines.map((verse, index) => {
            const arabicIndex = engToArabNumber((index+1).toString());
            return (
              <SingleLine
                key={index}
                srNo={arabicIndex}
                lineText={verse.text_imlaei}
                lineStyle={lineStyleObj}
              />
            );
          })}
      </div>
    </>
  );
};

export default Page;
