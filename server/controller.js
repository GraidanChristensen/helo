const bcyrpt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        
        const foundUser =  await db.check_user(username);
        if(foundUser[0]){
            return res.status(400).send("Username already registered")
        }

        const salt = bcyrpt.genSaltSync(10);
        const hashedPassword = bcyrpt.hashSync(password, salt);
        const [newUser] = await db.register_user([username, hashedPassword]);
        res.status(200).send(newUser);
        
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        
        const foundUser =  await db.check_user(username);
        const user = foundUser[0];

        if(!user){
            return res.status(401).send("Incorrect login information")
        }

        const authenticated = bcyrpt.compareSync(password, user.password);
        if(authenticated){
            return res.status(200).send("Success");
        }
        else {
            res.status(401).send("Incorrect login info");
        }
    }
}