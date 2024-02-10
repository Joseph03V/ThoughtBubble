const router = require("express").Router()
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought,addReaction,removeReaction
} = require("../../controllers/thoughtscontrol")

router.route("/").get(getAllThoughts).post(addThought)
router.route("/:thoughId").get(getThoughtById).post(updateThought).delete(removeThought)
router.route("/:thoughtId/reactions:reactionId".delete(removeReaction))

module.exports = router