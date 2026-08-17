import "./App.css";
import { useState } from "react";
import Button from "../src/components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import Body from "./layouts/Body/Body";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";

function App() {
  const data = [
    {
      title: "Первая запись",
      text: "Никогда непоздно начать вести дневник",
      date: new Date(),
    },
    {
      title: "Суббота",
      text: "Ленивые выходные в самом разгаре",
      date: new Date(),
    },
  ];

  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    console.log(event.target.value);
    setInputData(event.target.value);
    console.log(inputData); // Отображается предыдущий инпут
  };

  return (
    <>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList>
            <CardButton>
              <JournalItem
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
              />
            </CardButton>
            <CardButton>
              <JournalItem
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
              />
            </CardButton>
          </JournalList>
        </LeftPanel>
        <Body>
          {/*Контролируемый компонент*/}
          <input type="text" value={inputData} onChange={inputChange} />{" "}
          <Button />
        </Body>
      </div>
    </>
  );
}

export default App;
