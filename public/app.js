const tableMenu = document.getElementById("book-table")

tableMenu.addEventListener('click', function() {
    //  add transform in the opposite direction = transform - translate-x-64 //
    //  .show-sidebar
    // document.body.classList.add('class-3')
    // document.body.classList.remove('class-2')
    document.body.classList.toggle('show-sidebar')
    // tableMenu.body.classList.add('some-random-class')
    // console.log(document.body.classList)
    // console.log(document.body)
})