const {Schema, Types} = require("mongoose")
const date = require("../utils/date")

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: "Please type a reaction",
            maxLength: 300
        },
        username: {
            type: String,
            required: "You need a username",
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => date(createdAtVal)
        }
    }
)

module.exports = ReactionSchema