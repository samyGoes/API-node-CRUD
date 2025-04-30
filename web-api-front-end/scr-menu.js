//#region VARIÁVEIS
// FORMS CADASTRO, ATUALIZAÇÃO E REMOÇÃO
const btn_nav_cadastrar = document.querySelector("#nav-btn-cadastrar");
const btn_nav_atualizar = document.querySelector("#nav-btn-atualizar");
const btn_nav_deletar = document.querySelector("#nav-btn-deletar");

const form_cadastrar = document.querySelector("#post-section");
const form_atualizar = document.querySelector("#put-section");
const form_deletar = document.querySelector("#delete-section");

// LISTAS
const btn_nav_lista = document.querySelector("#nav-btn-lista");
const btn_nav_lista_por_id = document.querySelector("#nav-btn-lista-por-id");

const lista_todos = document.querySelector("#get-section");
const lista_por_id = document.querySelector("#get-por-id-section");
//#endregion

function menu(btn, display1, display2, display3, area)
{
    if(area == "form")
    {
        btn.addEventListener("click", function()
        {
            form_cadastrar.style.display = display1;
            form_atualizar.style.display = display2;
            form_deletar.style.display = display3;
        });
    }
    else
    {
        btn.addEventListener("click", function()
        {
            lista_todos.style.display = display1;
            lista_por_id.style.display = display2;
        });
    }
}
    

// function menuLista(btn, display1, display2)
// {
//     btn.addEventListener("click", function()
//     {
//         lista_todos.style.display = display1;
//         lista_por_id.style.display = display2;
//     });
// }



menu(btn_nav_cadastrar, "flex", "none", "none", "form");
menu(btn_nav_atualizar, "none", "flex", "none", "form");
menu(btn_nav_deletar, "none", "none", "flex", "form");

menu(btn_nav_lista, "flex", "none", "lista");
menu(btn_nav_lista_por_id, "none", "flex", "lista");
