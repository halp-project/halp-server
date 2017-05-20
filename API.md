# API Definition
# Auth
## Workers signup
```
POST /workers/signup
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| --- |
| username | String | Worker username |
| password | String | Worker password |
| role | String | Worker role: <br> * *assistant* <br> * *book* <br> * *food* <br> * *kiosk* <br> * *admin* |

**Response**

```
Status 200

{
  "id_token": "aleatory-token"
}
```

```
Status 400

{
  "message": "Please, complete all fields"
}
```

```
Status 409

{
  "message": "A user with that username already exists"
}
```

```
Status 500

{
  "message": "Error creating the user"
}
```

## Workers login
```
POST /workers/login
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| username | String | Worker username |
| password | String | Worker password |

**Response**
```
Status 200
  
{
  "id_token": "aleatory-token",
  "role": "user-role"
}
```

```
Status 400

{
  "message": "You must send the username and the password"
}
```

```
Status 401

{
  "message": "The username or password don't match"
}
```

## Patients Login
```
POST /patients/login
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| username | String | Patient username |
| password | String | Patient password |

**Response**
```
Status 200
  
{
  "id_token": "aleatory-token",
  "username": "john"
}
```

```
Status 400

{
  "message": "You must send the username and the password"
}
```

```
Status 401

{
  "message": "The username or password don't match"
}
```

# Books
## Add book
```
POST /books
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| title | String | Book title |
| author | String | Author |
| description | String | Description |
| image | String | Image URL |

**Example**
```
{
  "title": "Sprint : How to Solve Big Problems and Test New Ideas in Just 5 Days",
  "author": "Jake Knapp y John Zeratsky",
  "description": "The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg"
}
```

**Response**
```
Status 201
  
{
  "id": 33,
  "title": "Sprint : How to Solve Big Problems and Test New Ideas in Just 5 Days",
  "author": "Jake Knapp y John Zeratsky",
  "description": "The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg"
}
```

## Remove book
```
DELETE /books/:id
```

**Response**
```
Status: 204 No Content
```

```
Status: 404 Not Found
{
  "message": "Not existing book"
}
```

## Edit book
```
PUT /books/:id
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| title | String | Book title |
| author | String | Author |
| description | String | Description |
| image | String | Image URL |

**Example**
```
{
  "title": "Sprint : How to Solve Big Problems and Test New Ideas in Just 5 Days",
  "author": "Jake Knapp y John Zeratsky",
  "description": "The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg"
}
```

**Response**
```
Status 200
  
{
  "id": 33,
  "title": "Sprint : How to Solve Big Problems and Test New Ideas in Just 5 Days",
  "author": "Jake Knapp y John Zeratsky",
  "description": "The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg"
}
```

## Get Books
```
GET /books
```

**Response**
```
Status 200
  
[
  {
    "id": 33,
    "title": "Sprint : How to Solve Big Problems and Test New Ideas in Just 5 Days",
    "author": "Jake Knapp y John Zeratsky",
    "description": "The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.",
    "image": "https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg"
  },
  ...
]
```

## Order a Book
```
POST /books/order
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| date | String | Date |
| patient | String | Patient username |
| referenceNumber | number | Book ID |

**Example**
```
{
  "date": "2017-5-1T14:00:00Z",
  "patient": "john",
  "referenceNumber": 33
}
```

**Response**
```
Status 201
  
{
  "id": 600,
  "date": "2017-5-1T14:00:00Z",
  "patient": "john",
  "referenceNumber": 33
}
```

# Meals
## Get Next Menu
```
GET /menus/next
```

**Response**
```
Status 200
  
{
  "date": "2017-5-1T14:00:00Z",
  "firstCourses": [
    {
      "name": "Salad",
      "description": "Tomatoes, lettice and bacon.",
      "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
    },
    ...
  ],
  "secondCourses": [
    {
      "name": "Salad",
      "description": "Tomatoes, lettice and bacon.",
      "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
    },
    ...
  ],
  "desserts": [
   {
      "name": "Salad",
      "description": "Tomatoes, lettice and bacon."
      "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
    },
    ...
  ]
}
```

## Menu choice
```
POST /menus/order
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| date | String | Date |
| patient | String | Patient username |
| firstCourse | number | Dish ID |
| secondCourse | number | Dish ID |
| dessert | number | Dish ID |

**Example**
```
{
  "date": "2017-5-1T14:00:00Z",
  "patient": "john",
  "firstCourse": 33,
  "secondCourse": 43,
  "dessert": 53
}
```

**Response**
```
Status 201
  
{
  "id": 33,
  "date": "2017-5-1T14:00:00Z",
  "patient": "john",
  "firstCourse": 33,
  "secondCourse": 43,
  "dessert": 53
}
```


# Items

## Get Items
```
GET /items
```

**Response**
```
Status 200
  
[
  {
    "id": 12,
    "name": "The Times",
    "price": 1.5,
    "image": "https://upload.wikimedia.org/wikipedia/en/3/3e/The-Times-5-June-2013.jpg",
    "description": "the description of this..."
  },
  ...
]
```

## Order a product

```
POST /items/order
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| date | String | Date |
| patient | String | Patient username |
| referenceNumber | number | Product ID |

**Example**
```
{
  "date": "2017-5-1T14:00:00Z",
  "patient": "john",
  "referenceNumber": 33
}
```

**Response**
```
Status 201
  
{
  "id": 600,
  "date": "2017-5-1T14:00:00Z",
  "patient": "john",
  "referenceNumber": 33
}
```

# Order

## Remove order
```
DELETE /orders/:id
```

**Response**
```
Status: 204 No Content
```

```
Status: 404 Not Found
{
  "message": "Not existing order"
}
```

## Change state order
```
PUT /orders/:id
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| completed | Boolean | State value |

**Example**
```
{
  "completed": true
}
```

**Response**
```
Status 200
  
{
    "id": 12,
    "date": "2017-04-04 18:05",
    "patient": { ... },
    "type": "...",
    "completed": true,
    "description": "Description: ..." 
  }
```

## Get Orders
```
GET /orders
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| user | String | Filter by user. |


**Response**
```
Status 200
  
[
  {
    "id": 12,
    "date": "2017-04-04 18:05",
    "patient": { ... },
    "type": "...",
    "completed": true,
    "description": "Description: ..." 
  },
  ...
]
```

# Patients
## Add patient
```
POST /patients
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| username | String | User name to login |
| password | String | Password to login |
| name | String | Name of the patient |
| lastname | String | Last name of the patient |
| birthdate | Date | Birth date of the patient |
| room | String | Room identifier |
| description | String | Description of the patient |

**Example**
```
{
  "username": "halp_user01",
  "password": "passwd01",
  "name": "John",
  "lastname": "Smith",
  "birthdate" : "1975-01-04",
  "room": "A1001",
  "description": "John Smith is a ..."
}
```

**Response**
```
Status 201
  
{
  "id": 1,
  "username": "halp_user01",
  "name": "John",
  "lastname": "Smith",
  "birthdate" : "1975-01-04",
  "room": "A1001",
  "description": "John Smith is a ..."
}
```

## Remove patient
```
DELETE /patients/:id
```

**Response**
```
Status: 204 No Content
```

```
Status: 404 Not Found
{
  "message": "Not existing patient"
}
```

## Edit patient
```
PUT /patients/:id
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| username | String | User name to login |
| password | String | Password to login |
| name | String | Name of the patient |
| lastname | String | Last name of the patient |
| birthdate | Date | Birth date of the patient |
| room | String | Room identifier |
| description | String | Description of the patient |

**Example**
```
{
  "username": "halp_user01",
  "password": "passwd01",
  "name": "John",
  "lastname": "Smith",
  "birthdate" : "1975-01-04",
  "room": "A1001",
  "description": "John Smith is a ..."
}
```

**Response**
```
Status 200
  
{
  "id": 1,
  "username": "halp_user01",
  "password": "passwd01",
  "name": "John",
  "lastname": "Smith",
  "birthdate" : "1975-01-04",
  "room": "A1001",
  "description": "John Smith is a ..."
}
```

## Get Patients
```
GET /patients
```

**Response**
```
Status 200
  
[
  {
    "id": 1,
    "username": "halp_user01",
    "name": "John",
    "lastname": "Smith",
    "birthdate" : "1975-01-04",
    "room": "A1001",
    "description": "John Smith is a ..."
  },
  ...
]
```
