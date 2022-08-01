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


btn.addEventListener('click', (e) => {
    e.preventDefault()
    addTask()
})

function addTask() {

  
    var newTask = document.createElement('div');
    newTask.setAttribute('class', 'tarea m-2 p-2');
 

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

