create table colaboraciones 
(
	id serial,
	cliente varchar (45),
	fecha date,
	tipo varchar
)

select * from colaboraciones

insert into colaboraciones (cliente, fecha, tipo) values 
('Leticia Videt','2021/2/26','Logotipo')

insert into colaboraciones (cliente, fecha, tipo) values 
('Frango Frangutus','2021/6/13','Logotipo e Identidad de Marca')

insert into colaboraciones (cliente, fecha, tipo) values 
('Juan Gonzalez','2020/3/3','Logotipo')

insert into colaboraciones (cliente, fecha, tipo) values 
('Sofia Lopez','2020/5/14','Logotipo e Identidad')

insert into colaboraciones (cliente, fecha, tipo) values 
('Maria Strogonoff','2020/5/17','Logotipo')

insert into colaboraciones (cliente, fecha, tipo) values 
('Ramon Collazo','2020/6/13','Logotipo e Identidad de Marca')

create table ilustraciones
(
	id serial,
	cliente varchar (45),
	artista varchar (45),
	categoria varchar (100)
)

select * from ilustraciones

insert into ilustraciones (nombre, artista, categoria) values 
('Un saliendo del papel','Cabecinha','Paper cut');

insert into ilustraciones (nombre, artista, categoria) values 
('Otro dibujo','Cabecinha','Ilustración en frío');

insert into ilustraciones (nombre, artista, categoria) values 
('Aqua & óleo','Cabecinha','Ilustración digital');

insert into ilustraciones (nombre, artista, categoria) values 
('Ilustración particular','Cabecinha','Ilustración digital');

insert into ilustraciones (nombre, artista, categoria) values 
('Ilustración de Algo','Cabecinha','Ilustración en frío');

insert into ilustraciones (nombre, artista, categoria) values 
('Otro dibujo Raro','Cabecinha','Ilustración digital');

insert into ilustraciones (nombre, artista, categoria) values 
('Ilustración particular','Cabecinha','Ilustración digital');

delete from ilustraciones where id = 8

update ilustraciones set nombre = 'Aqua & Óleo' where id = 10