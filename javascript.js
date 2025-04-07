let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{
            if(e.target.innerHTML === '='){
                string = string.replace(/(\d+)\^(\d+)/g, (match, base, exponent) => {
                    return base + '**' + exponent; // Convert the exponentiation operator
                });
               
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML === 'AC'){
                string = "";
                document.querySelector('input').value = string;
            }
            else if(e.target.closest('#percent-button')){
                if(string){
                    let number = eval(string);
                    string = (number / 100).toString();
                    document.querySelector('input').value = string;
                }
                return;
            }
            
            // else if(e.target.closest('#plus-button')){
            //     if(string && !string.endsWith('+') && !string.endsWith('-') && !string.endsWith('*') && !string.endsWith('/')) {
            //         string += e.target.innerHTML;
            //     }
            //     document.querySelector('input').value = string;
            //  } return;
            //     else{
            //         string += e.target.innerHTML;
            //         document.querySelector('input').value = string;
            //     }
            else if(e.target.innerHTML === '⌫'){
                string = string.slice(0,-1);
                document.querySelector('input').value = string;
            }
            else{
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch(error){
            console.log(error);
            document.querySelector('input').value = 'Error';
        }
       
    });
})