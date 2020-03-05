create table pedido (
    id_pedido int not null ,
    id_vehiculo int not null,
    fecha_pedido date not null,
    capacidad_fabricacion int not null,
    cliente int not null,
    precio float not null,
    cantidad int not null
)  

create table vehiculos (
    id_vehiculo not null,
    marca varchar2(255) not null,
    horas_produccion int not null
)

create table clientes (
    id_cliente not null,
    nombre varchar2(255) not null,
    apellido_1 varchar2(255),
    apellido_2 varchar2(255)
)