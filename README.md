# mini-jukebox

### Description
This is a simple AngularJS app that pulls API data from Rockbot and displays it in an intuitive way. By default, it pulls data from the jukebox setup at Rockbot HQ in Oakland, CA. **Live Demo:** [https://altwallet.io/jukebox](https://altwallet.io/jukebox)

### Instructions
1. Clone this repository
2. Run `npm install`
3. Modify `/src/index.js` to suit your needs
4. Run `npx webpack` to build the project
5. Upload `/dist/` to your web server

### Features
* See current "Now Playing" song
* See upcoming songs + # of votes
* See top users/DJ's
* See top played artists
* Loading spinners
* Checks for new data every 30 seconds
* Auto-updating UI

### To-Do
* Make more mobile-friendly
* Test on mobile devices
* Implement multiple views (& URL paths) using AngularJS states

Copyright (C) 2018 Seena Zandipour. All Rights Reserved.