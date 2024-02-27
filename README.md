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
PUT    | /user/profile    | YES   | user | Update own profile       | `fullName`, `email`, `dni` , `phone`                                        | { message: 'User created successfully', data: [`user`]}
PUT    | /user/password   | YES   | user | Reset password           | `newPassword` `repeatPassword`                                              | { message: 'Password reset successfully'}
PUT    | /user/:userId    | YES   | admin| Update one user          | `params: fullName`, `email`, `password`, `dni` , `phone`                    | { message: 'User updated successfully', data: [`user`]}
DELETE | /user/:userId    | YES   | admin| Delete one user          |  `params: userId`                                                           | { message: 'User deleted successfully', data: [`user`]}
DELETE | /user/profile    | YES   | user | Delete own profile       |                                                                             | { message: 'User deleted successfully', data: [`user`]}

### Suscription Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION                     | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|---------------------------------|-------------------------------------------------|--------------------
GET    | /suscription            | NO    | user | Get all suscriptions            |                                                    | { message: 'Posts fetched successfully', data: [`suscription`]}
POST   | /suscription/:userId    | YES   | user | Choose one Suscription          |   `params: userId, type`                         | { message: 'Posts fetched successfully', data: [`suscription`]}
DELETE | /suscription/:userId    | YES   | user | Delete own suscription          |   `params: userId`                               | { message: 'Post fetched successfully', data: `suscription`}
PUT    | /suscription/:userId    | YES   | user | Change own suscription          |   `params: userId, type`                            | { message: 'User liked post successfully', data: `suscription`}

### Class Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /class                   | NO    | user | Get all classes of all sports          |                                  | { message: 'Posts fetched successfully', data: [`post`]}
GET    | /class/:sportId          | NO    | user | Get all classes filtered by sport      |   `params: classId, sportId`     | { message: 'Posts fetched successfully', data: [`post`]}
GET    | /class/:userId           | YES   | user | Get all classes the user booked        |  `params: userId, classId`       | { message: 'Posts fetched successfully', data: [`post`]}
POST   | /class/bookClass         | YES   | user | Book a class                           |   `params: userId, classId`      | { message: 'Posts fetched successfully', data: [`post`]}
POST   | /suscription/             | YES   | admin | Create a class          |   `params: sportId` , `Start`, `Finish`,`Duration`,`Days`    | { message: 'Posts fetched successfully', data: [`suscription`]}
DELETE | /suscription/:classId   | YES   | admin | Delete a class          |   `params: classId`                               | { message: 'Post fetched successfully', data: `suscription`}
DELETE | /class/cancelBook        | YES   | user | cancel a booked class                   |   `params: userId, classId`      | { message: 'Posts fetched successfully', data: [`post`]}
PUT    | /class/:classlId         | YES   | admin| Update class information              | `params: classId`,`sportId` , `Start`, `Finish`,`Duration`,`Days` | { message: 'User updated successfully', data: [`user`]}


### Sport Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /sport                   | NO   | user | Get all sports          |                                  | { message: 'Posts fetched successfully', data: [`post`]}

### Room Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /room                    | YES   | admin | Get all rooms          |                                  | { message: 'Posts fetched successfully', data: [`post`]}
GET    | /room/:roomId          | YES   | admin | Get one room      |   `params: classId, sportId`     | { message: 'Posts fetched successfully', data: [`post`]}
POST   | /room/         | YES   | admin | create a room                           |   `params: userId, classId`      | { message: 'Posts fetched successfully', data: [`post`]}
PUT    | /room/:roomId    | YES   | admin| Edit one room          | `params: fullName`, `email`, `password`, `dni` , `phone`                    | { message: 'User updated successfully', data: [`user`]}
DELETE | /room/:roomId        | YES   | admin | delete a room                   |   `params: userId, classId`      | { message: 'Posts fetched successfully', data: [`post`]}

### materials Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /material                    | YES   | admin | Get all material                |                                  | { message: 'Posts fetched successfully', data: [`post`]}
GET    | /material/:roomId          | YES   | admin | Get all material from a room      |   `params: classId, sportId`     | { message: 'Posts fetched successfully', data: [`post`]}
GET    | /material/:name          | YES   | admin | Get all material of the same type   |   `params: materialName`     | { message: 'Posts fetched successfully', data: [`post`]}
POST   | /material/:roomId         | YES   | admin | Add material to a room             |   `params: roomId`      | { message: 'Posts fetched successfully', data: [`post`]}
PUT    | /material/:materialId    | YES   | admin| Update material                      | `params: materialName`, `description`, `roomId`      | { message: 'User updated successfully', data: [`user`]}
DELETE | /material/:materialId        | YES   | admin | delete a material               |   `params: materialId`      | { message: 'Posts fetched successfully', data: [`post`]}






