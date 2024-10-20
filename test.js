$(document).ready(function(){

    let game=['das','kaqiz','qayci']
    let yourS=0
    let botS=0
    let tieS=0

    function clickOver(){
        if(yourS==10){
            alert('You Win')
            gameOver()
        }
        if(botS==10){
            alert('The bot won')
            gameOver()
        }
    
    }

    function gameOver(){
        yourS=0
        botS=0
        tieS=0
        $(`.your`).text(yourS)
        $(`.bot`).text(botS)
        $(`.tie`).text(tieS)
        $( `.botunsecimi`).css('display', 'none')
        $(`h3`).css('display','none')
    }


    $(`.qayci`).click(function(){
        let index=Math.floor(Math.random()*game.length)
        let bot=game[index]
        if(bot=='qayci'){
            tieS++
            $(`.tie`).text(tieS)
            $( `.botunsecimi`).css('display', 'block').css('background-image','url("./qayci-removebg-preview.png")')
            $(`h3`).css('display','block')
        }if(bot=='das'){
            botS++
            $(`.bot`).text(botS)
            $(`.botunsecimi`).css('display', 'block').css('background-image','url("./das-removebg.png")')
            $(`h3`).css('display','block')
        }if(bot=='kaqiz'){
            yourS++
            $(`.your`).text(yourS)
            $(`.botunsecimi`).css('display', 'block').css('background-image','url("./kaqiz-removebg-preview.png")')
            $(`h3`).css('display','block')
        }
        clickOver()
    })

    $(`.das`).click(function(){
        let index=Math.floor(Math.random()*game.length)
        let bot=game[index]
        if(bot=='das'){
            tieS++
            $(`.tie`).text(tieS)
            $( `.botunsecimi`).css('display', 'block').css('background-image','url("./das-removebg.png")')
            $(`h3`).css('display','block') 
        }if(bot=='kaqiz'){
            botS++
            $(`.bot`).text(botS)
            $(`.botunsecimi`).css('display', 'block').css('background-image','url("./kaqiz-removebg-preview.png")')
            $(`h3`).css('display','block')
        }if(bot=='qayci'){
            yourS++
            $(`.your`).text(yourS)
            $(`.botunsecimi`).css('display', 'block').css('background-image','url("./qayci-removebg-preview.png")')
            $(`h3`).css('display','block')
        }
        clickOver()
    })

    $(`.kaqiz`).click(function(){
        let index=Math.floor(Math.random()*game.length)
        let bot=game[index]
        if(bot=='kaqiz'){
            tieS++
            $(`.tie`).text(tieS)
            $( `.botunsecimi`).css('display', 'block').css('background-image','url("./kaqiz-removebg-preview.png")')
            $(`h3`).css('display','block') 
        }if(bot=='das'){
            yourS++
            $(`.your`).text(yourS)
            $(`.botunsecimi`).css('display', 'block').css('background-image','url("./das-removebg.png")')
            $(`h3`).css('display','block')
        }if(bot=='qayci'){
            botS++
            $(`.bot`).text(botS)
            $(`.botunsecimi`).css('display', 'block').css('background-image','url("./qayci-removebg-preview.png")')
            $(`h3`).css('display','block')
        }
        clickOver()
    })
})

