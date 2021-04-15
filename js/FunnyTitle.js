 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '这就要抛弃我了吗？';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '小哥哥，小姐姐快来玩啊！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });