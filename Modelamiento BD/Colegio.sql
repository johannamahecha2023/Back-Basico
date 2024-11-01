CREATE TABLE `estudiantes` (
  `estudianteId` int PRIMARY KEY,
  `nombre` varchar(45),
  `apellido` varchar(45),
  `fecha_nacimiento` date,
  `genero` char(1),
  `direccion` varchar(50),
  `tipo_documento` char(2)
  `fk_codigo_curso` int,
  CONSTRAINT fk_codigo_curso FOREIGN KEY (`fk_codigo_curso`) REFERENCES cursos(`codigo_curso`)
);


CREATE TABLE `profesores` (
  `profesorId` int PRIMARY KEY,
  `nombre` varchar(45),
  `apellido` varchar(45),
  `fecha_nacimiento` date,
  `genero` char(1),
  `direccion` varchar(50),
  `codigo_curso` int,
);

CREATE TABLE `cursos` (
  `codigo_curso` int PRIMARY KEY,
  `nombre_curso` varchar(45),
  `descripcion_curso` varchar(45),
  `dias` varchar(45),
  `horario_inicio` time,
  `horario_fin` time,
  `creditos` int
);

CREATE TABLE `documentos` (
  `tipo_documento` char(2),
  `numero_documento` int,
  PRIMARY KEY (`tipo_documento`, `numero_documento`)
);

CREATE TABLE `profesores_cursos` (
  `profesores_profesorId` int,
  `cursos_codigo_curso` int,
  PRIMARY KEY (`profesores_profesorId`, `cursos_codigo_curso`)
);

ALTER TABLE `profesores_cursos` ADD FOREIGN KEY (`profesores_profesorId`) REFERENCES `profesores` (`profesorId`);

ALTER TABLE `profesores_cursos` ADD FOREIGN KEY (`cursos_codigo_curso`) REFERENCES `cursos` (`codigo_curso`);


ALTER TABLE `documentos` ADD FOREIGN KEY (`numero_documento`) REFERENCES `profesores` (`profesorId`);

ALTER TABLE `documentos` ADD FOREIGN KEY (`numero_documento`) REFERENCES `estudiantes` (`estudianteId`);

ALTER TABLE `estudiantes` ADD FOREIGN KEY (`estudianteId`) REFERENCES `cursos` (`codigo_curso`);

/*1. Seleccionar el nombre y apellido de todos los estudiantes.*/
SELECT nombre,apellido FROM estudiantes;
/*2. Encontrar el nombre y apellido de los docentes*/
SELECT nombre,apellido FROM profesores;
/*3. Listar todos los cursos disponibles.*/
SELECT * FROM cursos;
/*4. Encontrar todos los estudiantes cuyo nombre sea "Ana".*/
SELECT * FROM estudiantes WHERE nombre like '%ana%';
/*6. Seleccionar todos los cursos que tengan "Matemáticas" en el nombre.*/
SELECT * FROM cursos WHERE nombre_curso like '%matematicas%';
/*7. Encontrar la dirección del estudiante llamado "Luis Gómez"*/
SELECT direccion FROM estudiantes where nombre='luis' AND apellido='gomez';