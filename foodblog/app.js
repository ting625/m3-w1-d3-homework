const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    const data = {
        mainimage: '/images/chili.jpg',
        posts: [
            {
                profilepic: '/images/profile.png',
                name: 'Author Name',
                date: '2024-07-07',
                reply: 'Reply message',
                message: 'This is the blog post message.',
                thisBox: false,
                foodielevel: 'Expert',
                bio: 'This is the bio of the author.'
            },
            // add more posts here

        ]
    };
    res.render('index', data);
});

module.exports = app;