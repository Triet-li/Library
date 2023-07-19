# Library

I haven't optimized this code yet, and the styles are not very good too( cause I'm lazy )


- My notes on this project

1. You can add event listeners inside function ( inside loops ) and they still work ( detect ) afterward

2. You can pass as many arguments as you want to the callback function ( function in event listener ), including the event object that reference the event.

3. <node>.parentNode.removeChild(<node>): remove itself

  while(node[0])
   <node[0]>.parentNode.removeChild(<node[0]>) : remove list of nodes
   
 
4.  
  + Take value in <input>: <target>.value
  + Take value in button or other tags: <target>.textContent (maybe)
