// Uses Async-Await, which is a more elegant way to handle promises instead of using .then .catch

const posts = [
    { title: "Post one", body: "This is post one"},
    { title: "Post two", body: "This is post two"}
];

function getPosts(){            // secundary process
    setTimeout(() => {
        let output = '<h1>Using Async-Await to Handle Promises</h1>';
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

async function init(){                                                          //create an async function where you will await for the processes that return promises.
    await createPost({ title: "Post three", body: "This is post three"});       //once resolved after AWAITING then getPosts() will be executed.
    getPosts();
}
init();

//Testing Fetch with Async-Await
    // async function fetchUsers(){
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await res.json();
    //     console.log(data);
    // };
    // fetchUsers();       //  (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
