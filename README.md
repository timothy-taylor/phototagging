The Odin Project Assignment: make a photo tagging app.

I originally built this app using a Rails API as the backend with the React frontend using axios to make API calls. This functionality worked as expected, but it felt unnecessary (and kind of overkill) to deploy a Rails app to Heroku just to get the API data for a few different objects. I refactored so that the React app contains the data from the start and now it can be easily deployed using Github pages.

check it [live](https://timothy-taylor.github.io/odin_phototagging_react/)
