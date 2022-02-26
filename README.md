# Frontend Mentor ⇒ [Huddle landing page](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100)

![Design preview for the Huddle landing page coding challenge](https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/efl9yt2c7gpgn2ezgeo7.jpg)

## Summary

This is a solution to the [Frontend Mentor](https://www.frontendmentor.io) challenge to recreate the [Huddle landing page](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

I built this project to get more practice with <b>React</b> and <b>React Styled Components</b>.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

# Overview

## The challenge

### Users should be able to:

- [x] View the optimal layout for each page depending on their device's screen size
  - [x] <b>Mobile</b> @ 375px
  - [x] <b>Tablet</b> @ 768px
  - [x] <b>Desktop</b> @ 1275px
- [x] See <b>hover</b> states for all interactive elements throughout the site
  - [x] <b>Button</b> `background-color` and `transform` updates on <b>hover</b>
  - [x] <b>Links</b> `color` updates on <b>hover</b>
        
## Screenshots

### Mobile @ <b>375px</b>

<img src="./design/mobile-design.jpg" alt="" width="300"/>

### Desktop @ <b>1275px</b>

<img src="./design/desktop-design.jpg" alt="" width="400"/>
 
### <b>Hover States</b>

<img src="./design/active-states.jpg" alt="" width="400"/>

## Links

### Solution URL: [View Solution here](https://www.frontendmentor.io/solutions/huddle-landing-page-using-react-react-styled-components-and-sass-e17B_UO4t)
### Live Site URL: [View Live Site here](https://distracted-davinci-033bd1.netlify.app/)

## My process

### Built with

- <b>[React](https://reactjs.org/)</b> - JavaScript Framework
- <b>[React Styled Components](https://styled-components.com/)</b> - For styles
- Semantic <b>HTML5</b> markup
- <b>Sass</b> 
  - <b>CSS</b> custom properties
  - <b>Flexbox</b>
- <b>Mobile-first workflow</b>
  - <b>Mobile</b> breakpoint @ 375px
  - <b>Tablet</b> beakpoint @ 768px
  - <b>Desktop</b> breakpoint @ 1275px
 
### What I learned

- The main motivation for completing this project was to get more practice with [React Styled Components](https://styled-components.com/).  I feel very comfortable with [React Styled Components](https://styled-components.com/) at this point, it's a great way to organize <b>CSS</b> styling within <b>React</b>.

- An <b>interesting snippet</b> of code from this project is the code that I used to <b>dynamically render</b> the `<Card/>`content. In Mobile view the `image` within the `<Card/>` is rendered on the top and the `text` is rendered underneath. <i>BUT</i> on the <b>Desktop</b> view the `image` and the `text` are rendered on the same line, and alternate left/right positions within each `<Card/>` 
  - So in `Card.styled.js` I used 

  ````
  @media (min-width: ${({ theme }) => theme.tablet}) {
      flex-direction: ${({ layout }) => layout || "row-reverse"};
      ...
  }
  ````
  - and in `<Card/>` I alternated the `flex-direction` based on the card `id` using

  ````
  <StyledCard layout={id % 2 === 0 && "row"}>
  ````
  - To get this

  <img src="./design/card.png" alt="" width="400"/>


## Continued development

- [ ] Add <b>components</b> for all of the <b>links</b>
  - [ ] `<TryPage/>` which would link from the<b>"Try for Free"</b> and <b>"Get Started for free"</b> buttons
  - [ ] `<About/>` which would link from the<b>About</b> link in the footer
  - [ ] `<WhatWeDo/>` which would link from the <b>What We Do</b> link in the footer
  - [ ] `<FAQ/>` which would link from the <b>FAQ</b> link in the footer
  - [ ] `<Career/>` which would link from the <b>Career</b> link in the footer
  - [ ] `<Blog/>` which would link from the <b>Blog</b> link in the footer
  - [ ] `<Contact/>` which would link from the <b>Contact</b> link in the footer
- [ ] Use <b>Jest</b> testing framework to add a few tests for the <b>React</b> code


## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)
