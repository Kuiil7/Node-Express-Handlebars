USE welff9z0e5ss3nzt;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);