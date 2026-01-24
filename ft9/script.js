function getUserData() {
  let map = new Map();
  let name = prompt("Insert your name: ");
  let age = prompt("Insert your age: ");

  if (name == null || name === "") {
    alert("The program has ended.");
    return null;
  } else if (age == null || age === "") {
    alert("The program has ended.");
    return null;
  } else {
    map.set("name", name);
    map.set("age", age);

    console.log("Name: " + map.get("name"));
    console.log("Age: " + map.get("age"));

    return getUserData();
  }
}

let script = getUserData();
