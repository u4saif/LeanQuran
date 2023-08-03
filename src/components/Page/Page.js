import * as React from 'react';
import './Page.css';
import { get } from '../../utilities/AppService';
const Page = (props) => {
  const [pageLines, setPageLines] = React.useState([]);
  const { chapterId } = { ...props };
  React.useEffect(() => {
    get(`quran/verses/imlaei?chapter_number=${chapterId}`).then((data) =>
      // console.log(data.data.verses);
      setPageLines(data.data.verses)
    );
  }, [chapterId]);
  return (
    <>
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=1 */}
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?verse_key=1:1 */}
      <p>Page </p>
      {pageLines &&
        pageLines.map((verse, index) => {
          return (
            <h2>
              {verse.text_imlaei} {index + 1}
            </h2>
          );
        })}
    </>
  );
};

export default Page;
