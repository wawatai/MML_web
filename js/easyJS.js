//簡單
$(function(){
    //選球
    $(".easy .leftBox label").change(function(){
        $(this)
        .toggleClass("active");

        var tens = $(this).closest("li").index();
        var digits = $(this).index();
        var num = ((tens - 1) * 10) + (digits - 1);
        var numString = num.toString();

        if(!$(".easy .rightBox.conti p:contains("+ (0 + numString) +")").length && num < 10)
        {
            $(".easy .rightBox.conti .num")
            .append("<p>"+ (0 + numString) +"</p>");
        }
        else if($(".easy .rightBox.conti p:contains("+ (0 + numString) +")").length)
        {
            $(".easy .rightBox.conti p:contains("+ (0 + numString) +")")
            .remove();
        }
        else if(!$(".easy .rightBox.conti p:contains("+ num +")").length)
        {
            $(".easy .rightBox.conti .num")
            .append("<p>"+ num +"</p>");
        }
        else
        {
            $(".easy .rightBox.conti p:contains("+ num +")")
            .remove();
        }
    })

    //鍵盤輸入
    $(".easy .easyInput").keydown(function(e){
        if(e.which === 13)
        {
            var textVal = $(".easy .easyInput").val();
            var valString = textVal.toString();
            
            if(!$(".easy .rightBox.conti p:contains("+ (0 + valString) +")").length && textVal < 10)
            {
                $(".easy .rightBox.conti .num")
                .append("<p>"+ (0 + valString) +"</p>");
            }
            else if(!$(".easy .rightBox.conti p:contains("+ textVal +")").length)
            {
                $(".easy .rightBox.conti .num")
                .append("<p>"+ textVal +"</p>");
            }

            $(".easy .easyInput")
            .val("");
        }
    })

    //換柱
    $(".easy .turnMode").click(function(){
        
    })
})