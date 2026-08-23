import "./App.css";
import { useState } from "react";
import JournalList from "./components/JournalList/JournalList";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import Body from "./layouts/Body/Body";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";

const INITIAL_DATA = [
  /* {
    id: 1,
    title: "Первая запись",
    text: "Никогда непоздно начать вести дневник",
    date: new Date(),
  },
  {
    id: 2,
    title: "Суббота",
    text: "Ленивые выходные в самом разгаре",
    date: new Date(),
  },*/
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={items} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} />
        </Body>
      </div>
    </>
  );
}

export default App;
