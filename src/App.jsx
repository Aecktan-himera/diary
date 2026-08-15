import Button from "../src/components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";

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
  return (
    <>
      <h1>Дневник</h1>
      <Button />
      <CardButton>Новое воспоминание</CardButton>
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
    </>
  );
}

export default App;
