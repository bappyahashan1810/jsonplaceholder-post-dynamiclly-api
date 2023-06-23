const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postsDisplay(data))
}

const postsDisplay = (posts) => {
    // console.log(posts);
    const postsField = document.getElementById('post-field');
    posts.forEach(post => {
        const postsElement = document.createElement('div');
        postsElement.innerHTML = `
    <h1> id: ${post.id} </h1>
    <h4> title: ${post.title} </h4>
    <p> post: ${post.body} </p>
    <button onclick="morePosts(${post.userId})">See more post </button>
    
    `;
        postsField.appendChild(postsElement);
    })

}

const morePosts = (userId) => {
    // console.log(userId);
    const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => postDisplay(data));
}

const postDisplay = (post) => {
    console.log(post);
    const postId = document.getElementById('post-id');
    postId.innerHTML = `
    <p>POST: ${post.body} </p>
    `;
}

loadPosts();