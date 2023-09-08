const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/*Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.*/

//transform the div#container in a variable so I can use it in the js file
const containerEl = document.getElementById('container');

posts.forEach((post) =>{
    //print posts on feed
    containerEl.insertAdjacentHTML('beforeend', postMarkup(post));

});

function postMarkup (obj){

    //copy the markup given in the strater kit and put it in a variable smthMarkup
    const postMarkup = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${obj.media}" alt="${obj.author}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${obj.author.name}</div>
                    <div class="post-meta__time">${obj.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${obj.content}</div>
        <div class="post__image">
            <img src="${obj.author.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="javascript:;" data-postid="${obj.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${obj.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`

    return postMarkup;

};

function likes (DOMsection, index) {
    //take from the DOM the buttons and the counter of likes
    const button = DOMsection.querySelector('a');
    const numberLikes = DOMsection.getElementById('like-counter-1');

    //apply addEventListener so i can click on the button 
    button.addEventListener('click', function(){

        
        

        //add a variable to compare the actual number of likes to the one that i register after the click
        const clickedLikes = posts[index].likes;

        //put the id on a variable
        const postId = posts[index].id;

        //if numberLikes == clickedLikes
        if(numberLikes.textContent == clickedLikes){
            //add 1 to number of likes
            numberLikes.innerHTML = Number(numberLikes.textContent) + 1;
            //push into an array 
            likedPost.push(postId);
        }else {
            //remove 1 to number of likes
            numberLikes.innerHTML = Number(numberLikes.textContent) - 1;
            //remove like from array
            const deleteLike = likedPost.filter(like => like != postId);
            //refresh array
            likedPost = deleteLike;
        };
        console.log(likedPost);
    })
}