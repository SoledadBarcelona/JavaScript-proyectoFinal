const usuario1 = new Usuario(1, "6° B", "ACOSTA, Alexis", "50.690.118", "3/3/2011", "11", "11 6806-1234");
const usuario2 = new Usuario(2, "6° B", "ARGARAZ, Laura","50.599.457", "21/7/2010", "11", "11 2860-1234");
const usuario3 = new Usuario(3, "6° B", "FERNANDEZ, Belen", "50.862.398","30/3/2011", "11", "11 2862-1234");
const usuario4 = new Usuario(4, "6° B", "DOMINGUEZ, Benjamin", "51.052.948","30/5/2011", "11", "11 2863-1234");
const usuario5 = new Usuario(5, "6° B", "GIMENEZ, Juan", "50.862.266", "15/6/2011", "10", "11 2864-1234");
const usuario6 = new Usuario(6, "6° B", "ISAGUIRRE, Rodrigo ", "51.045.141","24/4/2011", "11", "11 2865-1234");
const usuario7 = new Usuario(7, "6° B", "LUCA, Lautaro", "51.061.170", "2/2/2011", "11", "11 2866-1234");
const usuario8 = new Usuario(8, "6° B", "MARTINEZ, Alumine", "50.276.520", "7/11/2010", "11", "11 2867-1234");
const usuario9 = new Usuario(9, "6° B", "OMAR, Agustina","50.862.297", "4/11/2010", "11","11 2868-1234");
const usuario10 = new Usuario(10, "6° B", "PERREYRA, Lionel", "50.489.827", "15/5/2011", "11", "11 2869-1234");
const usuario11 = new Usuario(11, "6° B", "RAMOS, Ian", "50.882.821", "1/5/2011", "11", "11 2850-1234");
const usuario12 = new Usuario(12, "6° B", "SILVEYRA, Magali", "51.061.177", "17/3/2011", "11", "11 2851-1234");
const usuario13 = new Usuario(13, "6° B", "SCHNEIDER, Francisco", "50.487.397", "27/5/2011", "11", "11 2852-1234");
const usuario14 = new Usuario(14, "6° B", "VILLARREAL, Agustin", "51.053.544","18/6/2011", "10", "11 2853-1234");
const usuario15 = new Usuario(15, "6° B", "ZARATE, Iara", "50.844.952", "11/5/2010", "12", "11 2857-1234");

let usuarios = [];
 

 if(localStorage.getItem("usuarios"))
 {
     usuarios = JSON.parse(localStorage.getItem("usuarios"));
 }
 else
 {
    usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6, usuario7, usuario8, usuario9, usuario10, usuario11, usuario12, usuario13, usuario14, usuario15];
 }

console.log("INICIAL:", usuarios);


inicializarAplicacion();
//mostrarMenu();


function mostrarMenu()
{
   let opcion = 0;
   
   while(opcion!==10)
   {
       opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Usuario
                           2. Eliminar Usuario
                           3. Modificar Usuario
                           4. Listar usuarios
                           5. Buscar Usuario
                           6. Listar NOMBRE + APELLIDO
                           10. Salir`));

   switch(opcion)
   {
       case 1:
       {
           agregarUsuario();
           break;
       }
       case 2: 
       {
           eliminarUsuario();
       }
       case 3: 
       {
           modificarUsuario();
       }
       case 4:
       {
           listarUsuarios();
           break;
       }
       case 5:
       {
            buscarUsuario();
               break;
       }
       case 6:
       {
            listarNombreMasApellido();
               break;
       }
       default:{
           alert("Opcion invalida");
           break;
       }
      
   }

   }
}


function listarNombreMasApellido()
{
   let nombresYApellidos = usuarios.map(
       (usuario)=>usuario.apellido+ " " + usuario.nombre);

   console.log("MAP:");
   console.log(nombresYApellidos);
}