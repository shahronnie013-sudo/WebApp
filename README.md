<<<<<<< HEAD
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
=======

# Brew And Blossom Cafe

# Brew And Blosssom - Cafe Ordering System

## Group Information

**Group Name**: G6
**Section**: 6

**Group Members** :
1. AIMAN SHAH RONNIE BIN REDZUAN - 2312441

2. ABAS AHMAD BIN MOHD AZUDIN - 2319575
   
3. MOHAMAD AMIRUL LUQMAN BIN MOHD TAUFIK - 2313871
   
4. FAREEZ ZAKWAN BIN ROS SAZALEE - 2316847

## Project Overview

Introduction

Brew And Blossom (WebApp) is a web-based student product ordering system developed using the Laravel framework.
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
git clone git clone https://github.com/shahronnie013-sudo/WebApp.git
cd WebApp

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
The Brew And Blossom project successfully demonstrates a functional Laravel-based web application implementing core web development
concepts such as MVC architecture, database relationships, and authentication. 
This project strengthens understanding of backend development and prepares students for real-world web application development.

### Project Impact
This project provides practical experience in building real-world web applications and demonstrates the ability to work collaboratively in a team environment.
The skills gained through this project are directly applicable to professional web development scenarios.

-Project Completion Date: 16/1/2026
-Course: INFO 3305 Web Application Development
>>>>>>> d62c62d02be38ce9c79ceb6b419b7969e5c03304
