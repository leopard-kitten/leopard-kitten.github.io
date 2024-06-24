$("a").each(function(){
    $(this).prepend("<img src=" + this.href + "/favicon.ico>");
})
