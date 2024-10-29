CREATE TABLE `persona` (
  `id` int PRIMARY KEY,
  `nombre` varchar(50),
  `apellido` varchar(50),
  `correo` varchar(50),
  `celular` int
);

CREATE TABLE `documento` (
  `tipo_documento` char(2),
  `numero_documento` int,
  `fecha_expedicion` date,
  `ciudad_expedicion` varchar(255),
  `RH` varchar(3),
  `persona_id` int,
  PRIMARY KEY (`tipo_documento`, `numero_documento`)
);

CREATE TABLE `estudiante` (
  `codigo_estudiantil` int PRIMARY KEY,
  `nombre` varchar(50),
  `apellido` varchar(50),
  `correo_institucional` varchar(50),
  `fecha_nacimiento` date,
  `codigo_curso` int
);

CREATE TABLE `curso` (
  `codigo_curso` int PRIMARY KEY,
  `nombre_curso` varchar(150),
  `nombre_docente` varchar(220),
  `grupo` varchar(10)
);

CREATE TABLE `cliente` (
  `nombre` varchar(50),
  `correo` varchar(50),
  `cedula` int PRIMARY KEY,
  `celular` int
);

CREATE TABLE `producto` (
  `nombre` varchar(50),
  `codigo` int PRIMARY KEY,
  `precio` int
);

CREATE TABLE `cliente_producto` (
  `total_factura` int,
  `fecha_compra` timestamp,
  `cliente_nombre` varchar(50),
  `codigo_producto` int
);

CREATE TABLE `cliente1` (
  `nombre` varchar(50),
  `correo` varchar(50),
  `cedula` int PRIMARY KEY,
  `celular` int
);

CREATE TABLE `producto1` (
  `nombre` varchar(50),
  `codigo` int PRIMARY KEY,
  `precio` int
);

ALTER TABLE `documento` ADD FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`);

ALTER TABLE `curso` ADD FOREIGN KEY (`codigo_curso`) REFERENCES `estudiante` (`codigo_curso`);

ALTER TABLE `cliente_producto` ADD FOREIGN KEY (`cliente_nombre`) REFERENCES `cliente` (`cedula`);

ALTER TABLE `cliente_producto` ADD FOREIGN KEY (`codigo_producto`) REFERENCES `producto` (`codigo`);

CREATE TABLE `cliente1_producto1` (
  `cliente1_cedula` int,
  `producto1_codigo` int,
  PRIMARY KEY (`cliente1_cedula`, `producto1_codigo`)
);

ALTER TABLE `cliente1_producto1` ADD FOREIGN KEY (`cliente1_cedula`) REFERENCES `cliente1` (`cedula`);

ALTER TABLE `cliente1_producto1` ADD FOREIGN KEY (`producto1_codigo`) REFERENCES `producto1` (`codigo`);

