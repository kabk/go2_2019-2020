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

## Rotation

    const r = 0
    const i = setInterval(() => Array.from(document.querySelectorAll(".className")).forEach(n => n.style.transform = `rotate(${r++}deg)`), 100)

## Slowly increase margin

    const m = 0
    setInterval(() => document.querySelector('body').style.marginTop = `${m++}px`, 100)

## Toggling, flashing on/off

    const i = 0
    setInterval(() => {
      const m = i++ % 2
      if(m) n.style.display = 'none'
      else n.style.display = 'block'
    }, 1000)
 

## Query selecting EVERYTHING and changing the background...

    let r = 0
    let g = 0
    let b = 0
    setInterval(() => {
      const all = document.querySelectorAll('*')
      r++
      b++
      g++
      all.forEach(n => {
        n.style.background = `rgba(${r}, ${g}, ${b}, 1)`
      })
    }, 100)

