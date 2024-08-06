let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
function but(){
let result = confirm("enem betam new yemwdshe enate");
            if (result === true) {
 
                document.getElementById("add").textContent = 
                "amsgenalhu destgia argeshalhu kale new";
                console.log("amsgenalhu destgia argeshalhu kale new");
            }
          }
    
function butt(){
let result = confirm("eshi wesaneshen akebralhu");
            if (result === true) {
 
                document.getElementById("add").textContent = 
                "amsgenalhu";
                console.log("amsgenalhu");
            }
          }