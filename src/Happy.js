import React from "react";
import Emoji from "./Emoji";
import { happyEmojis } from "./EmojiData";
import { bgColors } from "./EmojiData";

const Happy = () => {
  const colors = bgColors();
  let index = 0;
  return (
    <div className="Emotions">
      {happyEmojis().map(emoji => {
        return (
          <Emoji symbol={emoji} background={colors[index++]} key={index} />
        );
      })}
    </div>
  );
};

export default Happy;
