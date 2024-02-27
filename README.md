# Sportify
Project 2: Backend 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------|-----------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `fullName`, `email`, `password`, `dni` , `phone`                            | { message: 'User signed up successfully', data: `token`}
POST   | /auth/login      | -     | user | User Login               | `email`, `dni`, `password`                                                  | { message: 'User logged up successfully', data: `token`}

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------|-----------------------------------------------------------------------------------|--------------------
GET    | /user            | YES   | admin | Get All Users           |                                                                             | { message: 'List of all users', data: [`user`]}
GET    | /user/profile    | YES   | user | Get Own Profile          |                                                                             |  { message: 'User fetched successfully', data: [`user`]}
GET    | /user/:userId    | YES   | admin | Get One User            | `params: userId`                                                            |  { message: 'User fetched successfully', data: [`user`]}
PUT    | /user/password   | YES   | user | Reset password           | `newPassword` `repeatPassword`                                              | { message: 'Password reset successfully'}
PATCH    | /user/profile    | YES   | user | Update own profile       | `fullName`, `email`, `dni` , `phone`                                        | { message: 'User created successfully', data: [`user`]}
PATCH    | /user/:userId    | YES   | admin| Update one user          | `params: fullName`, `email`, `password`, `dni` , `phone`                    | { message: 'User updated successfully', data: [`user`]}
DELETE | /user/:userId    | YES   | admin| Delete one user          | `params: userId`                                                            | { message: 'User deleted successfully', data: [`user`]}
DELETE | /user/profile    | YES   | user | Delete own profile       | `params: userId`                                                            | { message: 'User deleted successfully', data: [`user`]}

### Suscription Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION                     | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|---------------------------------|-------------------------------------------------|--------------------
GET    | /suscription            | NO    | user | Get all suscriptions            |                                                    | { message: 'List of suscriptions', data: [`suscription`]}
POST   | /suscription/:userId    | YES   | user | Choose one Suscription          |   `params: userId, type`                         | { message: 'Suscription choosed successfully', data: [`suscription`]}
PATCH    | /suscription/:userId    | YES   | user | Change own suscription          |   `params: userId, type`                            | { message: 'Suscription changed successfully', data: `suscription`}
DELETE | /suscription/:userId    | YES   | user | Delete own suscription          |   `params: userId`                               | { message: 'Suscription deleted successfully', data: `suscription`}


### Class Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /class                   | NO    | user | Get all classes of all sports          |                                  | { message: 'List of all classes', data: [`class`]}
GET    | /class/:sportId          | NO    | user | Get all classes filtered by sport      |   `params: classId, sportId`     | { message: 'List of all classes by sport', data: [`class`]}
GET    | /class/:userId           | YES   | user | Get all classes the user booked        |  `params: userId, classId`       | { message: 'List of booked classes', data: [`class`]}
POST   | /class/bookClass         | YES   | user | Book a class                           |   `params: userId, classId`      | { message: 'Class booked successfully', data: [`class`]}
POST   | /class/             | YES   | admin | Create a class          |   `params: sportId` , `Start`, `Finish`,`Duration`,`Days`    | { message: 'Class created successfully', data: [`class`]}
PATCH  | /class/:classId         | YES   | admin| Update class information              | `params: classId`,`sportId` , `Start`, `Finish`,`Duration`,`Days` | { message: 'Class updated successfully', data: [`class`]}
DELETE | /class/:classId   | YES   | admin | Delete a class          |   `params: classId`                               | { message: 'Class deleted successfully', data: `class`}
DELETE | /class/:classId/:userId        | YES   | user | cancel a booked class                   |   `params: userId, classId`      | { message: 'Class canceled successfully', data: [`class`]}


### Sports Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /sports                   | NO   | user | Get all sports          |                                  | { message: 'List of all sports availables', data: [`sports`]}
POST   | /sports/:sportId    | YES   | admin | Create a sport Suscription          |   `params: sportId`                         | { message: 'Sport created successfully', data: [`sports`]}
PATCH    | /sports/:sportId    | YES   | admin | Edit a sport          |    `params: sportId`                             | { message: 'Sport updated successfully', data: `sports`}
DELETE | /sports/:sportId    | YES   | admin | Delete Sport          |    `params: sportId`                               | { message: 'Sport deleted successfully', data: `sports`}


### Room Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /room                    | YES   | admin | Get all rooms          |                                  | { message: 'List of rooms', data: [`room`]}
GET    | /room/:roomId          | YES   | admin | Get one room      |   `params: classId, sportId`     | { message: 'Room fetched successfully', data: [`room`]}
POST   | /room/         | YES   | admin | create a room                           |   `params: userId, classId`      | { message: 'Room created successfully', data: [`room`]}
PATCH    | /room/:roomId    | YES   | admin| Edit one room          | `params: fullName`, `email`, `password`, `dni` , `phone`                    | { message: 'Room updated successfully', data: [`room`]}
DELETE | /room/:roomId        | YES   | admin | delete a room                   |   `params: userId, classId`      | { message: 'Room deleted successfully', data: [`room`]}

### materials Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /material                    | YES   | admin | Get all material                |                                  | { message: 'List of materials availables', data: [`material`]}
GET    | /material/:roomId          | YES   | admin | Get all material from a room      |   `params: roomId`     | { message: 'List of materials available in a room', data: [`material`]}
GET    | /material/:name          | YES   | admin | Get all material of the same type   |   `params: materialName`     | { message: 'Material of the same type available in all rooms', data: [`material`]}
POST   | /material/:roomId         | YES   | admin | Add material to a room             |   `params: roomId`      | { message: 'Material added successfully', data: [`material`]}
PATCH    | /material/:materialId    | YES   | admin| Update material                      | `params: materialName`, `description`, `roomId`      | { message: 'Material updated successfully', data: [`material`]}
DELETE | /material/:materialId        | YES   | admin | delete a material               |   `params: materialId`      | { message: 'Material deleted successfully', data: [`material`]}






