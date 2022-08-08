const pressed = [];
const secretKey = 'arbin sh restha';


window.addEventListener('keyup',(e)=>{

    pressed.push(e.key); //push the pressed key into the empty array 
    pressed.splice(-secretKey.length-1, pressed.length - secretKey.length); 
    /* 
    1.splice adds array elements
    2.takes the length of the secretKey from the back
    3.differentiate pressed key length and secret key length    
    */

    if(pressed.join('').includes(secretKey)){   //joins the array into a string, if secret key is included then go inside the condition
        console.log('DING DING!')
        cornify_add()
    }
    console.log(pressed)
})