# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See a live countdown timer that ticks down every second (start the count at 7 days)
- **Bonus**: Desktop and mobile version

### Screenshot

<div>
<img width="800" alt="desktop-version" src="https://user-images.githubusercontent.com/43732526/166584331-f5e822bf-28d9-4137-a803-740d027f9971.png">
<img width="205" alt="mobile-version" src="https://user-images.githubusercontent.com/43732526/166584337-577d6514-a286-46a8-8ae2-d11dcefdc3f0.png">
</div>

### Links
- Solution URL: [The code](https://github.com/MolletSimon/launch-countdown-timer)
- Live Site URL: [If you want to see the app live](https://launch-countdown-timer-five-nu.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- Flexbox
- CSS Grid


### What I learned

This was one of my first Next project, and my first tailwind so I basically learned how to use Next, how to use React with TS and not JS, how to implement tailwind 

This is how we implement Tailwind, it applies CSS for us, md: is a breakpoint to adapt the css on large device like desktop
```html
      <h1
        className="mt-48 font-redhat text-2xl font-bold tracking-wide text-white 
        md:mt-32 md:text-3xl md:tracking-widest"
      >
```

And this is how the countdown works
```js
  const calculateTimeLeft = () => {
    let date = new Date()
    let difference =
      +new Date(
        `${date.getMonth() + 1}/${date.getDate() + days}/${date.getFullYear()}`
      ) - +new Date()

    let timeLeft: TimeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      days: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }
```

### Useful resources
I used the resources given by frontend mentor to realize the challenge, so screenshots and style guide for font, colors etc... : 
https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-/hub/launch-countdown-timer-S1M3hmsB9

## Author

- Website - [Simon Mollet](https://simonmollet.com/)
- Frontend Mentor - [@MolletSimon](https://www.frontendmentor.io/profile/MolletSimon)
- Linkedin - [Simon Mollet](https://www.linkedin.com/in/simon-mollet/)
