function verificar () {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERROR] DOUBLE CHECK YOUR INPUT DATA AND TRY AGAIN")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")


        if (fsex[0].checked) {
            genero = "Man"
            if (idade >= 0 && idade < 14) {
                //CRIANCA
                img.setAttribute("src","kid.png" )
            }else if (idade <25) {
                //JOVEM
                img.setAttribute("src","guy.png" )
            }else if (idade <50) {
                //ADULTO
                img.setAttribute("src","adult_man.png" )
            }else  {
                //IDOSO
                img.setAttribute("src","granpa.png" )
            }

        }else if (fsex[1].checked) {
            genero = "Woman"
            if (idade >= 0 && idade < 10) {
                //CRIANCA
                img.setAttribute("src","girl.png" )
            }else if (idade <21) {
                //JOVEM
                img.setAttribute("src","woman.png" )
            }else if (idade <50) {
                //ADULTO
                img.setAttribute("src","adult_woman.png" )
            }else  {
                //IDOSO
                img.setAttribute("src","granma.png" )
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `We detected ${genero} with ${idade} years old.` 
        res.appendChild(img)
    }


}