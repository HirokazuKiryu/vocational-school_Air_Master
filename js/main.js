
//ハンバーガーメニュー

$('#btn_g_nav').on("click",function(){
    $('#btn_g_nav').toggleClass('open');
    $('#g_nav').toggleClass('open');
});

//FAQアコーディオン

$(".qa_list dd").hide();
$(".qa_list dl").on("click",function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});


