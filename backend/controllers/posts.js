 
 // Here we create a function for posts

 const PostMessage = require('../models/PostMessage')


 const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
 }


 const createPost = async(req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(200).json({
            message: 'success',
            newPost
        })
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
 }

 module.exports = { getPosts, createPost };