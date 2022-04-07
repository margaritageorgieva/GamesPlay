# GamesPlay
Single Page Application that enables you to search and discover new games.                                                    
App provides general information, ratings, pictures, comments and categories for the games.


## 🎮 Features:
- Registration and Login
- Different access  for guests and logged in users
- List of all games, sorted by category
- Detailed information for each game
- Ability to edit, delete or add a new game
- Add comments and view existing ones
- Search game by category

## 🛠 Built with:
- Educational REST service
- JavaScript
- Lit-html
- Page.js
- HTML5
- CSS3


Detailed information for [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server#readme)                     
Full documentations for Lit and Page are available at [lit.dev](https://lit.dev/) and [page](https://www.npmjs.com/package/page)    

## 🔐 Permissions:

| Permissions    | Guest    | Logged in User    |
| ------------- | ------------- | -------- |
| Home page         | ✔️       |  ✔️ |
| All games         | ✔️        | ✔️ |
| Details page         | ✔️        | ✔️ |
| Search page         | ✔️        | ✔️ |
| Login / Register        | ✔️        | ❌ |
| Create game        | ❌        | ✔️ |
| Edit / Delete        | ❌        | ✔️ |
| View all comments       | ✔️        | ✔️ |
| Add comment       | ❌        | ✔️ |
| Like button         | ✔️        | ✔️ |

## Public Pages:

#### Home page
This is the landing page of the application, from here you can view the latest three Games.

#### All games
In this page, all added games are displayed, sorted by their category.                                                                                                
There is a like button and a button that takes you to the game details page.

#### Details page
Here is all the information about the game (such as picture, comments, description, etc.).                       
Only the game creator can edit or delete it. All users  see existing comments, but only logged in users can add new.
   
