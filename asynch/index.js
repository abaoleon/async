// Part 1
console.log("First message");

setTimeout(()=> {
    console.log("Second message(after 2 seconds)");
},2000);


// Part 2
fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    console.log("Here’s a random dog image URL:", data.message);
  })
  .catch(error => console.error("Error:", error));

//  Part 3
async function getDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log("Here’s a random dog image URL:", data.message);
  } catch (error) {
    console.error("Error:", error);
  }
}

getDogImage();
