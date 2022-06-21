//階層設定
function fraction(n) {
    if(n <= 0)
    {
        return 1;
    }
    return n * fraction(n - 1);
}
function permutation(c,n) {
    return fraction(c) / (fraction(n) * fraction(c - n));
}

//清除設定
function clear() {
    $(".ballWrap input[type=checkbox]")
    .prop("checked",false);

    $(".ballWrap label")
    .removeClass("active");

    $(".permutation")
    .attr("value","");

    $(".moneyWindow,.money")
    .removeClass("active")

    $(".money")
    .val("0");

    $(".total")
    .attr("value","0");

    $(".multiWrap li:eq(0)")
    .addClass("active")
    .siblings().removeClass("active");

    $(".multiWrap .box p")
    .remove();
}

export {permutation};
export {clear};