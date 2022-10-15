const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {       //forEach => para cada "aba".
    aba.addEventListener("click", function () {

        if(aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)
        mostrarInforDaAba(aba)
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado");

}

function mostrarInforDaAba(aba) {
    const inforSelecionada = document.querySelector(".informacao.selecionado");
    inforSelecionada.classList.remove("selecionado");

    const inforDaAba = `informacao-${aba.id}`

    const inforASerMostrada = document.getElementById(inforDaAba)
    inforASerMostrada.classList.add("selecionado")
}