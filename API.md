# API Definition
# Auth
## Workers signup
```
POST /workers/signup
```

**Parameters**

| Name | Type | Description |
| :---: |:---:| ---|
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
