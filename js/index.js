console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1 = "jp";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "unknown";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
//3.1
let hacker1SpaceCapped = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i !== hacker1.length - 1) {
    hacker1SpaceCapped = hacker1SpaceCapped + hacker1[i] + " ";
  } else {
    hacker1SpaceCapped = hacker1SpaceCapped + hacker1[i];
  }
}
console.log(hacker1SpaceCapped.toUpperCase());
//3.2
let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse = hacker2Reverse + hacker2[i];
}
console.log(hacker2Reverse);
//3.3
// let names = [hacker2, hacker1];
// let orderedNames = names.sort();
// console.log(orderedNames);
// if (orderedNames[0] === hacker1) {
//   console.log("The driver's name goes first.");
// } else if (orderedNames[0] === hacker2) {
//   console.log("Yo, the navigator goes first definitely.");
// } else {
//   console.log("What?! You both have the same name?");
// }
switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  case 0:
    console.log("What?! You both have the same name?");
    break;
  default:
    break;
}
// BONUS 1
let essay =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec placerat orci. Nam a neque non libero dignissim luctus id in velit. Proin scelerisque consequat eros. Nam aliquet tellus eu tincidunt aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sagittis dui non neque pretium venenatis. Nulla vitae consequat arcu. Fusce iaculis interdum ipsum nec pretium. Ut luctus quis nibh et vulputate. Cras tincidunt vulputate ipsum a tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis sapien lacinia, fermentum sapien ut, feugiat magna. Etiam congue nunc vel pharetra accumsan. Integer consectetur et tellus eu pellentesque. Maecenas id ante sed quam fringilla cursus. In sed sollicitudin orci, vitae laoreet tellus. Donec sit amet nibh eget dui tristique elementum sed ut velit. Maecenas enim metus, pulvinar ut elit vitae, tristique feugiat lorem. Nam sed ullamcorper lacus. Duis dui eros, elementum et lectus nec, suscipit euismod dui. Fusce sed quam lacinia orci scelerisque luctus. Cras ultricies, augue tincidunt aliquam aliquet, eros velit feugiat lacus, sed facilisis nunc nisi eu orci. Morbi pharetra, enim sed mattis fringilla, sapien sapien rutrum neque, nec dictum libero nibh vitae massa. In tempus euismod nulla, eget sagittis sapien venenatis vulputate. Suspendisse molestie neque vehicula facilisis laoreet. Pellentesque eget velit eget dui dictum elementum. Donec dignissim nisi eu mi facilisis rutrum. Donec accumsan lacinia urna, eget aliquam urna sagittis at. Suspendisse consequat odio sed nisi pulvinar ultrices. Nunc congue odio at sapien molestie, porttitor varius urna mollis. Nam faucibus elit quis sapien cursus, at cursus nisl facilisis. Mauris sed urna orci.";
let wordCount = 1;
for (let i = 0; i < essay.length; i++) {
  if (essay[i] === " ") {
    wordCount++;
  }
}
console.log(wordCount);

//BONUS 2
let phraseToCheck = "Amor, sssdRoma";
let value = "";
let valueReverse = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "."
  ) {
    value = value + phraseToCheck[i];
  }
}
console.log(value);

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  if (
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "."
  ) {
    valueReverse = valueReverse + phraseToCheck[i];
  }
}
console.log(valueReverse);

console.log(value.toLowerCase() === valueReverse.toLowerCase());
