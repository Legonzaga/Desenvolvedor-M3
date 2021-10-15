--Instalação - Executando o servidor para evitar o Cors.

Open a terminal. (On Windows: cmd.exe.)
Type npm and hit Enter to see if Node.js is installed.
If you get command not found, download at https://nodejs.org/en/download/ and install. 1
(On Ubuntu, you can try sudo apt install -y nodejs.)
Install live-server: npm install live-server -g.
Change directory to where your page lives: cd <path-to-index.html>.
Start the server: live-server .
(Should open localhost:8080 in your default browser and show the alert. See below.)