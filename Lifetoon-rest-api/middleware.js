const jwt = require("express-jwt");

exports.authenticated = jwt({ secret: "my-secret-key" });