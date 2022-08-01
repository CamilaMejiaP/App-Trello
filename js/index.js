//Extraer variables del DOOM
const tltTask = document.getElementById("tltTarea")
const txtDesTask = document.getElementById('txtDescripcionTarea')
const txtResponsable = document.getElementById('txtResponsable')
const date = document.getElementById('txtFechaEntrega')
const btn = document.getElementById('btnSubmit')
const TaskTitle = document.getElementById('titulo')
const list1 = document.getElementById('listDo')
const list2 = document.getElementById('listProgres')
const list3 = document.getElementById('listEnd')

Sortable.create(list1,{
    Animation: 150,
    chosenClass: "seleccionado",
    dragClass :'drag',
    group: {
        name: 'shared',
        put: true 
    },
    store:{
        //guardar el orden de la lista
        set:(sortable) => {
            const orden = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, orden.join('-'));
            console.log(orden);
        },
        get:(sortable) => {
            const orden = localStorage.getItem(sortable.options.group.name);
            console.log(orden)
        }
    }
});
Sortable.create(list2,{
    group: 'shared',
    animation: 150
 }
);

Sortable.create(list3,{
    group: 'shared',
    animation: 150
 }
);
/* 
local storage: Metodo para almacenar datos en el local storage.
PD: no implementado
var guardado;

function showTask() {
    
    localStorage.getItem('datos')
    //remover del localstore
    localStorage.removeItem('datos')
   
}
guardado = JSON.parse(localStorage.getItem('datos'));
if (guardado != null) {
    for (i in guardado) {
        addTask(guardado[i]);
    }
}

else {
    guardado = [];
} */

//funcion flecha que agrega una tarea nueva, cuando se llama al boton de submit

btn.addEventListener('click', (e) => {
    e.preventDefault()
    addTask()
})

function addTask() {

    /* const tarea = list.innerHTML;

    list.innerHTML += `
    <div class="tarea m-2 p-2" id="${contador}">
        <h4>${tltTask.value}</h4>
        <hr>
        <p class="float">${txtDesTask.value}</p>
        <br>
        <h6>Responsable:${txtResponsable.value}<br> Fecha: ${date.value}</h6>
    </div>  
    `
    */
    //let contador = 0;
    //crear elemento tarea
    var newTask = document.createElement('div');
    newTask.setAttribute('class', 'tarea m-2 p-2');
    //newTask.setAttribute('id', `id${contador}`);

    newTask.innerHTML += `
        <h4>${tltTask.value}</h4>
        <hr>
        <p class="float">${txtDesTask.value}</p>
        <br>
        <h6>Responsable:${txtResponsable.value}<br> Fecha: ${date.value}</h6>        
    `
    list1.appendChild(newTask);
    guardado.push(newTask);

    localStorage.setItem('datos', JSON.stringify(guardado));

}

 //window.addEventListener("load", showTask, false); 