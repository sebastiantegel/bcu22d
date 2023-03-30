// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract personsContract {
    uint nextId = 0;
    uint public numberOfPersons = 0;

    struct Person {
        uint id;
        string name;
        uint age;
        bool isMarried;
    }

    event PersonCreated(uint id);
    event PersonDeleted(uint id);
    event PersonsIndex(uint[] ids);

    mapping(uint => Person) public persons;
    uint[] public personList;

    function createPerson(
        string memory _name,
        uint _age,
        bool _isMarried
    ) public {
        nextId++;
        numberOfPersons++;
        persons[nextId] = Person(nextId, _name, _age, _isMarried);
        personList.push(nextId);
        emit PersonCreated(nextId);
    }

    function removePerson(uint id) public {
        numberOfPersons--;
        delete persons[id];
        emit PersonDeleted(id);
    }

    function getIndexList() public view returns (uint[] memory) {
        return personList;
    }

    constructor() public {
        createPerson("Sebastian", 43, true);
    }
}
