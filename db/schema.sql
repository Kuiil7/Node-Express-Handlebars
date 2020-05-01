USE lr2peb2ou2awo7pc;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);