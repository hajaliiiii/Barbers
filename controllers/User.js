const {User, Reservations} = require('../models/index');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
exports.addReservation = async (req, res) => {
    try {
        const user = await Reservations.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await User.destroy({
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
exports.deleteReservation = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Reservations.destroy({
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
exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const [updated] = await User.update(req.body, {
            where: { id }
        });

        if (updated) {
            const updatedUser = await User.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateReservation = async (req, res) => {
    try {
        const {id} = req.params;
        const [updated] = await User.update({ Status_Payment: 'paid' }, { where: { id: id } });


        if (updated) {
            const updatedUser = await Reservations.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};
exports.getUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findOne({where: {id: id}});
    if (user === null) {
        res.json("User Not Found!!");
    } else {
        res.json(user);
    }
};
