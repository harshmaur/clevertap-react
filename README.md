# clevertap-react
Wrapper to integrate Clevertap with ReactJS Applications


### Usage

- Installation `npm install --save clevertap-react`
- Initialize in your root

```js
import ClevertapReact from 'clevertap-react';

ClevertapReact.initialize("CLEVERTAP_ACCOUNT_ID");
```

### API

First import library in your component 

`import ClevertapReact from 'clevertap-react';`

- Push Event

```js
var payload = {
  "Product name":"Casio Chronograph Watch",
  "Category":"Mens Accessories",
  "Price":59.99,
}

ClevertapReact.event("Product Viewed", payload)

// Payload is optional, if you dont want to pass it, you can just do 
ClevertapReact.event("Product Viewed")
```

- Profile Push
```js
var payload = {
  "Site": {
   "Name": "Jack Montana", // User's name
   "Age": 28
 }
}

ClevertapReact.profile(payload)
```

- Logout
```js
ClevertapReact.logout()
```


### TODO

- [ ] Documentation
- [ ] Examples
- [ ] Push Notifications.