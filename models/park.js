const Park = function (name, ticketPrice, dinosaurs=[]) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    for (let i=0; i<this.dinosaurs.length; i++) {
        if (this.dinosaurs[i] === dinosaur) {
            this.dinosaurs.splice(i, 1);
        }
    }
};

Park.prototype.mostVisitedDinosaur = function () {
    if (this.dinosaurs.length > 0) {
        let mostVisitedDinosaur = this.dinosaurs[0];
        for (let dinosaur of this.dinosaurs) {
            if (dinosaur.guestsAttractedPerDay > mostVisitedDinosaur.guestsAttractedPerDay) {
                mostVisitedDinosaur = dinosaur;
            }
        }
        return mostVisitedDinosaur;
    }
};

Park.prototype.findDinosaursBySpecies = function (species) {
    const dinosaursBySpecies = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species.toLowerCase() === species.toLowerCase()) {
            dinosaursBySpecies.push(dinosaur);
        }
    }
    return dinosaursBySpecies;
};

Park.prototype.totalVisitorsPerDay = function () {
    let totalVisitorsPerDay = 0;
    for (let dinosaur of this.dinosaurs) {
        totalVisitorsPerDay += dinosaur.guestsAttractedPerDay;
    }
    return totalVisitorsPerDay;
};

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365;
};

Park.prototype.totalRevenueTicketsPerYear = function () {
    return this.totalVisitorsPerYear() * this.ticketPrice;
};

Park.prototype.removeAllDinosaursBySpecies = function (species) {
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species.toLowerCase() === species.toLowerCase()) {
            this.removeDinosaur(dinosaur);
        }
    }
};

Park.prototype.dinosaursByDiet = function () {
    const dinosaursByDiet = {"carnivore": 0, "herbivore": 0, "omnivore": 0};
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.diet === "carnivore") {
            dinosaursByDiet.carnivore += 1;
        }
        if (dinosaur.diet === "herbivore") {
            dinosaursByDiet.herbivore += 1;
        }
        if (dinosaur.diet === "omnivore") {
            dinosaursByDiet.omnivore += 1;
        }
    }
    return dinosaursByDiet;
};

module.exports = Park;
