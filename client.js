const net = require("net");

const connect = function() {

  const conn = net.createConnection({
    host: "192.168.1.9",
    port: 50541
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server.");
    conn.write("Name: NPC");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };