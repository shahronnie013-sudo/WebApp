# BrewAndBlossom

# BrewAndBlosssom - Cafe Ordering System

## Group Infromation

**Group Name**: G6
**Section**: 6

**Group Members** :
-AIMAN SHAH RONNIE BIN REDZUAN - 2312441
-ABAS AHMAD BIN MOHD AZUDIN - 2319575
-MOHAMAD AMIRUL LUQMAN BIN MOHD TAUFIK - 2313871
-FAREEZ ZAKWAN BIN ROS SAZALEE - 2316847

## Project Overview

Introduction

BrewAndBlossom (myFolio) is a web-based student product ordering system developed using the Laravel framework.
The system allows users (students) to browse available products, place orders, and manage their order history. Administrators can manage student data, products, and orders through a structured backend system.
This project demonstrates the implementation of MVC architecture, database relationships, and CRUD operations using Laravel.

## Project Objectives

Primary Objective:
To develop a functional web-based ordering system using Laravel.

Technical Objective:
To apply Laravel MVC architecture, routing, controllers, models, and database relationships.

Learning Objective:
To gain hands-on experience in web application development using PHP and Laravel.

## Target Users

Students – Browse products and place orders

Administrators – Manage students, products, and orders

## Features and Functionalities

**Student Features**

User registration and login
Browse available products
Place product orders
View order history
Profile management

**Admin Features**

Manage student records
Product management (add, update, delete)
View and manage orders
Monitor order items and quantities

## Technical Implementation

**Technology Stack**

Backend Framework: Laravel
Frontend: Blade Templates
Database: MySQL
Authentication: Laravel built-in authentication
Development Environment: XAMPP
Programming Language: PHP

**Database Design**

-Main Tables
users – Stores user and admin information
bnb_users / students – Stores student-related data
products – Stores product information
orders – Stores order records
order_items – Stores items within each order

-Relationships
A user can have many orders (One-to-Many)
An order can have many order items (One-to-Many)
A product can appear in many order items (One-to-Many)

### Entity Relationship Diagram (ERD)

https://docs.google.com/document/d/16q2ztLwqYeM9fK6OcrbTkN7hN2jJKh5mlf0w2bhdp60/edit?usp=sharing

**Laravel Components Implementation**

-Controllers

StudentsController – Manages student-related operations
Controller – Base controller for the application

-Models

User – Handles authentication and user data
BnbUser – Handles student information
Product – Handles product data
Order – Handles order records
OrderItem – Handles order-product relationships

-Views

Blade templates for:
Product listing
Order management
Student pages
Admin dashboard

## User Authentication System

**Authentication Features**
Login and logout functionality
Role-based access (student/admin)
Secure password hashing

**Security Measures**
CSRF protection
Input validation
Laravel authentication middleware

## Installation and Setup Instructions
### Prerequisites
-PHP >= 8.x
-Composer
-MySQL
-XAMPP

## Step by step Installation

1.Clone the Repository

bash/n
git clone git clone https://github.com/your-username/brewandblossom.git
cd brewandblossom

2.Open terminal in project directory
composer install

3.Create environment file
cp .env.example .env
php artisan key:generate

4.Configure database in .env

5.Run migrations
php artisan migrate

6.Start the server
php artisan serve

## Testing and Quality Assurance

### Testing Performed
User login and authentication
Product listing display
Order creation and storage
Database relationship testing
CRUD operations for products and orders

### Browser Compatibility
-  Google Chrome (Latest)
-  Mozilla Firefox (Latest)
-  Safari (Latest)
-  Microsoft Edge (Latest)

## Challenges faced and Solutions
### Challenge 1: Database Relationships
Problem: Linking orders with products
Solution: Implemented Order and OrderItem models with proper Eloquent relationships

### Challenge 2: MVC Structure Understanding
Problem: Separating logic between controller, model, and view
Solution: Followed Laravel MVC best practices and official documentation

## Future Enhancements
Online payment integration
Order status tracking
Search and filter products
Improved UI design
Role-based dashboard enhancements

### Scalability Considerations
Database optimization for larger datasets
Caching implementation for improved performance
API development for mobile app integration
Load balancing for high traffic scenarios

## Learning Outcomes
### Technical Skills
Laravel MVC architecture
Database design and relationships
CRUD operations
Blade templating
PHP web development

### Soft Skills
Problem-solving
Debugging
Project documentation
Time management

## References

1. Laravel Documentation. (2024). Laravel 10.x Documentation. Retrieved from https://laravel.com/docs/10.x
2. Bootstrap Documentation. (2024). Bootstrap 5.3 Documentation. Retrieved from https://getbootstrap.com/docs/5.3/
3. MySQL Documentation. (2024). MySQL 8.0 Reference Manual. Retrieved from https://dev.mysql.com/doc/refman/8.0/en/
4. MDN Web Docs. (2024). Web Development Resources. Retrieved from https://developer.mozilla.org/

## Conclusion
The myFolio project successfully demonstrates a functional Laravel-based web application implementing core web development
concepts such as MVC architecture, database relationships, and authentication. 
This project strengthens understanding of backend development and prepares students for real-world web application development.

### Project Impact
This project provides practical experience in building real-world web applications and demonstrates the ability to work collaboratively in a team environment.
The skills gained through this project are directly applicable to professional web development scenarios.

-Project Completion Date: 16/1/2026
-Course: INFO 3305 Web Application Development
