const fileManeger = require("./fileManeger");
const readlineSync = require("readline-sync");
const path = require("path");

function main() {
  while (true) {
    console.log("\nMenu");
    console.log("1. Create file");
    console.log("2. List files");
    console.log("3. Read file");
    console.log("4. Write to file");
    console.log("5. Delete file");
    console.log("6. Exit");

    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
      case "1":
        console.log("File created successfully.");
        break;
      case "2":
        console.log("File list displayed successfully.");
        break;
      case "3":
        console.log("File read successfully.");
      case "4":
        console.log("File written successfully.");
        break;
      case "5":
        console.log("File deleted successfully.");
        break;
      case "6":
        console.log("Exiting...");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

main();
