const Signup = require("../models/signup");

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const user = await Signup.findOne({ email });

        if (!user) {
            console.log("User not found:", email); // Debugging line
            return res.status(401).json({ error: 'Invalid email' });
        }

        // Replace this with password comparison using bcrypt if implemented
        if (user.password !== password) {
            console.log("Password mismatch for:", email); // Debugging line
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error("Error during login:", error); // Debugging line
        res.status(500).json({ error: 'Error logging in' });
    }
};
