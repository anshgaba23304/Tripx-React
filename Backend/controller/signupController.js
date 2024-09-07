const Signup = require("../models/signup");
console.log(Signup); // This should print the model constructor

exports.signupUser = async (req, res) => {
    console.log(req.body); // Debug the incoming request body
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newUser = new Signup({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
};
