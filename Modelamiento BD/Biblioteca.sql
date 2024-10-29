CREATE TABLE `autor` (
  `id` int PRIMARY KEY,
  `nombre` varchar(100),
  `apellido` varchar(100),
  `fecha_nacimiento` date,
  `correo` varchar(70),
  `id_editorial` int
);

CREATE TABLE `cedula` (
  `documento` int,
  `tipo_documento` char(2),
  `fecha_expedicion` date,
  `lugar_expedicion` varchar(50),
  `autor_id` int,
  PRIMARY KEY (`documento`, `tipo_documento`)
);

CREATE TABLE `editorial` (
  `id` int PRIMARY KEY,
  `nombre` varchar(100),
  `direccion` varchar(100),
  `correo` varchar(100),
  `año` int,
  `fecha` date
);

CREATE TABLE `libro` (
  `nombre` varchar(100),
  `fecha_lanzamiento` date,
  `autor_id` int,
  `codigo_barras` int PRIMARY KEY
);

ALTER TABLE `cedula` ADD FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`);

ALTER TABLE `autor` ADD FOREIGN KEY (`id_editorial`) REFERENCES `editorial` (`id`);

CREATE TABLE `libro_autor` (
  `libro_codigo_barras` int,
  `autor_id` int,
  PRIMARY KEY (`libro_codigo_barras`, `autor_id`)
);

ALTER TABLE `libro_autor` ADD FOREIGN KEY (`libro_codigo_barras`) REFERENCES `libro` (`codigo_barras`);

ALTER TABLE `libro_autor` ADD FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`);

