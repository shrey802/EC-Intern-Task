# EC FRONTEND DEVELOPER INTERNSHIP TASK

## Overview

This project is a front-end application developed for the EC Frontend Developer Internship task. It demonstrates the implementation of task given in Notion Page.

## Deployment on Vercel 
## Vercel Link - https://ec-intern-task.vercel.app/

## Features

- **AJAX Search**: Efficient client-side searching of products by title.
- **User Authentication**: 
  - **Login**: Users can log in to their accounts.
  - **Signup**: New users can create an account.
- **Product Listing**: 
  - Display products in a grid layout with pagination (8 products per page).
  - Each product card includes a tilted price tag for better visibility.
  - Product images are displayed alongside product titles and prices.

## Technologies Used

- **React & Vite**: JavaScript library for building user interfaces.
- **CSS**: For styling the components.

## API Endpoints

The application interacts with the following API endpoints:

### Health Check

- **GET** `/health`
  - Checks if the API is up and running.
  
### User Authentication

- **POST** `/auth/signup`
  - Create a new user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```
  
- **POST** `/auth/login`
  - Log in an existing user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

### User Details

- **GET** `/api/me`
  - Retrieve the details of the logged-in user.

### Product Management

- **GET** `/getproducts`
  - Fetch the list of products.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
2. **Install Dependencies**:
   ```bash
   npm install
3. **Start Development Server**:
   ```bash
   npm run dev
4. **Open your browser and navigate to ```http://localhost:3000```**.
