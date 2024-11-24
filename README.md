# PROJECT NAME: BookClub BE

BookClub BE is a RESTful API to allows users to manage books in simple and creative ways. The API supports CRUD (Create, Read, Update , Delete) operations enabling users to add new books, retrieve details of existing books, update book data and delete books from the collection.

## FEATURES

- **Get All Book**: Retrieve a list of all the books in the collection.
- **Create Book**: Add new books to the collection with attributes such as Book title, Author and Genre.
- **Each Book**: Identify each book by its unique validated ID.
- **Edit Book**: Modify book details such as title, author and genre.
- **Delete Book**: Remove books from the collection.

## TABLE OF CONTENTS

- TECHNOLOGIES
- PREREQUISITES
- INSTALLATIONS
- RUN INSTRUCTIONS
- REQUIRED PARAMETERS AND REQUEST BODY FORMAT
- API ENDPOINTS
- REQUEST EXAMPLES
- RESPONSE EXAMPLES
- DEPLOYED API LINK

## TECHNOLOGIES

- Node.js
- Express.js
- MongoDB
- Mongoose

## PREREQUISITES

Before you begin, ensure you have the following installed:

- [Node.js] (https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Postman or any API testing tool for testing endpoints.

## INSTALLATIONS

- npm init -y
- npm install express
- npm install dotenv
- npm install mongoose
- npm install nodemon
- npm install cors

## RUN INSTRUCTIONS

- Clone Repository
- Install Dependencies
- Set Up Environment(PORT,MONGODB_URI)
- Run MongoDB
- Start the Server
- Verify API is running
- Test the API using Postman

## REQUIRED PARAMETERS

- URL Parameters: Unique Validated id

## REQUEST BODY FORMAT

- title (String): The title of the book.
- author (String): The author of the book.
- genre (String): The genre of the book.

## API ENDPOINTS

1. Create Book
   POST http://localhost:3000/api/book/create

2. Get All Book
   GET http://localhost:3000/api/book/

3. Edit Book
   PUT http://localhost:3000/api/book/:id

4. Each Book
   GET http://localhost:3000/api/book/:id

5. Delete Book
   DELETE http://localhost:3000/api/book/:id

## REQUEST AND RESPONSE EXAMPLES

- Create Book
  POST http://localhost:3000/api/book/create

**REQUEST**
{
"title": "TAILS BY MOON LIGHT",
"author": "Mike Williams",
"genre": "Comedy"
}
**RESPONSE**
{"\_id":{"$oid":"67435ff6825dfc1f86333b29"},"title":"TAILS BY MOON LIGHT","author":"Mike Williams","genre":"Comedy","__v":{"$numberInt":"0"}}

- Get All Book
  GET http://localhost:3000/api/book/

**REQUEST**
Save and Send

**RESPONSE**
{
"books": [
{
"_id": "6741194a3c155f478235b50a",
"title": "SEVEN DAYS IN THRIJBE",
"author": "Emma Williams",
"genre": "Romance",
"__v": 0
},
{
"_id": "6741194f3c155f478235b50c",
"title": "SEVEN DAYS IN THRIJBE",
"author": "Emma Williams",
"genre": "Romance",
"__v": 0
},
{
"_id": "674119c93c155f478235b50e",
"title": " DAYS ON EARTH",
"author": "Lord Ken",
"genre": "Romance",
"__v": 0
},
{
"_id": "674121c58022677905518eff",
"title": " SIMBI FINISHES FROM SCHOOL",
"author": "Lord Lamba",
"genre": "Horror",
"__v": 0
},
{
"_id": "6741335ed20b528ead8c510e",
"title": "",
"author": "Mike Williams",
"genre": "Comedy",
"__v": 0
},
{
"_id": "67435e4e825dfc1f86333b27",
"title": "TAILS BY MOON LIGHT",
"author": "Mike Williams",
"genre": "Comedy",
"__v": 0
},
{
"_id": "67435ff6825dfc1f86333b29",
"title": "TAILS BY MOON LIGHT",
"author": "Mike Williams",
"genre": "Comedy",
"__v": 0
}
]
}

- Edit Book
  PUT http://localhost:3000/api/book/674119c93c155f478235b50e

**REQUEST**
{
"title": " DAYS ON MARS",
"author": "Lord Ken",
"genre": "Romance"
}

**RESPONSE**
{
"message": "Book Updated Successfully"
}

- Each Book
  GET http://localhost:3000/api/book/6741194a3c155f478235b50a

**REQUEST**
save

**RESPONSE**
{
"book": {
"\_id": "6741194a3c155f478235b50a",
"title": "SEVEN DAYS IN THRIJBE",
"author": "Emma Williams",
"genre": "Romance",
"\_\_v": 0
}
}

- Delete Book
  DELETE http://localhost:3000/api/book/674121c58022677905518eff

**REQUEST**
save

**RESPONSE**
{
"message": "Book Successfully Deleted"
}

## GIT REPOSITORY LINK

https://github.com/zidinebo/BookClub-BE

## DEPLOYED API LINK

https://bookclub-be.onrender.com
