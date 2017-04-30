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
  "username": "john",
  "password": "travolta",
  "role": "manager"
}
```

```
Status 400


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

