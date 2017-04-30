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
| role | String | Worker role: <br> * *assistant* <br> * *books* <br> * *meals* <br> * *shop* <br> * *manager* |

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
Status 401

{
  "message": "A user with that username already exists"
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
  "id_token": "aleatory-token"
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
  "id_token": "aleatory-token"
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
POST /books/new
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
  "id": "33",
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
  "id": "33",
  "title": "Sprint : How to Solve Big Problems and Test New Ideas in Just 5 Days",
  "author": "Jake Knapp y John Zeratsky",
  "description": "The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg"
}
```

# Meals
## Add Dish
```
POST /dishes/new
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
| name | String | Name |
| description | String | Description |
| image | String | Image URL |

**Example**
```
{
  "name": "Salad",
  "description": "Tomotoes, lettice and bacon.",
  "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
}
```

**Response**
```
Status 201
  
{
  "id": "33",
  "name": "Salad",
  "description": "Tomotoes, lettice and bacon.",
  "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
}
```

## Remove book
```
DELETE /dishes/:id
```

**Response**
```
Status: 204 No Content
```

```
Status: 404 Not Found
{
  "message": "Not existing dish."
}
```

## Edit book
```
PUT /dish/:id
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| :--- |
| name | String | Name |
| description | String | Description |
| image | String | Image URL |

**Example**
```
{
  "name": "Salad",
  "description": "Tomotoes, lettice and bacon.",
  "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
}
```

**Response**
```
Status 200
  
{
  "id": "33",
  "name": "Salad",
  "description": "Tomotoes, lettice and bacon.",
  "image": "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjknLawgs3TAhULVxQKHfbcAvMQjRwIBw&url=http%3A%2F%2Fjetspizza.com%2Fmenu%2Fsalads&psig=AFQjCNE447cnpJfGRhiwiN5Hys_XLrgpmQ&ust=1493670502918204"
}
```
