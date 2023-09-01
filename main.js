
const productos = [
    {id: 1, nombre: "Pantalon", precio: 27000},
    {id: 2, nombre: "Camisa", precio: 5400},
    {id: 3, nombre: "Vestido", precio: 10000},
    {id: 4, nombre: "Remera Hombre", precio: 6500},
    {id: 5, nombre: "Remera Mujer", precio: 6500},
    {id: 6, nombre: "Campera", precio: 60000},
    {id: 7, nombre: "Botas", precio: 30000},
];

localStorage.setItem("productos", JSON.stringify(productos));

let contenedor = document.getElementById("contenedor");

let mostrarProductos = (productos) => {
    contenedor.innerHTML = "";

    productos.forEach((item)=> {`
        <h2>ID: ${item.id}</h2>
        <p>Nombre:${item.nombre}</p>}
        <b>${item.precio}</b>
        `});
    
};

mostrarProductos(productos);


const agregar = (id) => {
    alert(pantalon.id);
    const agregarProducto = (id, nombre, precio);
        let productosStorage = localStorage.getItem("productos");
        let data = JSON.parse(productosStorage);
};


productos.forEach ((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>${item.nombre}</p>
    <b>${item.precio}</b>
    <button id="boton${item.id}">Agregar</button>
    `;

    document.body.append(div);

    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));

})

let formulario = document.getElementById("formulario");

console.log(formulario);

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputs = e.target.elements;
        let nombre = inputs.nombre.value;
        let precio = parseFloat(inputs.precio.value);

        productos.push({id:productos.length + 1, nombre, precio});
    
    });

