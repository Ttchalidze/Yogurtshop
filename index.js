function Flavor() {
  let input = prompt("Enter Name");
  if (input) {
    let Count = {};

    array.forEach((flavor) => {
      Count[flavor] = (Count[flavor] || 0) + 1;
    });

    console.log("Count:", Count);
  } else {
    console.log("Enter again.");
  }
}
for (let i = 0; i < 6; i++) {
  Flavor();
}
