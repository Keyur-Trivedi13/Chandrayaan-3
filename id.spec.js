//first we are immporting Rocket class from Rocket.js
const Rocket=require('./Rocket');

//using describe we will divide our tests into sections
describe('Chandrayaan 3 Test Case 1 Launch',()=>
{
    const rocket=new Rocket([0,0,0],'N');
    const commands=["f","r","u","b","l"];
    for(var i=0;i<=commands.length-1;i++)
    {
      //we will be checking every character to do operation based on command received
      if(commands[i]=="f")
      {
        test('Move forward',()=>
        {
            rocket.Move_Forward();
        })
      }
      else if(commands[i]=="b")
      {
        test('Move Backward',()=>{
          rocket.Move_Backward();
        });
      }
      else if(commands[i]=="r")
      {
        test('Turn Right',()=>{
          rocket.Turn_Right();
        });
      }
      else if(commands[i]=="l")
      {
        test('Turn Left',()=>{
          rocket.Turn_Left();
        });
      }
      else if(commands[i]=="u")
      {
        test('Turn Up',()=>{
          rocket.Rotate_Up();
        });
      }
      else if(commands[i]=="d")
      {
        test('Turn Down',()=>{
          rocket.Rotate_Down();
        });
      }
    }  
    /*After all is method of JEST which will be useful and will be called when all test case for code is completed so in last
    we will get our required position and direction*/
    afterAll(() => {
      console.log('Final Position: ', rocket.rocket_position);
      console.log('Final Direction: ', rocket.rocket_direction);
  });
})
describe('Chandrayaan 3 Test Case 2 Launch',()=>
{
    const rocket=new Rocket([4,0,2],'E');
    const commands=["f","r","u","b","l",'d'];
    for(var i=0;i<=commands.length-1;i++)
    {
      //we will be checking every character to do operation based on command received
      if(commands[i]=="f")
      {
        test('Move forward',()=>
        {
            rocket.Move_Forward();
        })
      }
      else if(commands[i]=="b")
      {
        test('Move Backward',()=>{
          rocket.Move_Backward();
        });
      }
      else if(commands[i]=="r")
      {
        test('Turn Right',()=>{
          rocket.Turn_Right();
        });
      }
      else if(commands[i]=="l")
      {
        test('Turn Left',()=>{
          rocket.Turn_Left();
        });
      }
      else if(commands[i]=="u")
      {
        test('Turn Up',()=>{
          rocket.Rotate_Up();
        });
      }
      else if(commands[i]=="d")
      {
        test('Turn Down',()=>{
          rocket.Rotate_Down();
        });
      }
    }  
    /*After all is method of JEST which will be useful and will be called when all test case for code is completed so in last
    we will get our required position and direction*/
    afterAll(() => {
      console.log('Final Position: ', rocket.rocket_position);
      console.log('Final Direction: ', rocket.rocket_direction);
  });
})
