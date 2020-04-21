USE f79daq2ddxw7mfom;


CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);