var Mon = require('../index')

var mon = new Mon();

mon.db = {
  type: "mongo",
  url: "",
};

mon.models = {
  User: {
    attributes: {
      name: { type: "String" },
      email: { type: "Number" },
    },
    hasMany: {
      "Entry": { dependent: "destroy" },
      "Comment": { dependent: "destroy" }
    },
    loginable: true
  },
  Entry: {
    attributes: {
      text: { type: "String" },
    },
    belongTo: {
      "User": { },
    },
    hasMany: {
      "Comment": { dependent: "destroy" }
    }
  },
  Comment: {
    attributes: {
      text: { type: "String" },
    },
    belongTo: {
      "User": { },
      "Comment": { }
    }
  },
};

mon.server({port: 3000});
