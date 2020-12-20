INSERT INTO MOVIE VALUES (10001,'BAD BOYS','Will Smith','Martin Lawrence','Bad Boys es una serie de películas de comedia de acción estadounidense creadas por George Gallo. Está protagonizada por Will Smith y Martin Lawrence como dos detectives en el Departamento de Policía de Miami, Mike Lowrey y Marcus Burnett. Joe Pantoliano y Theresa Randle también aparecen en las tres películas.',
'1:52 horas','1995','Michael Bay','https://pics.filmaffinity.com/Bad_Boys_for_Life-343590773-large.jpg')

use CINE_FELIZ
select * from MOVIE

use CINE_FELIZ
INSERT INTO MOVIE VALUES (10002,'EMOJI ','Gene','H-f','Gene, un emoji con varias expresiones, pide a su amigo Hi-5 y al desencriptador Jailbreak que le ayuden a convertirse en un emoji de una cara, como todos sus amigos. Durante su aventura recorren varias aplicaciones y descubren que el teléfono en el que viven está en peligro.',
'1:32 horas','2017-07-28','Tony Leondis','https://miro.medium.com/max/1111/1*8qZdARrUT0BSrHUJte3JHg.jpeg')
INSERT INTO MOVIE VALUES (10003,'Cars III','Rayo McQueen','Tow Matte','Eclipsado por los autos jóvenes, el veterano Rayo McQueen ha sido expulsado del deporte que tanto ama. Sin embargo, no se rendirá tan fácilmente, con la ayuda de sus amigos, Rayo aprende trucos nuevos para vencer al arrogante Jackson Storm, el rival que lo humilló.',
'1:50 horas','2017-06-15','Brian Fee','https://static.wikia.nocookie.net/doblaje/images/9/94/Cars_3_poster.jpg/revision/latest?cb=20171205003608&path-prefix=es')

INSERT INTO MOVIE VALUES (10004,'Misión imposible: repercusión','Tom Cruise','Henry Cavill','Un traficante de armas y un grupo de terroristas pretenden realizar un triple ataque nuclear con tres artefactos de plutonio, los cuales se pierden. Ethan Hunt y su equipo tendrán que recuperarlos antes de que caigan en las manos equivocadas.',
'1:50 horas','2018-07-18','Christopher McQuarrie','https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F050%2F807%2Fmision-imposible--fallout-1.jpg&nuevoancho=690&medio=abc')


insert into LISTINGS VALUES ('09:30:00')
insert into LISTINGS VALUES ('12:00:00')
insert into LISTINGS VALUES ('02:15:00')
insert into LISTINGS VALUES ('04:30:00')
insert into LISTINGS VALUES ('06:40:00')
insert into LISTINGS VALUES ('08:30:00')

ALTER TABLE LISTINGS ALTER COLUMN FUNTION_DATE TIME 
DELETE LISTINGS WHERE ID_LISTINGS>=1 AND ID_LISTINGS<=20
DELETE MOVIE_SHOW
INSERT INTO [dbo].[CINE_LISTINGS] VALUES (2,10003,2)
INSERT INTO [dbo].[CINE_LISTINGS] VALUES (2,10003,3)
INSERT INTO [dbo].[CINE_LISTINGS] VALUES (3,10001,4)
INSERT INTO [dbo].[CINE_LISTINGS] VALUES (4,10004,5)
INSERT INTO [dbo].[CINE_LISTINGS] VALUES (5,10002,6)
INSERT INTO [dbo].[CINE_LISTINGS] VALUES (6,10002,7)

//POR CADA SALA
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10003,1,21)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10001,1,22)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,1,23)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10002,1,24)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10001,1,25)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,1,26)
-------------------------------------------------------
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10001,2,21)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10003,2,22)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,2,23)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10006,2,24)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10008,2,25)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10008,2,26)
-------------------------------------------------------
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,3,21)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10002,3,22)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,3,23)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,3,24)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10002,3,25)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10003,3,26)
------------------------------------------------------
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10001,4,21)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10003,4,22)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,4,23)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10002,4,24)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10003,4,25)
INSERT INTO MOVIE_SHOW VALUES ('2020-12-19',10004,4,26)


SELECT * FROM LISTINGS

INSERT INTO CINEMA VALUES (1,1,60,0)
INSERT INTO CINEMA VALUES (2,2,60,0)
INSERT INTO CINEMA VALUES (3,3,60,0)
INSERT INTO CINEMA VALUES (4,4,60,0)


INSERT INTO MOVIE_SHOW VALUES ('09:30:00',10002,1)