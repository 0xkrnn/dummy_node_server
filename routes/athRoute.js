const router = require("express").Router()
const userModel = require("../models/userModel")

router.post("/login", () => {

})

router.post("/register", async (req, res) => {

    const { username, password } = req.body

    const newUser = new userModel({
        username,
        password
    })

    const userExist = await userModel.findOne({ username });

    try {

        if (!userExist) {
            newUser.save();
            return res.status(201).json({ "message": "user created" })
        } return res.status(400).json({ "message": "user already exist" })

    } catch (err) {
        res.status(500).json({ "error": "There was an error" })
        console.log(err)
    }


})

module.exports = router;