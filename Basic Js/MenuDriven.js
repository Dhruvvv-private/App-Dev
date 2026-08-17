const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let items = [];

function showMenu() {
    console.log("\n--- MENU ---");
    console.log("1. Create");
    console.log("2. Get");
    console.log("3. Update");
    console.log("4. Delete");
    console.log("5. Exit");
    
    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case '1':
                rl.question("Enter new item: ", (item) => {
                    items.push(item);
                    console.log("Item added.");
                    showMenu();
                });
                break;
            case '2':
                if (items.length == 0) {
                    console.log("No items available.");
                } else {
                    for (let i = 0; i < items.length; i++) {
                        console.log(i + " : " + items[i]);
                    }
                }
                showMenu();
                break;
            case '3':
                rl.question("Enter index to update: ", (index) => {
                    rl.question("Enter new value: ", (newValue) => {
                        if (items[index] !== undefined) {
                            items[index] = newValue;
                            console.log("Item updated.");
                        } else {
                            console.log("Invalid index.");
                        }
                        showMenu();
                    });
                });
                break;
            case '4':
                rl.question("Enter item to delete: ", (item) => {
                        items = items.filter(x => x !== item);
                        console.log("Item deleted.");
                    showMenu();
                });
                break;
            case '5':
                console.log("Exiting...");
                rl.close();
                break;
            default:
                console.log("Invalid choice.");
                showMenu();
                break;
        }
    });
}

showMenu();