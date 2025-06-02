const {Hairdressers , Personnel , Services} = require('../models/index');

exports.createHairdressers = async (req, res) => {

    try {
        const user = await Hairdressers.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.deleteHairdressers = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Hairdressers.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).send(); // موفق ولی بدون محتوا
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.deleteServiceHairdressers = async (req, res) => {

    try {
        const id = req.params.id;
        const deleted = await Services.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).send(); // موفق ولی بدون محتوا
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.deletePersonnelHairdressers = async (req, res) => {

    try {
        const id = req.params.id;
        const deleted = await Personnel.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).send(); // موفق ولی بدون محتوا
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateHairdressers = async (req, res) => {
    try {
        const id = req.params.id;
        const [updated] = await Hairdressers.update(req.body, {
            where: { id }
        });

        if (updated) {
            const updatedUser = await Hairdressers.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateServiceHairdressers = async (req, res) => {
    try {
        const id = req.params.id;
        const [updated] = await Services.update(req.body, {
            where: { id }
        });

        if (updated) {
            const updatedUser = await Services.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updatePersonnelHairdressers = async (req, res) => {
    try {
        const id = req.params.id;
        const [updated] = await Personnel.update(req.body, {
            where: { id }
        });

        if (updated) {
            const updatedUser = await Personnel.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createServiceHairdressers = async (req, res) => {

    try {
        const user = await Services.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
exports.getHairdressers = async (req, res) => {
    const users = await Hairdressers.findAll();
    res.json(users);
};
exports.getPersonnelHairdressers = async (req, res) => {
    const { id } = req.params
    console.log(id)
    // const Personnelhairdresser = await Hairdressers.findByPk(id, {
    //     include: [{ model: Personnel, as: 'personnel' }]
    // });
    const Personnelhairdresser = await Personnel.findAll({ where : {Hairdresser_Id : id} });
    res.json(Personnelhairdresser);
};
exports.getServiceHairdressers = async (req, res) => {
    const { id } = req.params
    console.log(id)
    // const Personnelhairdresser = await Hairdressers.findByPk(id, {
    //     include: [{ model: Personnel, as: 'personnel' }]
    // });
    const Personnelhairdresser = await Services.findAll({ where : {Hairdresser_Id : id} });
    res.json(Personnelhairdresser);
};
exports.getHairdresser = async (req, res) => {
    const {id} = req.params;
    const user = await Hairdressers.findOne({where: {id: id}});
    if (user === null) {
        res.json("Hairdresser Not Found!!");
    } else {
        res.json(user);
    }
};
