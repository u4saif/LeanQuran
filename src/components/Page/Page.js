import * as React from "react";
import "./Page.css";
import { get } from "../../utilities/AppService";
import SingleLine from "../SingleLine/SingleLine";
const Page = (props) => {
  const [pageLines, setPageLines] = React.useState([]);
  const { chapterId, metaData } = { ...props };
  React.useEffect(() => {
    get(`quran/verses/imlaei?chapter_number=${chapterId}`).then((data) =>
      setPageLines(data.data.verses)
    );
  }, [chapterId]);

  console.log(metaData);
  const lineStyleObj = {
    direction: "rtl",
    // display: 'block',
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "4.5rem",
  };
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
            return (
              <SingleLine
                key={index}
                srNo={index + 1}
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
