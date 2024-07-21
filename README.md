# Logistics/Product Tracking Application Project

## A simple MERN stack application for getting information about ordered goods/products

# Guide on how to run the project

## Run the npm install command in both the "client" and "server" directories to install all necessary packages

## Frontend

- The frontend part of this project is a simple form created with React and Ant Design component library

- It's a simple form to collect the tracking number of products ordered by customers

- To start up the frontend, from your cli, cd into the "client" directory and type "npm run dev" command

- Go into your preferred browser and type localhost:5173, if everything works properly you should see a simple form.

## Backend

- The backend is a simple API that fetches the product from the database

- It was built with Express, MongoDB and NodeJS

- To start up the backend, from your cli, cd into the server directory and type the "npm run dev" command

- If everything works, in your cli you should see "Connected to Database" and "Server is running on port 3000"

## How to view information about the products

- Each product has a specified tracking number

- List of tracking numbers for the products = [12345, 23456, 34567, 45678, 56789]

- In the backend there are already dummy products stored in the database

- To view the products, in the form input the tracking numbers and it displays information about the products