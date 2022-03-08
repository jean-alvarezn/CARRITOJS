window.onload = () => {
    // const contenedor = document.getElementById('btn-carrito');
    // contenedor.onclick = () => {
    //     const todo = document.querySelectorAll('todo');
    //     const todoText = todo.innerHTML;
    //     console.log(todoText);
    // }

    const container = document.querySelectorAll('.btn-carrito');
    container.forEach(function(e)
    {
        e.addEventListener('click',function () {
            const producto = document.querySelectorAll('#todo');
            const productoTexto = producto.innerHTML;
            console.log(productoTexto);
        })
    });
}