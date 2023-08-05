import * as React from "react";
import "./Home.css";
import Card from "../components/Card/Card";
import Page from "../components/Page/Page";
import Nav from "../components/Nav/Nav";
import { get } from "../utilities/AppService";

const Home = () => {
  const [AllChapters, setAllChapters] = React.useState([]);
  const [openChapeter, setopenChapeter] = React.useState(1);
  const [openChapeterInfo, setopenChapeterInfo] = React.useState(null);
  const [pageStyle, setPageFont] = React.useState({
    direction: "rtl",
    display: "block",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "3rem",
  });
  const clickHandler = (metaData) => {
    setopenChapeter(metaData.id);
    setopenChapeterInfo(metaData);
  };
  React.useEffect(() => {
    get("chapters").then((data) => {
      setAllChapters(data.data.chapters);
      setopenChapeterInfo(data.data.chapters[0]);
    });
  }, []);

  const navActionHandler = (value) => {
    let currentFont = pageStyle.fontSize.split("rem")[0];
    switch (value) {
      case "decrement":
        --currentFont;
        setPageFont({ ...pageStyle, fontSize: currentFont + "rem" });
        break;
      case "increment":
        ++currentFont;
        setPageFont({ ...pageStyle, fontSize: currentFont + "rem" });
        break;
      case "formatLines":
        setPageFont({ ...pageStyle, display: (pageStyle.display == "block") ? "inline-block" : "block" });
        break;
    }
  };
  return (
    <>
      <div className="grid-container">
        <Nav actionHandler={navActionHandler} />
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
          <Page
            chapterId={openChapeter}
            metaData={openChapeterInfo}
            pageStyle={pageStyle}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
