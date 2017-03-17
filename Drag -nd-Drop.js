function doFirst(){
    mypic = document.getElementById("facepic");
    mypic.addEventListener("dragstart",startDrag,false);
    //mypic.addEventListener("dragend",endDrag,false);
    leftbox = document.getElementById('leftbox');
    //leftbox.addEventListener("dragenter",dragenter,false);
    //leftbox.addEventListener("dragleave",dragleave,false);
    leftbox.addEventListener("dragenter",function(e){e.preventDefault();},false);
    leftbox.addEventListener("dragover",function(e){e.preventDefault();},false);
    leftbox.addEventListener("drop",dropped,false);
}

function startDrag(e){
    var code = '<img src="img/12243092_1111716348838703_7926473316122313843_n.jpg"/>';
    e.dataTransfer.setData('Text',code);
}
function dropped(e){
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load",doFirst,false);