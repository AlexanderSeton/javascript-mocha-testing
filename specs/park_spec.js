const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;
  let dinosaur1;

  beforeEach(function () {
    park1 = new Park("Jurassic Park", 2000);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 25);
  });

  it('should have a name', function () {
    const actual = park1.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 2000);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  describe("Methods", function () {

    it('should be able to add a dinosaur to its collection', function () {
      park1.addDinosaur(dinosaur1);
      const actual = park1.dinosaurs;
      assert.deepStrictEqual(actual, [dinosaur1]);
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park1.addDinosaur(dinosaur1);
      park1.removeDinosaur(dinosaur1);
      const actual = park1.dinosaurs;
      assert.deepStrictEqual(actual, [])
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
      park1.addDinosaur(dinosaur1);
      park1.addDinosaur(dinosaur2);
      const actual = park1.mostVisitedDinosaur();
      assert.strictEqual(actual, dinosaur1);
    });

    it('should be able to find all dinosaurs of a particular species', function () {
      park1.addDinosaur(dinosaur1);
      park1.addDinosaur(dinosaur2);
      const actual = park1.findDinosaursBySpecies("velociraptor");
      assert.deepStrictEqual(actual, [dinosaur2]);
    });

    it('should be able to calculate the total number of visitors per day', function () {
      park1.addDinosaur(dinosaur1);
      park1.addDinosaur(dinosaur2);
      const actual = park1.totalVisitorsPerDay();
      assert.strictEqual(actual, 75);
    });

    it('should be able to calculate the total number of visitors per year', function () {
      park1.addDinosaur(dinosaur1);
      park1.addDinosaur(dinosaur2);
      const actual = park1.totalVisitorsPerYear();
      assert.strictEqual(actual, 27375);
    });

    it('should be able to calculate total revenue for one year', function () {
      park1.addDinosaur(dinosaur1);
      park1.addDinosaur(dinosaur2);
      const actual = park1.totalRevenueTicketsPerYear();
      assert.strictEqual(actual, 54750000);
    });
  });

});
