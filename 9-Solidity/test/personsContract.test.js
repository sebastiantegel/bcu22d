const PersonsContract = artifacts.require("./../contracts/personsContract.sol");

contract("personsContract", (accounts) => {
  before(async () => {
    this.personsContract = await PersonsContract.deployed();
  });

  it("deploys successfully", async () => {
    const address = await this.personsContract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("lists persons", async () => {
    const numberOfPersons = await this.personsContract.numberOfPersons();
    const person = await this.personsContract.persons(1);
    console.log(person);
    assert.equal(person.name, "Sebastian");
    assert.equal(numberOfPersons, 1);
  });

  it("add new person", async () => {
    await this.personsContract.createPerson("Hanna", 43, true);
    let numberOfPersons = await this.personsContract.numberOfPersons();
    const person = await this.personsContract.persons(2);
    console.log(person);
    assert.equal(person.name, "Hanna");
    assert.equal(numberOfPersons, 2);
  });

  it("removes person", async () => {
    await this.personsContract.removePerson(2);
    let numberOfPersons = await this.personsContract.numberOfPersons();
    const person = await this.personsContract.persons(1);
    console.log(person);
    assert.equal(person.name, "Sebastian");
    assert.equal(numberOfPersons, 1);
  });

  it("add new person again", async () => {
    await this.personsContract.createPerson("Hanna", 43, true);
    let numberOfPersons = await this.personsContract.numberOfPersons();
    const person = await this.personsContract.persons(3);
    console.log(person);
    assert.equal(person.name, "Hanna");
    assert.equal(numberOfPersons, 2);
  });
});
