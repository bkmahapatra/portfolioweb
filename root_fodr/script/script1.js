/* ======================NAVBAR======================== */

$(".menu__btn").click(()=>{
   
    $(".nav__menu").addClass("menu__show");

})
$(".menu__close").click(()=>{
    $(".nav__menu").removeClass("menu__show");
})

/* ======================HOME======================== */

/* ======================ABOUT======================== */
let s1=false;
$(".skill1 .skill__heading").click(()=>{
    if(s1==true){
        $(".skill1 .skill__list").removeClass("skill__deactive");
        $(".skill1 .skill_arrow").addClass("arrow__rotate");
        s1=false;
    }else{
        $(".skill1 .skill__list").addClass("skill__deactive");
        $(".skill1 .skill_arrow").removeClass("arrow__rotate");
        s1=true;
    }
});


let s2=true;
$(".skill2 .skill__heading").click(()=>{
    if(s2==true){
        $(".skill2 .skill__list").removeClass("skill__deactive");
        $(".skill2 .skill_arrow").addClass("arrow__rotate");
        s2=false;
    }else{
        $(".skill2 .skill__list").addClass("skill__deactive");
        $(".skill2 .skill_arrow").removeClass("arrow__rotate");

        s2=true;
    }
});

let s3=true;
$(".skill3 .skill__heading").click(()=>{
    if(s3==true){
        $(".skill3 .skill__list").removeClass("skill__deactive");
        $(".skill3 .skill_arrow").addClass("arrow__rotate");
        s3=false;
    }else{
        $(".skill3 .skill__list").addClass("skill__deactive");
        $(".skill3 .skill_arrow").removeClass("arrow__rotate");

        s3=true;
    }
});
$(".skill3 .skill_arrow").click(()=>{
    $(".skill1 .skill__list").removeClass("skill__deactive");
});
/* ======================SKILLS======================== */

/* ======================QUALIFICATION======================== */

/* ======================PORTFOLIO======================== */

/* ======================CONTACTME======================== */

/* ======================FOOTER======================== */
