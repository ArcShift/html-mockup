var openBtn= document.getElementById('openBtn');
var closeBtn= document.getElementById('closeBtn');
var searchBar= document.getElementById('searchBar');
var newsSlide= document.getElementById('newsSlide');
var currentSlide= newsSlide.firstElementChild;
slide(0);
function openSearch(){
  searchBar.style.visibility="visible";
  openBtn.style.visibility="hidden";
  closeBtn.style.visibility="visible";
}
function closeSearch(){
  searchBar.style.visibility="hidden";
  openBtn.style.visibility="visible";
  closeBtn.style.visibility="hidden";
}
function slide(index){
  currentSlide.style.display='none';
  currentSlide=newsSlide.children[index]
  currentSlide.style.display='inline-table';
}
var group=document.getElementById('groupList');
function loadList(obj){
  for(var i=0;i<10;i++){
    var child=group.children[9];
    var c=child.cloneNode(true);
    var img=c.children[0].children[0];
    var title=c.children[0].children[1];
    group.appendChild(c);
    console.log(title);
  }
  obj.style.display='none';
  
}