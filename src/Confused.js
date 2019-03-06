import React from "react";
import Emoji from "./Emoji";
import { confusedEmojis } from "./EmojiData";
import { bgColors } from "./EmojiData";

const Confused = () => {
  const colors = bgColors();
  let index = 7;
  return (
    <div className="Emotions">
      {confusedEmojis().map(emoji => {
        return (
          <Emoji symbol={emoji} background={colors[index--]} key={index} />
        );
      })}
    </div>
  );
};

export default Confused;
