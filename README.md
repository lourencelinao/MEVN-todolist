# MEVN-todolist
This is a todolist project for my CS 3105 class, it is built using the following technologies: <br>
• Express and MongoDB(Atlas) for the backend <br>
• Vue.js for the front end <br>
• Tailwindcss for the styles <br>
### MongoDB is connected to my cluster in MongoDB Atlas. If you want, you can change the mongodb connection string to your own cluster, mongodb connection is located at server/controllers/todolist.js
# Set-up for the local machine<br>
1. Clone the repo `git clone https://github.com/lourencelinao/MEVN-todolist.git` <br>
2. `cd MEVN-todolist` <br>
3. ` npm install` <br>
4. Open the server
```
npm run nodemon
```
5. Open the client (open a new terminal and make sure you are in the MEVN-todolist directory)
```
cd client
npm install
npm run serve
```
5. Open `https://localhost:8080` in the browser
