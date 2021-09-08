# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot
1. Desktop Design
![Uploading Screenshot (29).png…](base apparel desktop preview)

1. Mobile Design 
![Uploading Screenshot (30).png…](base apparel mobile preview)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- CSS flexbox
- CSS grid
- CSS absolute and relative positioning
- CSS before and after Pseudo elements
- HTML5 Markup

Some HTML code from the project
```html
  <main id="main">
    <div class="logo">
      <img src="./images/logo.svg" alt="logo">
    </div>

    <div class="hero">
      <img src="./images/hero-mobile.jpg" alt="base apparel hero" class="mobile-hero">
      <img src="./images/hero-desktop.jpg" alt="base apparel hero" class="desktop-hero">
    </div>

    <div class="presentation-section">
      <div>
        <h1><span>We're</span> coming soon</h1>
        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay
          up-to-date
          with announcements and our launch deals.</p>
        <form action="#" class="form">
          <input type="email" name="email" id="email" placeholder="Email Address" required>
        </form>
      </div>
    </div>

  </main>
```

Some CSS code from the project
```css
:root {
--desaturated-red: hsl(0, 36%, 70%);
--soft-red: hsl(0, 93%, 68%);
--dark-grayish-red: hsl(0, 6%, 24%);
--whitish-gradient: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
--redish-gradient: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Josefin Sans', sans-serif;
    width: 100vw;
}

#main {
    width: 100%;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    display: grid;
    grid-template-rows: 10% 30% 60%;
}

#main .logo {
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
}

#main .logo > img {
    max-width: 35%;
    height: auto;
}

#main .hero {
    max-width: 100%;
}

#main > .hero .mobile-hero {
    width: 100%;
    height: 100%;
}

#main > .hero .desktop-hero {
    display: none;
}
```

## Author

- Twitter - [@abanicaisse](https://www.twitter.com/abanicaisse)
- Frontend Mentor - [@abanicaisse](https://www.frontendmentor.io/profile/abanicaisse)
- CodePen - [My codepen](https://www.codepen.io/Nicaisse)

