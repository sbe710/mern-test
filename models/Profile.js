const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    company: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: String
    }
});

module.exports = User = mongoose.model("profile", ProfileSchema);
