$(function(){

    $("#sobreNosotros").click(function(){
        mostrarNosotros();
    });

    $("#menu").click(function(){
        mostrarMenu();
    });
});

function cerrarContenedor(){
    $("#contenedorPrincipal").slideToggle("slow");
}

function mostrarNosotros(){

    $("#contenedorPrincipal").empty();
    let cadena = `
                    <div id="divBtnCerrarContenedor"><button id="btnCerrarContenedor" onclick="cerrarContenedor();">X</button></div>
                    <div id="contenido">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt accusamus assumenda magni in temporibus eos eius fugiat. Fuga vel cupiditate voluptatibus et voluptate provident, dolor minima doloremque dignissimos debitis optio!
                    Inventore quia dicta eius voluptatem, accusantium totam alias vitae eligendi? Mollitia, deleniti. Quia ad quaerat, error impedit ipsa ut eveniet obcaecati laboriosam, eaque nobis mollitia excepturi autem nemo laudantium et?
                    Laudantium maiores dignissimos nam, molestias, et inventore eligendi culpa, tempore sint molestiae quas veniam omnis. Sint non sit possimus omnis ipsa ipsum optio consequuntur, veritatis atque modi fugiat, quo numquam.
                    Quae quam vel consequatur molestiae odit dolorem quas voluptates veniam quis consectetur, earum assumenda cumque placeat id necessitatibus officia animi ut omnis at libero minus tempore recusandae? Ipsa, quia odio.
                    Soluta, provident enim! assumenda in quos delectus nam ab porro! Adipisci exercitationem optio eum ipsam blanditiis, assumenda quasi animi eos, amet dolorum earum aut rem obcaecati tenetur, est soluta! Laudantium!</p>
                    </div>
                `;

    $("#contenedorPrincipal").append(cadena);
    $("#contenedorPrincipal").slideToggle("slow");
}

function mostrarMenu(){
    $("#contenedorPrincipal").empty();
    let cadena = `
                    <div id="divBtnCerrarContenedor"><button id="btnCerrarContenedor" onclick="cerrarContenedor();">X</button></div>
                    <div id="fotoMenu">
                        <img src="./img/menu.jpeg" width="100%">
                    </div>
                `;

    $("#contenedorPrincipal").append(cadena);
    $("#contenedorPrincipal").slideToggle("slow");
}