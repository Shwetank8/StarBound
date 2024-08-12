const Mission = require('./model/Missions');

const seedMissions = async () => {
    const missions = [
        {
            name: 'Apollo 11',
            launchDate: new Date('1969-07-16'),
            agency: 'NASA',
            description: 'First crewed mission to land on the Moon.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Apollo_11',
        },
        {
            name: 'Voyager 1',
            launchDate: new Date('1977-09-05'),
            agency: 'NASA',
            description: 'First spacecraft to enter interstellar space.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Voyager_1',
        },
        {
            name: 'Sputnik 1',
            launchDate: new Date('1957-10-04'),
            agency: 'Soviet Union',
            description: 'First artificial Earth satellite.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Sputnik_1',
        },
        {
            name: 'Mars Rover Curiosity',
            launchDate: new Date('2011-11-26'),
            agency: 'NASA',
            description: 'A rover designed to explore the Gale crater on Mars.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Curiosity_(rover)',
        },
        {
            name: 'Hubble Space Telescope',
            launchDate: new Date('1990-04-24'),
            agency: 'NASA / ESA',
            description: 'A space telescope that has provided incredible images of the universe.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Hubble_Space_Telescope',
        },
        {
            name: 'Luna 2',
            launchDate: new Date('1959-09-12'),
            agency: 'Soviet Union',
            description: 'First spacecraft to reach the Moon.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Luna_2',
        },
        {
            name: 'Cassini-Huygens',
            launchDate: new Date('1997-10-15'),
            agency: 'NASA / ESA / ASI',
            description: 'Mission to study Saturn and its moons.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens',
        },
        {
            name: 'Vostok 1',
            launchDate: new Date('1961-04-12'),
            agency: 'Soviet Union',
            description: 'First human spaceflight carried out by Yuri Gagarin.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Vostok_1',
        },
        {
            name: 'Chandrayaan-2',
            launchDate: new Date('2019-07-22'),
            agency: 'ISRO',
            description: 'India\'s second lunar exploration mission.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Chandrayaan-2',
        },
        {
            name: 'Pioneer 10',
            launchDate: new Date('1972-03-02'),
            agency: 'NASA',
            description: 'First spacecraft to travel through the asteroid belt and make a flyby of Jupiter.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Pioneer_10',
        },
        {
            name: 'James Webb Space Telescope',
            launchDate: new Date('2021-12-25'),
            agency: 'NASA / ESA / CSA',
            description: 'Space telescope designed to succeed the Hubble Space Telescope.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
        },
        {
            name: 'Galileo',
            launchDate: new Date('1989-10-18'),
            agency: 'NASA',
            description: 'An unmanned spacecraft that studied Jupiter and its moons.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Galileo_(spacecraft)',
        },
        {
            name: 'New Horizons',
            launchDate: new Date('2006-01-19'),
            agency: 'NASA',
            description: 'A mission to perform a flyby study of the Pluto system and the Kuiper Belt.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/New_Horizons',
        },
        {
            name: 'Rosetta',
            launchDate: new Date('2004-03-02'),
            agency: 'ESA',
            description: 'Mission to study the comet 67P/Churyumov–Gerasimenko.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Rosetta_(spacecraft)',
        },
        {
            name: 'Mars Pathfinder',
            launchDate: new Date('1996-12-04'),
            agency: 'NASA',
            description: 'Mission to land a rover on Mars, which included the Sojourner rover.',
            wikipediaLink: 'https://en.wikipedia.org/wiki/Mars_Pathfinder',
        },
    ];
    

    try {
        await Mission.deleteMany();
        await Mission.insertMany(missions);
        console.log('Data successfully seeded!');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

module.exports = seedMissions;
