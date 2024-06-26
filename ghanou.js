let count = 0;

const countDisplay = document.getElementById('display');
const countDisp = document.getElementById('disp');
const countDis = document.getElementById('dis');
const countDi = document.getElementById('di');

function sobh(){
  'use strict';
document.getElementById("tsbih").classList.add("hide");
document.getElementById("masa").classList.add("hide");
document.getElementById("sobh").classList.remove("hide");

}

function masa(){
  'use strict';
    document.getElementById("tsbih").classList.add("hide");
    document.getElementById("sobh").classList.add("hide");
    document.getElementById("masa").classList.remove("hide");
    }
function tsbih(){
  'use strict';
      document.getElementById("sobh").classList.add("hide");
      document.getElementById("masa").classList.add("hide");
      document.getElementById("tsbih").classList.remove("hide");
      }

function counter(){
  'use strict';
    count++;

    countDisplay.textContent = count;
    countDisp.textContent = count;
    countDis.textContent = count;
    countDi.textContent = count;
    
  }

 

  // Function to reset the counter
  function reset(){
    'use strict';
    count = 0;
    countDisplay.textContent = count;
    countDisp.textContent = count;
    countDis.textContent = count;
    countDi.textContent = count;
  }
