# Bookmark Backend

This is the backend for the Bookmark'd App, using MongoDB through Heroku to form the API for the [React frontend.](https://github.com/gadgetgeek/keb_bmproject_frontend)

## Contributors
- [Brian Anderson](https://github.com/gadgetgeek) (team lead and repo owner)
- [Kerlin Lopes](https://github.com/kerlinlopes)
- [Elikya Bokanga](https://github.com/elikyaB)
- [Wensy DeSousa](https://github.com/wensyd)

## Dependencies

- Cors (v2.8.5)
- Dotenev (v10.0.0)
- Express (v4.17.1)
- Mongoose (v6.0.12)
- Morgan (v1.10.0)
- Nodemon (v2.0.15)

## Models

#### Bookmark Schema
- title: String
- url: String

## Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Test | `/` | Test |
| Index | `/bookmark` | GET request, returns all bookmarks as json |
| Create | `/bookmark` | POST request, uses request body to make a new bookmark |
| Update | `/bookmark/:id` | PUT request, updates the bookmark specified |
| Destroy | `/bookmark/:id` | DELETE request, deletes the bookmark specified |
| Show | `/bookmark/:id` | GET request, shows the bookmark specified |
