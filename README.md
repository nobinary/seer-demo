
# Get Me Some Vidz!!!

## To Install 

* git clone repository
* $ npm i
* $ npm start

## What is this thing?

Get Me Some Vids basically lets you do two things:

1. try your luck by inputting a 2-integer value and retrieving a bunch of videos by a *mystery* artist to broaden your horizons (or maybe just make you feel offended by the sheer quality of 90s boyband videos). Either way, it's a win

2. search for artist info by inputting an artist name

## FAQ

*Why does the loading animation while calling the APIs only last like 2 seconds?*

Well, as of right now, the API loads really quickly and the loading property is only ties to the inital API request and not the iframe load time. 

*Why are there broken YouTubeVideos in the search results?*

The short answer to that is that the urls from the API are not consistent, and send you on a bunch of internal YouTube redirects that for the most part lead to the mobile version of the site. Getting around that would require some AJAX magic that's beyond the scope of this assignment. Conversely, the app is currently refusing to show us Creed videos (id=21), so maybe it's for the best. 