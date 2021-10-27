# Imran Ilyas Portfolio Page
A React Application designed to illustrate some of my projects and experience.
Visit it here: http://imranilyas.github.io/portfolio

## Features
* React Navigation
* React Modal
* React Github Pages - deployed by following https://github.com/gitname/react-gh-pages

## Walkthrough
Each component may be navigated to by clicking on any of the icons located in the navbar on the left side of the screen.

### Home Component
The home component is the landing page of this react application. It features a synopsis of myself as well as a few icons that represent some of my recent work experience. By hovering over each icon, a message with the name the icon represents is displayed.

<p align="center">
 <img src = "public/markdown-photos/Home Component PC.png" alt="Home Screen for PC" height="400" />
</p>

### Background Component
The background component gives additional information regarding my path to being a software developer / engineer. It is split into three cards: education, internship and work experience. Within the "Internship" card contains a link to a Unity game that I created. Inside the "Experience" card contains a link to my GitHub.

<p align="center">
 <img src = "public/markdown-photos/Background Component PC.png" alt="Background Screen for PC" height="400" />
</p>

### Projects Component
The projects component showcases three projects that I have recently worked on. Each photo is a modal. By clicking on it, it will show an enlarged project photo and white out the rest of the screen. The user may either press "Escape" key or click off the photo to leave the modal screen. 

<p align="center">
 <img src = "public/markdown-photos/Projects Component PC.png" alt="Projects Screen for PC" height="400" />
</p>

### Contact Component
The contact component holds methods of getting ahold of me. Nothing much there other than some hover and active selectors that change upon hovering over and clicking the GitHub or LinkedIn icons. My resume is also attached in pdf format with which I created the template for.

<p align="center">
 <img src = "public/markdown-photos/Contact Component PC.png" alt="Contact Screen for PC" height="400" />
</p>

## Mobile-Friendly
In order to make the website more mobile-friendly, there are media queries with a max-width of 450px to decrease font-size, adjust the navbar, and change the spacing. The main difference between viewing the application on a phone vs a computer is that the navbar changes. Instead of being fixed on the application, it is now opened through a button located at the top of the screen. Once the button is pressed, the navbar is opened and the rest of the screen is blurred. To close the navbar, the user may either click on one of the icons in the navbar or click off the navbar.

<p align="center">
 <img src = "public/markdown-photos/Mobile Home.PNG" alt="Home Screen on Phone" height="600" />
 <img src = "public/markdown-photos/Mobile Navbar.PNG" alt="Navbar on Phone" height="600" />
 <img src = "public/markdown-photos/Mobile Background.PNG" alt="Background Screen on Phone" height="600" />
 <img src = "public/markdown-photos/Mobile Projects.PNG" alt="Projects Screen on Phone" height="600" />
 <img src = "public/markdown-photos/Mobile Contact.PNG" alt="Contact Screen on Phone" height="600" />
</p>

## Future Iterations
* More media queries to make the application more responsive
* Making the navbar scroll and have a height of the view height (specifically for mobile-devices)
  * The navbar no longer scrolls when it hits <=450px in screen width; the reason being it no longer has the set height but the issue with that is on the phone it doesn't hit the entire height of the screen even though it was set to 100vh.

## License
[MIT](https://github.com/imranilyas/portfolio/blob/94a467e9d5322a1a605554aff90b6e8e89c25179/LICENSE)

## First Static Web Page (Aside)
This was my first experience in working on the frontend.
https://github.com/imranilyas/imranilyas.github.io
