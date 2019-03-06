import React from "react";
import Emoji from "./Emoji";
import { sadEmojis } from "./EmojiData";
import { bgColors } from "./EmojiData";

const Sad = () => {
  const colors = bgColors();
  let index = 0;
  return (
    <div className="Emotions">
      {sadEmojis().map(emoji => {
        return (
          <Emoji symbol={emoji} background={colors[index++]} key={index} />
        );
      })}
    </div>
  );
};

export default Sad;
