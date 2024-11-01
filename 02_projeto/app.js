const fs = require("fs");
//Escrever um log
let log = "Mensagem do dia. \n";
//Méthode Async
//fs.writeFileSync("./logs.log", log, { flag: "a+" });

//Méthode Sync
fs.writeFile("./logs.log", log, { flag: "a+" }, (err) => {
  if (err) {
    console.log(err);
  }
});
console.log("FIM");
