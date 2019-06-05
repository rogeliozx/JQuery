$(document).ready(() => {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
    });
    let dom = document.getElementById('post');
    let registro = parseInt(localStorage.getItem("array"));


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

    if (localStorage.getItem("post-save") && (post.length === registro)) {

        dom.innerHTML = localStorage.getItem("post-save");

    }
    /* Voy almacenar todo en el localstorage para no hacer redundancia y para no hacer varios procesos */
    else {
        post.map((post, index, array) => {
            
            let publicar = `<article class='post'><h2>${post.title}</h2><span class="date">${post.date}</span><p> ${post.content}</p><a href="#" class="button-more">Leer mas</a></article>`;

            if (index === 0) {
                dom.innerHTML = publicar;
            }
            if (index > 0) {
                dom.innerHTML = dom.innerHTML + publicar;
            }
            if (index === (array.length - 1)) {
                let etiquetas = dom.innerHTML;


                localStorage.setItem('post-save', etiquetas);
                localStorage.setItem('array', array.length);
            }
        })
    }
    //selecionar tema
    var styles=$('#theme');
 $('#green').click(()=>styles.attr('href',"css/green.css"))
 $('#blue').click(()=>styles.attr('href',"css/blue.css"))
$('#red').click(()=>styles.attr('href',"css/red.css"))

//scroll arriba de la web
$('.subir').click((e)=>{
    e.preventDefault()
    $('html , body').animate({
        scrollTop:0
    },800);
    return false;
})
})
