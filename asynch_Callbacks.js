// Uses callback function to solve asynchronous issues (create post was getting execute AFTER we got the posts, hence showing incomplete list of posts)

const posts = [
    { title: "Post one", body: "This is post one"},
    { title: "Post two", body: "This is post two"}
];

function getPosts(){            // secundary process
    setTimeout(() => {
        let output = '<h1>Async using Callbacks</h1>';
        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
function createPost(post, callback){    // primary process
    setTimeout(() =>{
        posts.push(post);
        callback();                 //as soon as the primary process completes the neccesary action we call the secundary process (callback function)
    },2000);
}
createPost({ title: "Post three", body: "This is post three"},getPosts);    // The primary process is called and then we pass the secundary process as a callback.(getPosts)
