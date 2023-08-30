# React Project With Tailwind CSS Template

## Introduction

This is meant to be used as a React Project Template, bootstraped using [Create React App](create-react-app.dev), and using [Tailwind CSS](tailwindcss.com) as the styling library


## Installed Dependencies

The project also includes other dependencies that are commonly used in React Applications.

These include:

[React Router](https://reactrouter.com) ~> Declarative Client side Routing For React Applications.

[Framer Motion](framer.com.motion) ~> Animation library compatible with React.

[@tailwindcss/forms](tailwindcss-forms.vercel.app) ~> A Tailwind CSS plugin that applies some default styling to form Components.

## Folder Structure

As is, React does not enforce any folder structure, whatever works for you, right? It has been said repeatedly that this causes confusion while working on teams, so to train some discipline into myself, I have implemented the **Directory per View** folder structure described in this **[Post](https://survivejs.com/react/advanced-techniques/structuring-react-projects/).**

It implements a sort of [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) style while approaching react projects.

It basically breaks down to this :

	/src
	|----/Actions (contains connectors of your application to outside resources (APIS, AXIOS) and the like)
	|	|--LoginAction.js
	|	|--SignupAction.js
	|----/Components (contains UI logic of the application)
	|	|---/App
	|	|	|--App.jsx /tsx
	|	|	|--App.css (if any)
	|	|---/About
	|	|	|--About.jsx
	|	|	|--About.css
	|----/Contexts (contains the state which has to be shared across components)
	|	|---/pageContext
	|	|	|--index.js (Exports consumers providers....)
	|	|	|--Context1.js (Contains part of the state)
	|	|	|--Context2.js
	|----/Stores
	|	|---AuthenticateStore.js
	|	|---ActionStore.js
	|----/Views / Pages (contains the different routes / views in the applications)
	| |---/Homepage
	| | |--Home.jsx
	|	|	|--Home.css
	|----/Assets (static assets, images etc)
	| | |---/Images
	| | | |--hello.png


## Install dependencies

	npm i (npm i --legacy-peer-deps) : if there are any

## Run Application

	npm run start / npm start