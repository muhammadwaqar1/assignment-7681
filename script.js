const wereWe=()=>{
    alert(  window.location.href)
}
const goToGoogle=()=>{
    window.location.href="https://google.com"
}
const replaceUrl=()=>{
    window.location.replace("http://googel.com")
}
var popup =" "
const openPopup=()=>{
    popup = window.open("", "", "width=420, height=380");
}
const fillContentInPopup=()=>{
var popup =" "
popup = window.open("", "", "width=420, height=380");
popup.document.write("<h1>Muhammad Waqar </h1>")
}
const assignUrl=()=>{
    var popup =" "
    popup = window.open("", "", "width=420, height=380"); 
    popup.location.assign("http://google.com")
}
const closePopup=()=>{
    popup.close()
}
const alertt=()=>{
    try{
        alert("Muhammad Waqar")
    }
    catch(error){
        alert("somethig went wrong")
    }

}