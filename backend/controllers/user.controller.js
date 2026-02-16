const { User } = require('../models');


class userController {
    static async register (req, res) {
        const { name, email, password} = req.body;

        try {
            const user = await User.create({ name, email, password});

        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    static async login (req, res) {

        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: {email} });

            if (!user) {
                return res.status(404).json({ message: 'User not found'});
            }

            if (user.password !== password) {
                return res.status(401).json({ message: 'Invalid password'})
            }

            res.status(200).json({
                message: 'Login successful',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });
            
        }

        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = userController
