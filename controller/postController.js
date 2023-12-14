const post = require('../model/postModel.js')

const goHomePage = (req, res) => {
    post.find()
        .sort({ created_at: -1 })
        .then(result => {
            res.render('index', { data: result, post: result }); // Include post in the rendering data
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
};

const createPost = (req, res) => {
    let post1 = new post(req.body);
    post1.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};


const deleteUser = (req, res) => {
    post.findByIdAndDelete(req.params.id)
    .then(()=> {res.redirect('/')})
    .catch(err =>{ console.log(err)});    
}
module.exports ={
    goHomePage,   
    createPost,     
    deleteUser,
}