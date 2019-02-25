# Word Race
Created for Bowdoin College's Supreme Gaming Hackathon (Feb 24th 2019 10am-5pm), where it won fifth place.

In the simplest terms, the purpose of the game is to type out the most words in the given amount of time.

## Rules
* 4 players, 2 per team
* Teams must collaboratively type as many words as possible in the given amount of time
* Words are scored based on length and rarity (words less often in normal speech are worth more)
* Each player may only type (and submit) one letter at a time
* Players on each team must alternate letters typed
* Players cannot backspace—once a letter is typed and submitted to the server, teams may *only* clear the board by submitting the current word
* Words cannot be repeated (this includes repetition by the other team)

## Tech
* Built using NodeJS and hosted on Heroku (for the record, none of us know JavaScript)
* Uses [express](https://github.com/expressjs/express/) to serve webpages
* Uses [socket.io](https://github.com/socketio/socket.io) for communication between clients and server
