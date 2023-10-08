import mysql.connector

host = "localhost"
user = "username"
password = "password"
db = "knights_hack"

connect_db = mysql.connector.connect(host, user, password, db)

print(connect_db)