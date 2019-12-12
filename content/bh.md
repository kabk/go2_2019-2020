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

## Key press

    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      if(e.keyCode === 87) console.log("Pressed 'w'") 
    })

## Audio

Will need an audio context

    let ac = new AudioContect()

### Play a note at a certain fequency

    let note = (f) => {
      o1 = ac.createOscillator()
      o1.type = 'sine'
      o1.frequency.value = f
      g = ac.createGain()
      g.gain.setValueAtTime(0, 0)
      g.gain.linearRampToValueAtTime(0.25, ac.currentTime + 0.2)
      g.gain.linearRampToValueAtTime(0, ac.currentTime + 0.5)
      o1.connect(g).connect(ac.destination)
      o1.start()
    }

### LFO

    let lfo = () => {
      let osc = ac.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = 30

      let amp = ac.createGain()
      amp.gain.setValueAtTime(1, ac.currentTime)

      let lfo = ac.createOscillator()
      lfo.type = 'triangle'
      lfo.frequency.value = 0.5

      lfo.connect(amp.gain)
      osc.connect(amp).connect(ac.destination)
      lfo.start()
      osc.start()
    }

### Play noise

    let playNoise = (noiseDuration, bandHz) => {
      const bufferSize = ac.sampleRate * noiseDuration 
      const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate)
      let data = buffer.getChannelData(0)

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }

      let noise = ac.createBufferSource()
      noise.buffer = buffer

      let bandpass = ac.createBiquadFilter()
      bandpass.type = 'bandpass'
      bandpass.frequency.value = bandHz

      g = ac.createGain()
      g.gain.setValueAtTime(1, 0)
      g.gain.linearRampToValueAtTime(0, ac.currentTime + 0.5)

      noise.connect(g).connect(bandpass).connect(ac.destination)
      noise.start()
    }

### Random notes in sequence

    let play = () => {
      o1 = ac.createOscillator()
      o1.type = 'sine'
      o1.frequency.value = 100
      g = ac.createGain()
      g.gain.setValueAtTime(0, 0)

      for(let i = 0; i < 60; i++) {
        o1.frequency.setValueAtTime(Math.random() * 440 + 100, ac.currentTime + i)
        g.gain.linearRampToValueAtTime(0.25, ac.currentTime + 0.2 + i)
        g.gain.linearRampToValueAtTime(0, ac.currentTime + 0.5 + i)
      }

      o1.connect(g).connect(ac.destination)
      o1.start()
    }


