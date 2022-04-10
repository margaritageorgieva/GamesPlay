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
- Educational REST server
- JavaScript
- Lit-html
- Page.js
- HTML5
- CSS3
                
Full documentation for REST server, Lit and Page are available at [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server#readme)    , [lit.dev](https://lit.dev/) and [page](https://www.npmjs.com/package/page)    

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

## 📃 Pages:

#### Home page 
This is the landing page of the application, from here you can view the latest three Games.

#### All games
In this page, all added games are displayed, sorted by their category.                                                                                                
There is a like button and a button that redirect to the game details page.

#### Details page
After clicking 'Details' button, you will be redirected to the details page. Here you can view all the information about the game (such as picture, comments, category, description, etc.). Only the game creator can edit or delete it. All users see existing comments on this page. Once logged in, you will also be able to add comments.

#### Search page
The search page allows users to filter games by their category. A list of all games whose category matches the one entered in the search box is displayed.
If there is no match, displayed the message 'There are no games in this category'.   

#### Create page
This page contains a form through which logged-in users can create a new game. After successfully creating a game, you will be redirected to the home page. The list of latest games will be updated with your newly created game.

#### Login and Register pages
Here you can register or log in if you already have an account.

## 📸 Screenshots:
<img src="https://user-images.githubusercontent.com/44364396/162628347-df6deed6-a720-4e48-88a4-d90eb8858a48.png" width=80% height=40%>
<img src="https://user-images.githubusercontent.com/44364396/162272812-28d51fdf-606a-4038-81dc-108448134576.png" width=80% height=40%>
<img src="https://user-images.githubusercontent.com/44364396/162628607-82a91aa8-1ec8-4ab7-8b5e-c5552d7cfc04.png" width=80% height=40%>
<img src="https://user-images.githubusercontent.com/44364396/162274947-67efa16e-2641-4b20-a2a8-01e404ed6f4d.png" width=80% height=40%>
<img src="https://user-images.githubusercontent.com/44364396/162275309-0b9651a9-af65-4314-882b-35df7d44b0ae.png" width=80% height=40%>



## 🚀 Execution:
- run **npm install** while at the root folder of the project for lit-html, page.js and http-server install.
- **npm run server** runs the REST server.
- **npm run start** runs the application on port 3000. Open http://localhost:3000 to view it in the browser.
