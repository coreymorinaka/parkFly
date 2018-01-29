var sequelize = require('./db');
var { Car } = require('../models/car');
var { Employee } = require('../models/employee');
var { Company } = require('../models/company');
var { Property } = require('../models/property');
var { PropertyManager } = require('../models/propertymanager');


function createCar(req, res) {
    sequelize.sync().then(function () {
        Car.bulkCreate([{
            make: 'Ford',
            model: 'Edge',
            year: 2017,
            color: 'black',
            licensePlate: '8jsh47s',
            permitNumber: '8923as7hdk'
        },
        {
            make: 'Honda',
            model: 'Accord',
            year: 2017,
            color: 'black',
            licensePlate: '5fd89s4',
            permitNumber: '189j8k9ddk'
        },
        {
            make: 'Kia',
            model: 'Rio',
            year: 2017,
            color: 'silver',
            licensePlate: 'a45gdd4',
            permitNumber: '423asd3451'
        },
        {
            make: 'Ford',
            model: 'Expedition',
            year: 2017,
            color: 'white',
            licensePlate: 'a45gd74',
            permitNumber: '123fgh567'
        },
        {
            make: 'Tesla',
            model: 'X',
            year: 2018,
            color: 'white',
            licensePlate: 'redwood',
            permitNumber: 'kj129gd6h'
        },
        {
            make: 'Honda',
            model: 'Fit',
            year: 2018,
            color: 'orange',
            licensePlate: '8g7dh4f',
            permitNumber: '8n9c78crwe'
        },
        {
            make: 'Audi',
            model: 'A6',
            year: 2018,
            color: 'white',
            licensePlate: '7jsb48j',
            permitNumber: '897ncr7n23'
        },
        {
            make: 'Audi',
            model: 'Q5',
            year: 2018,
            color: 'silver',
            licensePlate: 'h72jsh5',
            permitNumber: '10n8xx3m4f'
        },
        {
            make: 'Ford',
            model: 'F-150',
            year: 2018,
            color: 'grey',
            licensePlate: '09234ng',
            permitNumber: '0cnm4x8f9n0'
        },
        {
            make: 'BMW',
            model: 'M5',
            year: 2018,
            color: 'blue',
            licensePlate: '65hg2m5',
            permitNumber: 'cnc4937nmz'
        },
        {
            make: 'Bugatti',
            model: 'Chiron',
            year: 2018,
            color: 'black',
            licensePlate: '93jccn5',
            permitNumber: 'nx82m948dj'
        },
        {
            make: 'Lamborghini',
            model: 'Huracan Performante',
            year: 2018,
            color: 'green',
            licensePlate: '98hjsd4',
            permitNumber: '2839n49x8m'
        },
        {
            make: 'Porsche',
            model: '911 GT3',
            year: 2018,
            color: 'yellow',
            licensePlate: '65hj89l',
            permitNumber: '345cg768nb'
        },
        {
            make: 'Chevrolet',
            model: 'Camaro ZL1 1LE',
            year: 2018,
            color: 'white',
            licensePlate: 'hgf567f',
            permitNumber: 'hgf345sdf65b'
        },
        {
            make: 'McLaren',
            model: '720S',
            year: 2018,
            color: 'white',
            licensePlate: '234sdf5',
            permitNumber: '456v45d423z'
        },
        {
            make: 'Ford',
            model: 'Mustang',
            year: 2018,
            color: 'grey',
            licensePlate: '567hrg3',
            permitNumber: '8909vg23xrev'
        },
        {
            make: 'Rolls-Royce',
            model: 'Phantom',
            year: 2018,
            color: 'white and blue',
            licensePlate: '45fg6h7',
            permitNumber: '546v45bnm457'
        },
        {
            make: 'Volvo',
            model: 'V90 Cross Country',
            year: 2018,
            color: 'green',
            licensePlate: '2345fgh',
            permitNumber: '0p7lkn98j70'
        },
        {
            make: 'Ferrari',
            model: '812 Superfast',
            year: 2018,
            color: 'grey',
            licensePlate: '6hn78kl',
            permitNumber: '456v45587bvcx'
        },
        {
            make: 'Dodge',
            model: 'Challenger SRT Demon',
            year: 2018,
            color: 'orange',
            licensePlate: '567b53',
            permitNumber: '5412a34dsdf'
        },
        {
            make: 'Kia',
            model: 'Stinger',
            year: 2018,
            color: 'red',
            licensePlate: '4h6g7h8',
            permitNumber: '675z7i872ipkk09'
        },
        {
            make: 'Jeep',
            model: 'Grand Cherokee Trackhawk',
            year: 2018,
            color: 'red',
            licensePlate: '8hg6hj7',
            permitNumber: '456v4gv46n5456'
        }]);
    });
    res.json({ message: "Seeded Cars" });
}

function createEmployee(req, res) {
    sequelize.sync().then(function () {
        Employee.bulkCreate([{
            firstName: 'Harrison',
            lastName: 'S',
            email: 'harrison@gmail.com',
            password: 'h',
            cellNumber: 7148567457
        },
        {
            firstName: 'Billy',
            lastName: 'P',
            email: 'billyp@gmail.com',
            password: 'b',
            cellNumber: 7148567458
        },
        {
            firstName: 'Taylor',
            lastName: 'T',
            email: 'taylor@gmail.com',
            password: 't',
            cellNumber: 7148567459
        },
        {
            firstName: 'Karim',
            lastName: 'A',
            email: 'billyadlah@gmail.com',
            password: 'k',
            cellNumber: 7148567450
        },
        {
            firstName: 'Redwood',
            lastName: 'Employee',
            email: 'redwoodemployee@gmail.com',
            password: 'remployee',
            cellNumber: 7148567451
        },
        {
            firstName: 'Elizabeth',
            lastName: 'Quigley',
            email: 'equigley@jwce.com',
            password: 'jwcepassword',
            cellNumber: 7149476411
        },
        {
            firstName: 'Thomas',
            lastName: 'Smith',
            email: 'tsmith@jwce.com',
            password: 'jwcepassword',
            cellNumber: 7148323753
        },
        {
            firstName: 'Sidney',
            lastName: 'Medlovitz',
            email: 'smedlovitz@lawyer.com',
            password: 'lawyer',
            cellNumber: 5628763456
        },
        {
            firstName: 'Michael',
            lastName: 'Foster',
            email: 'mfoster@lawyer.com',
            password: 'lawyer',
            cellNumber: 5620982345
        },
        {
            firstName: 'Kristin',
            lastName: 'Avina',
            email: 'kavina@harbords.com',
            password: 'hdspassword',
            cellNumber: 5622863689
        },
        {
            firstName: 'Sharon',
            lastName: 'Stone',
            email: 'sstone@harbords.com',
            password: 'hdspassword',
            cellNumber: 5620224686
        },
        {
            firstName: 'Josh',
            lastName: 'Hutcherson',
            email: 'jhutcherson@lticomputer.com',
            password: 'hungergames',
            cellNumber: 9097655432
        },
        {
            firstName: 'Jennifer',
            lastName: 'Lawrence',
            email: 'jlawrence@lticomputer.com',
            password: 'hungergames',
            cellNumber: 9099876543
        },
        {
            firstName: 'Helen',
            lastName: 'Liu',
            email: 'hliu@liuli.com',
            password: 'theowner',
            cellNumber: 9098146723
        },
        {
            firstName: 'Sandrine',
            lastName: 'Polanski',
            email: 'spolanski@liuli.com',
            password: 'wordpass',
            cellNumber: 9090931376
        },
        {
            firstName: 'Carmela',
            lastName: 'Pham',
            email: 'cpham@oceanmedia.com',
            password: 'oceanpassword',
            cellNumber: 7147650981
        },
        {
            firstName: 'Shirin',
            lastName: 'Moosavi',
            email: 'smoosavi@oceanmedia.com',
            password: 'mediapassword',
            cellNumber: 7141234567
        },
        {
            firstName: 'Dusan',
            lastName: 'Jankov',
            email: 'djankov@pakedge.com',
            password: 'djpassword',
            cellNumber: 7143290846
        },
        {
            firstName: 'Ron',
            lastName: 'Martinez',
            email: 'rmartinez@pakedge.com',
            password: 'rmpassword',
            cellNumber: 7149082343
        }])
    });
    res.json({ message: "Seeded Employees" });
}

function createCompany(req, res) {
    sequelize.sync().then(function () {
        Company.bulkCreate([{
            companyName: "Redwood Code Academy",
            companyAddress: "2850 Red Hill Ave",
            companyEmail: "redwood@redhill.com",
            companyPhone: 7147162128,
            companySuiteNumber: 130,
            companyContact: "Harrsion",
            companyMaxSpaces: 1
        },
        {
            companyName: "JWC Environmental",
            companyAddress: "2850 Red Hill Ave",
            companyEmail: "agore@jwce.com",
            companyPhone: 9498333888,
            companySuiteNumber: 125,
            companyContact: "Al Gore",
            companyMaxSpaces: 6
        },
        {
            companyName: "Mendlovitz and Foster, Lawyers",
            companyAddress: "4010 Watson Plaza Dr.",
            companyEmail: "smendlovitz@mendlovitzfoster.com",
            companyPhone: 5624201351,
            companySuiteNumber: 100,
            companyContact: "Sidney Mendlovitz",
            companyMaxSpaces: 10
        },
        {
            companyName: "Harbor Dental Society",
            companyAddress: "4010 Watson Plaza Dr.",
            companyEmail: "grodriguez@harbords.com",
            companyPhone: 5625956303,
            companySuiteNumber: 204,
            companyContact: "Gina",
            companyMaxSpaces: 3
        },
        {
            companyName: "LTI COMPUTER INC.",
            companyAddress: "398 Lemon Creek Dr",
            companyEmail: "jhutcherson@lticomputer.com",
            companyPhone: 9094685887,
            companySuiteNumber: 101,
            companyContact: "Josh",
            companyMaxSpaces: 100
        },
        {
            companyName: "LIULI Crystal Art, Corporate Office",
            companyAddress: "398 Lemon Creek Dr",
            companyEmail: "spolanski@liuli.com",
            companyPhone: 9092748987,
            companySuiteNumber: 105,
            companyContact: "Sandrine",
            companyMaxSpaces: 7
        },
        {
            companyName: "Ocean Media",
            companyAddress: "17011 Beach Blvd.",
            companyEmail: "ckelleher@oceanmedia.com",
            companyPhone: 7149695244,
            companySuiteNumber: 720,
            companyContact: "Chad",
            companyMaxSpaces: 25
        },
        {
            companyName: "Pakedge Device & Software",
            companyAddress: "17011 Beach Blvd.",
            companyEmail: "gtran@pakedge.com",
            companyPhone: 6503858700,
            companySuiteNumber: 600,
            companyContact: "Garret",
            companyMaxSpaces: 55
        }]);
    });
    res.json({ message: "Seeded Companies" });
}

function createProperty(req, res) {
    sequelize.sync().then(function () {
        Property.bulkCreate([{
            locationName: "Redhill Business Park",
            address: "2850 Redhill Ave.",
            city: "Santa Ana",
            state: "CA",
            zip: 92705
        },
        {
            locationName: "PS Business Parks",
            address: "4010 Watson Plaza Dr.",
            city: "Lakewood",
            state: "CA",
            zip: 90712
        },
        {
            locationName: "Walnut Tech Business Center",
            address: "398 Lemon Creek Dr.",
            city: "Walnut",
            state: "CA",
            zip: 91789
        },
        {
            locationName: "Premier Business Centers",
            address: "17011 Beach Blvd",
            city: "Huntington Beach",
            state: "CA",
            zip: 92647
        }]);
    });
    res.json({ message: "Seeded Properties" });
}

function createPropertyManager(req, res) {
    sequelize.sync().then(function () {
        PropertyManager.create({
            firstName: "John",
            lastName: 'Smith',
            managementCompany: "Enterprise Property Management",
            email: "jsmith@epmanagement.com",
            password: "password",
            phoneNumber: 7145426800
        });
        PropertyManager.create({
            firstName: "Lee",
            lastName: 'Thorne',
            managementCompany: "LP Management",
            email: "lthorne@lpmanagement.com",
            password: "leethorne",
            phoneNumber: 5627426899
        });
    });
    res.json({ message: "Seeded Property Managers" });
}

module.exports = { createCar, createEmployee, createCompany, createProperty, createPropertyManager }

