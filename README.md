# MEVN-todolist
This is a todolist project for my CS 3105 class, it is built using the following technologies: <br>
• Express and MongoDB for the backend <br>
• Vue.js for the front end <br>
• Tailwindcss for the styles <br>
### Can be switched to MongoDB Atlas instead of local DB. The code is for connecting to Atlas is commented out in server/controllers/todolist.js. Just change the connection string to your own cluster.
# Set-up for the local machine<br>
1. Clone the repo `git clone https://github.com/lourencelinao/MEVN-todolist.git` <br>
2. `cd MEVN-todolist` <br>
3. ` npm install` <br>
4. Open the server
```
npm run nodemon
```
5. Open the client (open a new terminal)
```
cd MEVN-todolist
cd client
npm install
npm run serve
```
5. Open `https://localhost:8080` in the browser
# Heroku Demo
https://cryptic-stream-59786.herokuapp.com/
