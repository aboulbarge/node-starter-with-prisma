const express = require("express");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/example-route",
    route: RoteName,
  },
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;