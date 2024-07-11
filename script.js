// Class for DormRoom
class DormRoom {
    constructor(name, address, size, isOccupied = false) {
        this.name = name;
        this.address = address;
        this.size = size; // in square footage
        this.isOccupied = isOccupied;
    }
}

// Class for Apartment
class Apartment {
    constructor(name, address, numberOfBedrooms, isOccupied = false) {
        this.name = name;
        this.address = address;
        this.numberOfBedrooms = numberOfBedrooms;
        this.isOccupied = isOccupied;
    }
}

// Class for Student
class Student {
    constructor(name, studentId, gender, residence = null) {
        this.name = name;
        this.studentId = studentId;
        this.gender = gender;
        this.residence = residence;
    }

    assignResidence(residence) {
        this.residence = residence;
        residence.isOccupied = true;
    }
}

// Class for MaintenanceRequest
class MaintenanceRequest {
    constructor(description, status, student, employee = null) {
        this.description = description;
        this.status = status; // 'submitted', 'in progress', 'completed'
        this.student = student;
        this.employee = employee;
    }

    assignEmployee(employee) {
        this.employee = employee;
    }
}

// Example usage
const dorm = new DormRoom("Dorm 1", "123 University St", 300);
const apartment = new Apartment("Apt 1", "456 University St", 3);

const student = new Student("John Doe", "S12345", "Male");
student.assignResidence(dorm);

const maintenanceRequest = new MaintenanceRequest("Leaky faucet", "submitted", student);
maintenanceRequest.assignEmployee("Jane Smith");

console.log(dorm);
console.log(apartment);
console.log(student);
console.log(maintenanceRequest);
