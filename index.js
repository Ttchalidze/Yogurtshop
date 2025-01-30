function Flavor() {
  let input = prompt("Enter Name");
  if (input) {
    let array = input.split(",").map((flavor) => flavor.trim().toLowerCase());
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
