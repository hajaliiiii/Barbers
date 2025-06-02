const {Personnel , Hairdressers} = require('../models/index');

exports.createPersonnel = async (req, res) => {

    try {
        const user = await Personnel.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getPersonnels = async (req, res) => {
    const users = await Personnel.findAll();

    res.json(users);
};
exports.getPersonnel = async (req, res) => {
    const {phone} = req.body;
    const user = await Personnel.findOne({where: {phone: phone}});

    if (user === null) {
        res.json("Hairdresser Not Found!!");
    } else {
        // const Personnelhairdresser = await Hairdressers.findByPk(user.Hairdresser_Id, {
        //     include: [{ model: Personnel, as: 'personnel' }]
        // });
        const Personnelhairdresser = await Hairdressers.findByPk(user.Hairdresser_Id);
        res.json({user , Personnelhairdresser});
    }
};
