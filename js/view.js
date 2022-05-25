window.onload = function(){

var mainBody = document.body;
    
var container_f = document.createElement("div");
mainBody.appendChild(container_f);
container_f.className = "container-fluid header";
    
var contnr = document.createElement("div");
container_f.appendChild(contnr);
contnr.className = "container";
    
var rw = document.createElement("div");
contnr.appendChild(rw);
rw.className = "row";
    
var outer_flex = document.createElement("div");
rw.appendChild(outer_flex);
outer_flex.className = "outer-flex";
    
var left_h = document.createElement("div");
outer_flex.appendChild(left_h);
left_h.className = "left-header";
    
var logo = document.createElement("img");
left_h.appendChild(logo);
logo.src = "img/logo.png";
    
var center_h = document.createElement("div");
outer_flex.appendChild(center_h);
center_h.className = "center-header";
  
for(var i=0; i<navigation.length; i++){
    
var list_a = document.createElement("a");
center_h.appendChild(list_a);
list_a.href = "#";
list_a.innerHTML = navigation[i];    
}
    
var right_h = document.createElement("div");
outer_flex.appendChild(right_h);
right_h.className = "right-header";
    
for(var i=0; i<socialIcon.length; i++){
     
var icon = document.createElement("i");
right_h.appendChild(icon);
icon.className = socialIcon[i];
    
}

var container_f_banner = document.createElement("div");
mainBody.appendChild(container_f_banner);
container_f_banner.className = "container-fluid banner";
    
var contnr_banner = document.createElement("div");
container_f_banner.appendChild(contnr_banner);
contnr_banner.className = "container";
    
var rw_banner = document.createElement("div");
contnr_banner.appendChild(rw_banner);
rw_banner.className = "row data";
    
var banner_img = document.createElement("img");
rw_banner.appendChild(banner_img);
banner_img.src = "img/" + banner[0];
    
var banner_content = document.createElement("div");
rw_banner.appendChild(banner_content);
banner_content.className = "banner-content";
    
var banner_h4 = document.createElement("h4");
banner_content.appendChild(banner_h4);
banner_h4.innerHTML = "welcome to our online store";
banner_h4.id = "head4";
    
var banner_h1 = document.createElement("h1");
banner_content.appendChild(banner_h1);
banner_h1.innerHTML = "GROCERY STORE";
banner_h1.id = "head1";
    
var banner_h2 = document.createElement("h2");
banner_content.appendChild(banner_h2);
banner_h2.innerHTML = "FOR TRUE GOURMETS";
banner_h2.id = "head2";
    
var banner_a = document.createElement("a");
banner_content.appendChild(banner_a);
banner_a.innerHTML = "SHOP NOW";
banner_a.href = "#";
banner_a.id = "btn1";
    
    
    
    
    
    
}





















