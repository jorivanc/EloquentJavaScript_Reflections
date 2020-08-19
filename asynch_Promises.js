// Uses promises to solve asynchronous issues (create post was getting execute AFTER we got the posts, hence showing incomplete list of posts)

const posts = [
    { title: "Post one", body: "This is post one"},
    { title: "Post two", body: "This is post two"}
];

function getPosts(){            // secundary process
    setTimeout(() => {
        let output = '<h1>Async using Promises</h1>';
        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
function createPost(post){    // primary process
    return new Promise((resolve,reject) => {        //returns a promise
        setTimeout(() =>{
            posts.push(post);
            const error = false;     //to test .catch set error to true
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong on createPost');
            }
        },2000);
    });
}

createPost({ title: "Post three", body: "This is post three"})
    .then(getPosts)
    .catch(err => console.log(err));

//Testing Promise.all  (to test, comment out the last 3 lines and uncomment the following lines)
    // const promise1 = Promise.resolve("Hello World");
    // const promise2 = 10;
    // const promise3 = new Promise((resolve, reject) =>
    //     setTimeout(resolve,2000,"Goodbye")
    // );
    // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());     //fetch returns a promise. to obtain the values we need to call .then twice (the first one is to obtain the .JSON and the second one to obtain the data)
    //
    // Promise.all( [promise1, promise2, promise3, promise4] ).then(values => console.log(values));      //  ["Hello World", 10, "Goodbye", Array(10)]
