const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    launchDate: { type: Date },
    agency: { type: String, required: true },
    description: { type: String, required: true },
    wikipediaLink: { type: String },
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;
