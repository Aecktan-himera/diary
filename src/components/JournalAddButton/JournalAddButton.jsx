import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

const JournalAddButton = () => {
  return (
    <CardButton className="journal-add">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.3335 8H12.6668"
          stroke="white"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 3.33331V12.6666"
          stroke="white"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Новое воспоминание
    </CardButton>
  );
};

export default JournalAddButton;
