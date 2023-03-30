var PersonList = artifacts.require("./../contracts/personsContract.sol");

module.exports = function (deployer) {
  deployer.deploy(PersonList);
};
