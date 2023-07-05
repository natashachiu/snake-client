const { KEYS } = require("./constants");

// handle user input from stdin

// store the active TCP connection object
let connection;

const handleUserInput = (data) => {
  if (data === "\u0003")
    process.exit();

  if (KEYS[data])
    connection.write(KEYS[data]);
};

const setupInput = function(conn) {

  // place reference to conn object in global var
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };