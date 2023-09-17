const Medicine_Contract = artifacts.require("Tracking");

module.exports = function(deployer) {
    deployer.deploy(Medicine_Contract);
};