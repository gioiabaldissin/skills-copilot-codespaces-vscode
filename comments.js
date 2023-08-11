// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules.
var comment_controller = require('../controllers/commentController');

/// COMMENTS ROUTES ///

// POST request for creating Comment.
router.post('/', comment_controller.comment_create);

// DELETE request to delete Comment.
router.delete('/:id', comment_controller.comment_delete);

// PUT request to update Comment.
router.put('/:id', comment_controller.comment_update);

// GET request for one Comment.
router.get('/:id', comment_controller.comment_detail);

// GET request for list of all Comments.
router.get('/', comment_controller.comment_list);

module.exports = router;