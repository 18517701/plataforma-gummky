var img = ['https://cursos.tienda/wp-content/uploads/2020/01/HTML5-250x250.jpg?s=2048x2048', 'https://i.pinimg.com/originals/c6/31/41/c631414d1efe42d56736e3252320cd3f.jpg', 'https://i.pinimg.com/originals/33/b9/b4/33b9b44e8737491fd00215c45d28e6fa.jpg', 'https://i.pinimg.com/originals/db/2a/25/db2a25237d0678110e1460c55c2bdae9.jpg', 'https://i.pinimg.com/originals/92/ed/d3/92edd37cb6ad95b9223b93f2c4bd66ba.jpg', 'https://i.pinimg.com/originals/e3/e5/a2/e3e5a25c5c1024d28f4959f7a3b7b4a5.jpg']
var old = 5
var clicks = 0

function randomize() {
    let root = document.documentElement
    root.style.setProperty('--image', 'url(' + img[old] + ')')
    old++
    if (old > 5) {
        old = 0
    }
    var ul = document.querySelectorAll('#puzz i');
    for (var i = 0; i < ul.length; i++) {
        ul[i].style.left = Math.random() * (window.innerWidth - 100) + 'px'
        ul[i].style.top = Math.random() * (window.innerHeight - 100) + 'px'
    }
    // for (var i = ul.children.length; i >= 0; i--) {
    //   ul.appendChild(ul.children[Math.random() * i | 0]);
    // }
}
randomize()

function reload() {
    var done = document.querySelectorAll('.done')
    done.forEach(function(e) {
        e.classList.toggle('done')
    })
    var dropped = document.querySelectorAll('.dropped')
    dropped.forEach(function(e) {
        e.classList.toggle('dropped')
    })
    var allDone = document.querySelector('.allDone')
    allDone.style = ''
    allDone.classList.toggle('allDone')
}


// mobile functionality
var p = document.querySelectorAll('#puzz i')
p.forEach(function(e) {
    e.addEventListener('mousedown', function() {
        clicks++
        document.querySelector('#clicks').innerHTML = clicks
    })
    e.addEventListener('click', function() {
        if (document.querySelector('.clicked')) {
            document.querySelector('.clicked').classList.toggle('clicked')
            e.classList.toggle('clicked')
        } else {
            e.classList.toggle('clicked')
        }
    })
})

var fp = document.querySelectorAll('#puz i')
fp.forEach(function(el) {
    el.addEventListener('click', function() {
        if (document.querySelector('.clicked')) {
            var c = document.querySelector('.clicked')
            if (c.classList.contains(el.classList)) {
                el.classList.add('dropped')
                c.classList.add('done')
                c.classList.toggle('clicked')

                if (document.querySelectorAll('.dropped').length == 9) {
                    document.querySelector('#puz').classList.add('allDone')
                    document.querySelector('#puz').style.border = 'none'
                    document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'

                    setTimeout(function() {
                        reload()
                        randomize()
                    }, 1500)
                }
            }
        }
    })
})

// desktop drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.className);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text")

    if (ev.target.className == data) {
        ev.target.classList.add('dropped')
        document.querySelector('.' + data + "[draggable='true']").classList.add('done')

        if (document.querySelectorAll('.dropped').length == 9) {
            document.querySelector('#puz').classList.add('allDone')
            document.querySelector('#puz').style.border = 'none'
            document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'

            setTimeout(function() {
                reload()
                randomize()
            }, 1500)
        }
    }
}