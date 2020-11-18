const bcyrpt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const picture = `https://robohash.org/${username}.png`;
        
        const foundUser =  await db.check_user(username);
        if(foundUser[0]){
            return res.status(400).send("Username already registered")
        }

        const salt = bcyrpt.genSaltSync(10);
        const hashedPassword = bcyrpt.hashSync(password, salt);
        const [newUser] = await db.register_user([username, hashedPassword, picture]);
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
            return res.status(200).send({
                id: user.id,
                username: user.username,
                picture: user.picture
            });
        }
        else {
            res.status(401).send("Incorrect login info");
        }
    },

    getPosts: async (req, res) => {
            const db = req.app.get('db');
            const {id} = req.params;
            const {userposts, search} = req.body;


            //if userposts = true && a search get all posts where title contains search
            if(userposts === true && search){
                const posts = await db.get_search_and_usersposts([search])
                    return res.status(200).send(posts);
            }

            //if userposts is false && no search get all posts where current user is not the author
            if(userposts === false && !search){
                console.log("hit");
                const posts = await db.get_noUsers_noSearch(id);
                return res.status(200).send(posts);
            }

            //if userposts is false and is a search get all posts where current user is not the author and title contains search string
            if(userposts === false && search){
                const posts = await db.get_noUsers_withSearch([search, id])
                    return res.status(200).send(posts);
            }

            // if userposts true and no search get all posts
            if(userposts === true && !search){
                const posts = await db.get_all_posts();
                return res.status(200).send(posts);
            }
    }
}