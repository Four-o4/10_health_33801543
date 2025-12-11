# Fitness4you

Uses node.js with Express and EJS, bcrypt and mysql

To install and run:

npm install
node index.js

Access control added to book equpipment, equipment_list and search equipment.

Sanitization added in the first name, last name, username and password:
- first and last name is REQUIRED
- Username must be between 5 - 20 characters long
- password must have a minimum of 8 characters

# STRUCTURE:

# Fitness4you

- Home
- About Fitness4you
- Login
- Become a member!
- View Equipment
- Search bookings
- Book equipment
- Logout
--
-------------------------------------------------------------------------

# About Fitness4you
- *Insert information about website*
--
-------------------------------------------------------------------------

# Log in
- Username:
- password:
--
--------------------------------------------------------------------------

# Become a member!
- FIRST NAME:
- LAST NAME:
- EMAIL:
- USERNAME:
- PASSWORD:
--
-------------------------------------------------------------------------

# View Equipment
- *All available Equipment in our gym*
--
-------------------------------------------------------------------------

# Book Equipment
- Username:
- Equipment name:
- Date:
- Time:
--
-------------------------------------------------------------------------

# Search bookings
- Users are able to search when equipments have been booked; Date and times
--
-------------------------------------------------------------------------

# Logout
- User will be logged out of their account
--
-------------------------------------------------------------------------

