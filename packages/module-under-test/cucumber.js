module.exports = {
  default: {
    require: [
        "../../node_modules/module-containing-shared-steps/lib/steps",
        "__tests__/steps"
    ],
  },
};
