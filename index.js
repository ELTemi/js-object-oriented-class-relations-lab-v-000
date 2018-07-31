let driverId = 0
const store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }


  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return store.passengers.filter(passenger => {
      return passenger.trips()
    })
  }

}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }


  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    return store.drivers.filter(driver => {
      return driver.trips()
    })
  }

}

let tripId = 0

class Trip{
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }


  passenger() {
    return store.passengers.find((passenger) => this.passengerId === passenger.id);
  }

  driver() {
    return store.drivers.find((driver) => this.driverId === driver.id);
  }




}
