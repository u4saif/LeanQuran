import * as React from 'react';
import './Page.css';
import { get } from '../../utilities/AppService';
import SingleLine from '../SingleLine/SingleLine';
const Page = (props) => {
  const [pageLines, setPageLines] = React.useState([]);
  const { chapterId } = { ...props };
  React.useEffect(() => {
    get(`quran/verses/imlaei?chapter_number=${chapterId}`).then((data) =>
      setPageLines(data.data.verses)
    );
  }, [chapterId]);

  const lineStyleObj={
    direction: 'rtl',
    // display: 'block',
    paddingTop:'0.5rem',
    paddingBottom:'0.5rem',
    // marginRight:'1rem',
    fontSize:'3rem', 
}
  return (
    <>
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=1 */}
      {/* https://api.quran.com/api/v4/quran/verses/imlaei?verse_key=1:1 */}
      <p>Page </p>
      <div className='allLineContainer'>   
      {pageLines &&
        pageLines.map((verse, index) => {
          return (
            <SingleLine  key={index} srNo={index + 1} lineText={verse.text_imlaei} lineStyle={lineStyleObj} />
            );
          })}
        </div>
    </>
  );
};

export default Page;
