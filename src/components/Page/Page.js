import * as React from "react";
import "./Page.css";
import { get } from "../../utilities/AppService";
import SingleLine from "../SingleLine/SingleLine";
const Page = (props) => {
  const [pageLines, setPageLines] = React.useState([]);
  const { chapterId, metaData, pageStyle } = { ...props };
  React.useEffect(() => {
    get(`quran/verses/imlaei?chapter_number=${chapterId}`).then((data) =>
      setPageLines(data.data.verses)
    );
  }, [chapterId]);

  const engToArabNumber = (num) => {
    return num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  };

  return (
    <>
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=1 */}
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?verse_key=1:1 */}
      <div className="pageHeaderContainer">
        <div className="pageHeader">{metaData?.name_arabic}</div>
      </div>
      <div className="allLineContainer">
        <div className="parentBismillahContainer">
          <div className="bismillahContainer"></div>
        </div>
        {pageLines &&
          pageLines.map((verse, index) => {
            const arabicIndex = engToArabNumber((index + 1).toString());
            return (
              <SingleLine
                key={index}
                srNo={arabicIndex}
                lineText={verse.text_imlaei}
                lineStyle={pageStyle}
              />
            );
          })}
      </div>
    </>
  );
};

export default Page;
