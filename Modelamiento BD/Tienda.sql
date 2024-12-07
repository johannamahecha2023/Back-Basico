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

/*Devuelve un listado que muestre todos los clientes, con todos los pedidos que han realizado y 
con los datos de los comerciales asociados a cada pedido.*/

select *
from nuevos_cliente
inner join nuevos_pedidos as np
on nuevos_cliente.id_cliente=np.fk_id_cliente
inner join nuevos_comercial as nc
on nc.id_comercial=np.fk_id_comercial;

/*Devuelve un listado que solamente muestre los clientes que no han realizado ningún pedido. */
select *
from nuevos_pedidos
right join nuevos_cliente
ON nuevos_cliente.id_cliente = nuevos_pedidos.fk_id_cliente where nuevos_pedidos.fk_id_cliente is null ;

/*Devuelve un listado que solamente muestre los comerciales que no han realizado ningún pedido.*/
select id_comercial,nombres,apellidos
from nuevos_comercial
left join nuevos_pedidos
on nuevos_comercial.id_comercial=nuevos_pedidos.fk_id_comercial where nuevos_pedidos.fk_id_comercial is null;

/*Calcula la cantidad media de todos los pedidos que aparecen en la tabla pedido.*/
select avg(cp) 
from (select count(id_pedido) as cp from nuevos_pedidos group by fk_id_cliente) nuevos_pedidos;

/*Calcula el número total de clientes que aparecen en la tabla cliente.*/
select count(id_cliente) from nuevos_cliente;

/*Calcula cuál es la mayor cantidad que aparece en la tabla pedido.*/
select max(precio)from nuevos_pedidos;

/*Devuelve un listado con el identificador de cliente, nombre y apellidos y el número total de 
pedidos que ha realizado cada uno de clientes durante el año 2017. */
/*regla: las subconsultas en MYSQL siempre deben tener un alias (AS)*/
SELECT 
    nc.id_cliente, 
    nc.nombres, 
    nc.apellidos, 
    COUNT(np.id_pedido) AS total_pedidos
FROM 
    nuevos_cliente AS nc
LEFT JOIN 
    nuevos_pedidos AS np ON np.fk_id_cliente = nc.id_cliente
WHERE 
    YEAR(np.fecha_realizado) = 2017
GROUP BY 
    nc.id_cliente, 
    nc.nombres, 
    nc.apellidos;

/*a veces MYSLQ tiene un seguro para evitar errores y eliminaciones masivas que pueda
perder importante informacion para Desactivar el seguro es:*/
SET SQL_SAFE_UPDATES = 0;
/*y para volverlo a activar es: */
SET SQL_SAFE_UPDATES = 1;

/*• Pedro Vargas LLosa se mudó a la ciudad de Sevilla.*/
select id_cliente,nombres,apellidos,ciudad from nuevos_cliente where nombres like'%pedro%';
update nuevos_cliente set ciudad='Sevilla' where id_cliente=1;

/*•Pedro Rojas Llanos se mudó a la ciudad de pereira.*/
update nuevos_comercial set ciudad ='pereira' where id_comercial=4;

/*• Alma Ruiz Prieto ahora es categoría 150 y se mudo a Granada.*/
update nuevos_cliente set ciudad='granada', categoria=150 where id_cliente=4;

/*• Ana Ferias Flores ahora gana 0.21 de comisión*/
update nuevos_comercial set comision=0.21 where id_comercial=3;

/*• Miguel Granados Alvira ahora gana 0.23 de comisión.*/
update nuevos_comercial set comision=0.23 where id_comercial=5;

/*5. Borrar los siguientes registros de la base de datos.*/

/*Borrar el pedido realizado el 2017-10-05*/
delete from nuevos_pedidos where fecha_realizado='2020-10-19';
/*o tambien podria ser de esta manera*/
delete from nuevos_pedidos where id_pedido=3 and fecha_realizado='2020-10-19';

/*Borrar a alma Ruiz de la tabla de clientes. */
/*alma tenia estaba unido con un perdido, es decir era llave foranea de la tabla
pedido, entonces primero borramos el registro de la tabla pedido que tenia alma y
luego si la borramos de la tabla cliente*/
select nombres,apellidos,id_cliente from nuevos_cliente where nombres like '%Alma%' and apellidos like'%Ruiz%';
delete from nuevos_cliente where id_cliente=4;
delete from nuevos_pedidos where id_pedido=2;

/*Borrar a todos los comerciantes que tengan el apellido Hernandez.*/
delete from nuevos_comercial where apellidos like '%Duran Perez%';

/*Borrar a todos los clientes de Bogotá.
consejo: siempre consultar los datos que queremos borrar antes de hacer el delete 
ya que pueden existir mas registros y tal vez no queremos borrarlos, entonces podriamos usar
el id para mas seguridad*/
select * from nuevos_cliente where ciudad like '%bogota%'; 
delete from nuevos_cliente where ciudad like '%bogota%'; 
