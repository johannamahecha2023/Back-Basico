CREATE TABLE `Nuevos_cliente` (
  `id_cliente` int PRIMARY KEY AUTO_INCREMENT,
  `nombres` varchar(45),
  `apellidos` varchar(45),
  `ciudad` varchar(40),
  `categoria` int
);

CREATE TABLE `Nuevos_Comercial` (
  `id_comercial` int PRIMARY KEY AUTO_INCREMENT,
  `nombres` varchar(45),
  `apellidos` varchar(45),
  `ciudad` varchar(50),
  `comision` decimal(3,2),
  `pk_id_cliente` int
);

CREATE TABLE `Nuevos_pedidos` (
  `id_pedido` int PRIMARY KEY AUTO_INCREMENT,
  `fecha_realizado` date,
  `precio` int,
  `fk_id_comercial` int,
  `fk_id_cliente` int
);

ALTER TABLE `Nuevos_pedidos` ADD FOREIGN KEY (`fk_id_cliente`) REFERENCES `Nuevos_cliente` (`id_cliente`);

ALTER TABLE `Nuevos_pedidos` ADD FOREIGN KEY (`fk_id_comercial`) REFERENCES `Nuevos_Comercial` (`id_comercial`);


 /*  EJERCICIO Devuelve un listado con todos los pedidos que se han realizado. Los pedidos deben estar 
ordenados por la fecha de realización, mostrando en primer lugar los pedidos más recientes*/ 
SELECT fecha_realizado FROM nuevos_pedidos order by fecha_realizado asc;

/* Devuelve todos los datos de los dos pedidos de mayor valor.*/
select max(precio) from nuevos_pedidos;

/*Devuelve el valor de la comisión de mayor valor que existe en la tabla comercial.*/
select max(comision) from nuevos_comercial;

/*Devuelve un listado de los nombres de los clientes que no empiezan por A. El listado deberá 
estar ordenado alfabéticamente. */
select nombres from nuevos_cliente where nombres not like 'a%' order by nombres asc;

/*Devuelve un listado que muestre todos los pedidos que ha realizado cada cliente. El resultado 
debe mostrar todos los datos de los pedidos y del cliente. El listado debe mostrar los datos de 
los clientes ordenados alfabéticamente*/
SELECT *
FROM nuevos_cliente
INNER JOIN nuevos_pedidos ON nuevos_cliente.id_cliente=nuevos_pedidos.fk_id_cliente order by nuevos_cliente.id_cliente desc;
