$(document).ready(() => {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false
    });
    let dom = document.getElementById('post');
    console.log(dom);
    let post = [
        {
            title: 'Prueba titulo 1',
            date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus est, luctus sed dignissim id,finibus vitae metus.Fusce et finibus magna, a suscipit metus.Maecenas vulputate, odio gravidavehicula faucibus, tellus nulla sagittis velit, id rutrum nisi augue a enim.Nulla fermentumlectus ex, vitae varius ligula sagittis sit amet.Nulla fringilla sit amet sapien quis faucibus. Ut semper elementum commodo.Curabitur consectetur, urna ut porttitor condimentum, tellus ex ultricies ante, ut tristique ligula nulla nec ex.Fusce sed condimentum mi, a mollis dui.Morbi eros risus, semper sed eros ut, maximus viverra nisi.Ut dolor elit, molestie vitae neque et, efficitur pellentesque lorem.Vestibulum sed mauris faucibus, posuere eros a, sodales nisi.Curabitur vestibulum urna eu suscipit consequat.Aliquam erat volutpat."
        },
        {
            title: 'Prueba titulo 2',
            date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus est, luctus sed dignissim id,finibus vitae metus.Fusce et finibus magna, a suscipit metus.Maecenas vulputate, odio gravidavehicula faucibus, tellus nulla sagittis velit, id rutrum nisi augue a enim.Nulla fermentumlectus ex, vitae varius ligula sagittis sit amet.Nulla fringilla sit amet sapien quis faucibus. Ut semper elementum commodo.Curabitur consectetur, urna ut porttitor condimentum, tellus ex ultricies ante, ut tristique ligula nulla nec ex.Fusce sed condimentum mi, a mollis dui.Morbi eros risus, semper sed eros ut, maximus viverra nisi.Ut dolor elit, molestie vitae neque et, efficitur pellentesque lorem.Vestibulum sed mauris faucibus, posuere eros a, sodales nisi.Curabitur vestibulum urna eu suscipit consequat.Aliquam erat volutpat."
        },
        {
            title: 'Prueba titulo 3',
            date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus est, luctus sed dignissim id,finibus vitae metus.Fusce et finibus magna, a suscipit metus.Maecenas vulputate, odio gravidavehicula faucibus, tellus nulla sagittis velit, id rutrum nisi augue a enim.Nulla fermentumlectus ex, vitae varius ligula sagittis sit amet.Nulla fringilla sit amet sapien quis faucibus. Ut semper elementum commodo.Curabitur consectetur, urna ut porttitor condimentum, tellus ex ultricies ante, ut tristique ligula nulla nec ex.Fusce sed condimentum mi, a mollis dui.Morbi eros risus, semper sed eros ut, maximus viverra nisi.Ut dolor elit, molestie vitae neque et, efficitur pellentesque lorem.Vestibulum sed mauris faucibus, posuere eros a, sodales nisi.Curabitur vestibulum urna eu suscipit consequat.Aliquam erat volutpat."
        },
        {
            title: 'Prueba titulo 4',
            date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus est, luctus sed dignissim id,finibus vitae metus.Fusce et finibus magna, a suscipit metus.Maecenas vulputate, odio gravidavehicula faucibus, tellus nulla sagittis velit, id rutrum nisi augue a enim.Nulla fermentumlectus ex, vitae varius ligula sagittis sit amet.Nulla fringilla sit amet sapien quis faucibus. Ut semper elementum commodo.Curabitur consectetur, urna ut porttitor condimentum, tellus ex ultricies ante, ut tristique ligula nulla nec ex.Fusce sed condimentum mi, a mollis dui.Morbi eros risus, semper sed eros ut, maximus viverra nisi.Ut dolor elit, molestie vitae neque et, efficitur pellentesque lorem.Vestibulum sed mauris faucibus, posuere eros a, sodales nisi.Curabitur vestibulum urna eu suscipit consequat.Aliquam erat volutpat."
        }, {
            title: 'Prueba titulo 5',
            date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus est, luctus sed dignissim id,finibus vitae metus.Fusce et finibus magna, a suscipit metus.Maecenas vulputate, odio gravidavehicula faucibus, tellus nulla sagittis velit, id rutrum nisi augue a enim.Nulla fermentumlectus ex, vitae varius ligula sagittis sit amet.Nulla fringilla sit amet sapien quis faucibus. Ut semper elementum commodo.Curabitur consectetur, urna ut porttitor condimentum, tellus ex ultricies ante, ut tristique ligula nulla nec ex.Fusce sed condimentum mi, a mollis dui.Morbi eros risus, semper sed eros ut, maximus viverra nisi.Ut dolor elit, molestie vitae neque et, efficitur pellentesque lorem.Vestibulum sed mauris faucibus, posuere eros a, sodales nisi.Curabitur vestibulum urna eu suscipit consequat.Aliquam erat volutpat."
        }
    ]
    if(localStorage.getItem("post-save")){
    dom.innerHTML=localStorage.getItem("post-save");
    console.log("localstorage usado")
    }
    /* Voy almacenar todo en el localstorage para no hacer redundancia y para no hacer varios procesos */
     else {
        post.map((post, index, array) => {
            let regex=new RegExp("/\W/");
            let publicar = `
        <article class="post">
                    <h2>${post.title}</h2>
                    <span class="date">${post.date}</span>
                    <p> ${post.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
        `;

            if (index === 0) {
                dom.innerHTML = publicar;
            }
            if (index > 0) {
                dom.innerHTML = dom.innerHTML + publicar;
            }
            if (index === (array.length - 1)) {
                regex
                localStorage.setItem('post-save', JSON.stringify(dom.innerHTML));
            }
        })
    }
})
