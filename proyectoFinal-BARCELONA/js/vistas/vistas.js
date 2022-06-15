function inicializarAplicacion()
{
    crearTitulo(); 
    crearMenu();
}


function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML="LEGAJO DE ALUMNOS";
    document.body.appendChild(tituloH1);
}


function crearMenu()
{
     let opciones = ["LISTA DE ALUMNOS", "AGREGAR ALUMNO", "ELIMINAR ALUMNO", "EDITAR ALUMNO", "BUSCAR ALUMNO"]
     opciones.forEach((opcion)=>{
     const boton = document.createElement("button");
     boton.innerHTML=opcion;

     if(opcion === "LISTA DE ALUMNOS")
     {
         boton.addEventListener("click", ()=>{
             listarUsuarios(usuarios);
         })
     }
     else if(opcion === "AGREGAR ALUMNO")
     {
        boton.addEventListener("click", ()=>{
            agregarUsuario();
            listarUsuarios(usuarios);
        })

     }
        if(opcion === "ELIMINAR ALUMNO")
     {
         boton.addEventListener("click", ()=>{
             eliminarUsuario();
             listarUsuarios(usuarios);
         })
     }

     if(opcion === "EDITAR ALUMNO")
     {
         boton.addEventListener("click", ()=>{
             modificarUsuario();
             listarUsuarios(usuarios);
         })
     }

     else if(opcion==="BUSCAR ALUMNO")
     {
        boton.addEventListener("click", ()=>{
            let filtrados = buscarUsuario();
           
            listarUsuarios(filtrados);

        })
     }
    
     document.body.appendChild(boton);
     });
}


function listarUsuarios(listaUsuarios)
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaUsuarios");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdId = document.createElement("th");
   tdId.innerHTML="Orden";
   encabezado.appendChild(tdId);

   const tdCurso = document.createElement("th");
   tdCurso.innerHTML="Curso";
   encabezado.appendChild(tdCurso);

   const tdNomnre = document.createElement("th");
   tdNomnre.innerHTML="Apellido";
   encabezado.appendChild(tdNomnre);

   const tdDni = document.createElement("th");
   tdDni.innerHTML="DNI";
   encabezado.appendChild(tdDni);

   const tdNac = document.createElement("th");
   tdNac.innerHTML="Fecha de nacimiento";
   encabezado.appendChild(tdNac);

   const tdEdad = document.createElement("th");
   tdEdad.innerHTML="Edad";
   encabezado.appendChild(tdEdad);


    const tdTel = document.createElement("th");
   tdTel.innerHTML="Telefono";
   encabezado.appendChild(tdTel);

   miLista.appendChild(encabezado)
   
   listaUsuarios.forEach((usuario)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.id}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.curso}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.nombre}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.dni}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.nac}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.edad}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.tel}`;
       nodotr.appendChild(nodotd);


       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}


function agregarUsuario()
{      
    let id=1;
    if(usuarios.length>0)
    {
       id=usuarios[usuarios.length-1].id+1;
    }
    
    let curso=prompt("Ingrese un curso");
    let nombre = prompt("Ingrese un nombre");
    let dni = prompt("Ingrese un dni");
    let nac = prompt("Ingrese un fecha de nacimiento");
    let edad = prompt("Ingrese un edad");
    let tel = prompt("Ingrese un telefono");
    let usuario = new Usuario(id, curso, nombre, dni, nac, edad, tel);

    usuarios.push(usuario);
    console.log("ALMACENADO");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire(  {
            title:'Nuevo Alumno Agregado',
            icon: 'success',
            confirmButtonText: 'OK',
}


function buscarUsuario()
{
   let nombre = prompt("Ingresa el nombre que quieres buscar");

   let encontrados = usuarios.filter((usuario)=>usuario.nombre.toLowerCase()==indexOf(nombre)!==-1);

   console.table(encontrados);

   return encontrados;
}


function eliminarUsuario(){

   let id= Number(prompt("Ingrese el id del usuario que quieres eliminar"));

   let encontrado = usuarios.find((usuario)=>usuario.id===id);

  if(!encontrado)
  {
      Swal.fire(  {
            title:'Alumno no encontrado',
            icon: 'success',
            confirmButtonText: 'OK',
           
        }
       )
  }
  
  else{

       let index = usuarios.indexOf(encontrado);

       usuarios.splice(index,1);

       console.log("Borrar usuario");
       console.log(usuarios);

       Swal.fire(  {
            title:'Datos de Alumno Eliminados',
            icon: 'success',
            confirmButtonText: 'OK',
           
        }
       )

  }   }


function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del usuario que quieres modificar"));

   let existe = usuarios.some((usuario)=>usuario.id===id);

   if(existe)
   {
    let encontrado = usuarios.find((usuario)=>usuario.id===id);
    let nuevoCurso=prompt("Ingrese un curso");
    let nuevoNombre = prompt("Ingrese un nombre");
    let nuevoDni = prompt("Ingrese un dni");
    let nuevoNac = prompt("Ingrese un fecha de nacimiento");
    let nuevoEdad = prompt("Ingrese un edad");
    let nuevoTel = prompt("Ingrese un telefono");

  
       encontrado.curso=nuevoCurso;
       encontrado.nombre=nuevoNombre;
       encontrado.dni=nuevoDni;
       encontrado.nac=nuevoNac;
       encontrado.edad=nuevoEdad;
       encontrado.tel=nuevoTel;

           usuarios.push(usuario);
    console.log("ALMACENADO");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire(  {
            title:'Datos de Alumno Modificados',
            icon: 'success',
            confirmButtonText: 'OK',
           
        }
      
      
   }
   else
   {
        Swal.fire(  {
                    title:'Alumno no encontrado',
                    icon: 'success',
                    confirmButtonText: 'OK',
                   
                }
               )
   }
}