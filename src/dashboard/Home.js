import * as React from 'react';
import './Home.css';
import Card from '../components/Card/Card';
import Page from '../components/Page/Page';
import { get } from '../utilities/AppService';

const Home = () => {
  const [AllChapters, setAllChapters] = React.useState([]);
  const [openChapeter, setopenChapeter] = React.useState(1);
  const clickHandler = (metaData) => {
    console.log('Clicked', metaData.id);
    setopenChapeter(metaData.id);
  };
  React.useEffect(() => {
    get('chapters').then((data) => setAllChapters(data.data.chapters));
  }, []);

  return (
    <div className="grid-container">
      <div className="chaptersContainer">
        <span className="heading">Surahs</span>
        {AllChapters.map((chapter) => {
          return (
            <Card
              key={chapter.id}
              srNo={chapter.id}
              mainHading={chapter.name_simple}
              mainHadingPara={chapter.translated_name.name}
              secondryHeading={chapter.name_arabic}
              secondryHeadingPara={chapter.verses_count}
              metaData={{ ...chapter, clickHandler: clickHandler }}
              isActive={openChapeter}
            />
          );
        })}
      </div>
      <div className="pageContainer">
        <Page chapterId={openChapeter} />
      </div>
    </div>
  );
};

export default Home;
