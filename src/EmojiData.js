const happy = ["😀", "😃", "😄", "😁", "😊", "😅", "🙂", "🙃"];
const sad = ["😔", "😪", "😐", "😑", "😶", "🙁", "😵", "😬"];
const backgroundColors = [
  "BackgroundColor--oxford",
  "BackgroundColor--pastel",
  "BackgroundColor--rajah",
  "BackgroundColor--tractor",
  "BackgroundColor--pictoral",
  "BackgroundColor--spanish",
  "BackgroundColor--smoky",
  "BackgroundColor--caribeen"
];

export function happyEmojis() {
  return happy;
}

export function sadEmojis() {
  return sad;
}

export function confusedEmojis() {
  const confused = [];

  const len = happy.length;
  for (let i = 0; i < len / 2; i++) {
    const index = Math.floor(Math.random() * len);
    confused.push(happy[index]);
    confused.push(sad[index]);
  }

  return confused;
}

export function bgColors() {
  return backgroundColors;
}
