const Mission = require('../model/Missions');

// @desc    Get all missions
// @route   GET /api/missions
// @access  Public
const getMissions = async (req, res) => {
    try {
        const missions = await Mission.find();
        res.status(200).json({ success: true, data: missions });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

module.exports = {
    getMissions,
};
