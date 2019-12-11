# Helpful browser hacks

## Select all elements with css class into a variable

Here the class name is `className`, HTML will look like: `<img class="className"...`

    const imgs = document.querySelectorAll('.className')

## Loop through those element nodes, and set the width (for example)

    imgs.forEach(n => n.style.width = '50px')

## Change the text of something

    const n = document.querySelector('.className')
    n.innerHTML = 'Foobar'

## Randomly position an element

    document.querySelector('.className').style.position = 'absolute'
    document.querySelector('.className').style.left = Math.random() * window.innerWidth 
    document.querySelector('.className').style.top = Math.random() * window.innerHeight 

## Hide something 

Make it transparent...

    document.querySelector('.className').style.opacity = 0

Remove it and it's space (width/height)...

    document.querySelector('.className').style.display = 'none'

Delete it...

    document.querySelector('.className').remove()


    

    



