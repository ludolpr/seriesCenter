CREATE TABLE USERS(
    idUser VARCHAR(50),
    nameUser VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY(idUser)
);

CREATE TABLE CATEGORY(
    idCategory VARCHAR(50),
    nameCategory VARCHAR(50),
    PRIMARY KEY(idCategory)
);

CREATE TABLE SERIES(
    idSerie VARCHAR(50),
    nameSeries VARCHAR(50),
    serieDescription VARCHAR(500),
    picture VARCHAR(200),
    idCategory VARCHAR(50) NOT NULL,
    PRIMARY KEY(idSerie),
    FOREIGN KEY(idCategory) REFERENCES CATEGORY(idCategory)
);