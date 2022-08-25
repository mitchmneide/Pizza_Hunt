const router = require('express').Router();
const {addComment, removeComment,addReply, removeReply} = require('../../controllers/comment-controller');
// api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);
// ap/comments/<pizzaId> /<commentId>
router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment)
// remove replay
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);
module.exports = router;