
function fileextension(){


            let f1 = document.getElementById("f1").value;
            
            extension = f1.split('.').pop();

            
            document.getElementById("p1").innerHTML = `File Extension: ${extension}`;



            // window.location.pathname = f1;

}
