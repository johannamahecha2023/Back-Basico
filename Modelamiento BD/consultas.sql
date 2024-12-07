/*para CREAR una BASE DE DATOS*/
CREATE DATABASE biblioteca;

/*para ELIMINAR una BASE DE DATOS */
DROP DATABASE biblioteca;

/*para RENOMBRAR una BASE DE DATOS*/
RENAME DATABASE biblioteca TO bibliored

/*para CREAR una TABLA*/
CREATE TABLE autor;

/*para eliminar una tabla*/
DROP TABLE autor;

/*para renombrar una tabla*/
ALTER TABLE autor RENAME TO escritor;

/*para ELIMINAR UNA COLUMNA de una TABLA*/
ALTER TABLE persona DROP COLUMN correo_electronico;

/*para ingresar nuevos registros a tablas*/
INSERT INTO (id,nombres,apellidos,edad)VALUES('1','leidy','martinez',28),('2','alex','olivos',40)

/*CONSULTAS Y MANIPULACION DE REGISTROS*/
/*LIKE BUSCAR REGISTROS DE UNA TABLA CON ALGUN C*/
SELECT * FROM cedula WHERE documento LIKE '10%';
SELECT * FROM libro WHERE nombre LIKE '%rebelion%';

/*UPDATE -ACTUALIZAR REGISTROS*/
UPDATE persona SET correo ='clauospina@gmail.com' where id=2;
UPDATE persona SET correo ='ospinajhon@gmail.com' where id=3;
SELECT correo FROM persona;

/* DELETE -ELIMINAR REGISTROS*/
DELETE FROM persona WHERE id=2;
SELECT * FROM persona;


SELECT nombre, correo FROM editorial;
SELECT nombre,id_editorial FROM autor;
SELECT documento, autor_id,fecha_expedicion FROM cedula;
SELECT nombre, autor_id FROM libro;

SELECT * FROM cedula WHERE documento=1026586864;
SELECT * FROM cedula WHERE autor_id!=4;
SELECT * FROM editorial WHERE año>=2013;
SELECT * FROM autor WHERE fecha_nacimiento>1990;
SELECT * FROM cedula WHERE fecha_expedicion>2020;
SELECT * FROM libro WHERE fecha_lanzamiento>2000;
INSERT INTO libro(nombre,fecha_lanzamiento,autor_id,codigo_barras)values('Homenaje a Cataluña','2010-09-03','3','007');
SELECT * FROM libro;

