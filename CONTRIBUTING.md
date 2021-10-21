# Contributing to the AnubiBot
We really appreciate it, if you want to contribute to the bot

## Requirements
To get started with the development you need to set up some things.
- A `Node.js` installation with version `16.11.0` or later which you can get from [here](https://nodejs.org/)
- A `git` installation which you can get from [here](https://git-scm.com/)

## Understanding the project
The AnubiBot has four main directories:
- The main directory is the entrypoint of the bot and other important things are located here.
- `listener` - contains all event listener for the bot
- `util` - contains all utility classes for the bot
- `test` - contains all test classes to test various things

Other directories you might need:
- `data` - you must create it manually because it contains files like the config and the database

## Guides
### Adding Listeners
To add a listener to the project first check if it already exists.
If it doesn't exist you can go on, otherwise you should use the listener file you found.
If the listener doesn't exist then create a file with the following name `[event-name]Listener.ts`.
Replace the `[event-name]` part with the name from the discord.js docs.

> Please note that the first letter is always a upper-case letter.

If you have created the file then create a new class with the name of the file that implements the `Listener` interface.
In there you define the register method which is used to register the listener.
There you create a `call` method which has the event arguments a parameters.

Once you have finish creating your listener you implement it in the mai file like every other listener.
In the last step you create a test for the listener.
