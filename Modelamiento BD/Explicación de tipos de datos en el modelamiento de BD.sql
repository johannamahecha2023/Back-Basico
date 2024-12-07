CREATE TABLE `Medicos` (
  `nombres` varchar(50),
  `apellidos` varchar(50),
  `correo` varchar(40),
  `especialidad` varchar(50),
  `edad` int,
  `numero_documento` int,
  `altura` decimal(3,2),
  `peso` decimal(5,3),
  `sexo` char(1),
  `tipo_documento` char(2),
  `fecha_nacimiento` date,
  `hora_ingreso` time,
  `fechahora_actual` timestamp,
  `activo` bool
);

CREATE TABLE `usuario` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `email` varchar(100)
);
