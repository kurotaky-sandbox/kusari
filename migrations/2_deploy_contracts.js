const Hello = artifacts.require("Hello");

module.exports = (deployer) => {
  const word = "We are kusari people!";
  deployer.deploy(Hello, word, { gas: 2000000 });
};
