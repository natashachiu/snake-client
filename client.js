const net = require("net");
const { IP, PORT, NAME } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server.");
    conn.write(NAME);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };