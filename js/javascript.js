//連碰
$(function(){
    //選球
    $(".contiWrap label").change(function(){
        $(this)
        .toggleClass("active");

        var contiN = $(".contiWrap input[type=checkbox]:checked").length;
        
        if(contiN >= 5)
        {
            $(".permutation")
            .attr("value",""+ permutation(contiN,5) +"");

            $(".moneyWindow,.money")
            .addClass("active")
        }
        else
        {
            $(".permutation")
            .attr("value","");

            $(".moneyWindow,.money")
            .removeClass("active")

            $(".money")
            .val("0");

            $(".total")
            .attr("value","0");
        }
    })

    //清除
    $(".clear").click(function(){
        $(".contiWrap input[type=checkbox]")
        .prop("checked",false);

        $(".permutation")
        .attr("value","");

        $(".contiWrap label")
        .removeClass("active");

        $(".moneyWindow,.money")
        .removeClass("active")

        $(".money")
        .val("0");

        $(".total")
        .attr("value","0");
    })

    //單雙選擇
    $(".odd").click(function(){
        $(".contiWrap label:odd")
        .toggleClass("active");
    })
    $(".even").click(function(){
        $(".contiWrap label:even")
        .toggleClass("active");
    })

    //大小選擇
    $(".big").click(function(){
        $(".contiWrap label:gt(18)")
        .toggleClass("active");
    })
    $(".small").click(function(){
        $(".contiWrap label:lt(19)")
        .toggleClass("active");
    })

    //頭選擇
    $(".head").click(function(){
        var n = $(this).index();

        $(".contiWrap li:eq("+ n +") label:not(:last-child)")
        .toggleClass("active");

        if(n > 0)
        {
            $(".contiWrap li:eq("+ (n - 1) +") label:last")
            .toggleClass("active");
        }
    })

    //尾選擇
    $(".foot").click(function(){
        var n = $(this).index();

        $($(".contiWrap li").find("label:eq("+ (n - 1) +")"))
        .toggleClass("active");
    })

    //快速輸入
    $(".fastInput").keydown(function(event){
        if(event.which === 13)
        {
            var n = $(".fastInput").val();
            var num = parseInt(n);

            $(".contiWrap label:eq("+ (num - 1) +")")
            .addClass("active");

            $(".fastInput")
            .val("");
        }
    })

    //每碰金額
    $(".money").focus(function(){
        $(this)
        .val("");
    })
})

//連碰階層設定
function fraction(n) {
    if(n === 0)
    {
        return 1;
    }
    return n * fraction(n - 1);
}
function permutation(c,n) {
    return fraction(c) / (fraction(n) * fraction(c - n));
}

//每碰金額輸入連乘
function moneyInput() {
    var contiN = $(".contiWrap input[type=checkbox]:checked").length;
    var group = permutation(contiN,5);
    var multiplier = parseInt($(".money").val());

    $(".total")
    .attr("value",""+ multiplier * group +"");
}