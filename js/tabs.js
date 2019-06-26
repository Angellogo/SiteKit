
function openProject(evtn, nombreEvent) {
        var i, tabcontenedor, tablinks;

        tabcontenedor = document.getElementsByClassName("tabcontenedor");
        for (i = 0; i < tabcontenedor.length; i++) {
            tabcontenedor[i].style.display = "none";
        }
        
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        document.getElementById(nombreEvent).style.display = "block";
        evtn.currentTarget.className += " active";
      }