const {Schema, model} = require('mongoose')
const ReactionSchema = require('./Reaction')
const dateFormat = require('../utils/date')


const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: 'You need to leave a thought!',
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJson: {
            getters: true
        },
        id: false
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})
const Thought = model('Thought', thoughtSchema)
module.exports = Thought 