import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏁": "Chequered",
  "🚩": " Triangular",
  "🎌": "Crossed s",
  "🏴": "Black",
  "🏳️": "White",
  "🏳️‍🌈": "Rainbow",
  "🇦🇫": "Afganistan",
  "🇦🇺": "Australia",
  "🇮🇳": "India"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this ";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: " paleturquoise ",
          height: 50,
          padding: 30,
          color: "teal",
          fontSize: 40
        }}
      >
        Flags We Know
      </h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      <h3> Flags that we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "1.0rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
