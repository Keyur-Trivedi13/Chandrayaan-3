//First we will create Rocket class which will call the methods for rotating the rocket and changing its co-ordinates 
class Rocket
{
    constructor(current_position,intial_direction)
    {
        //we are intialzing rocket coordinates and direction at start time
        this.rocket_position=current_position;
        this.rocket_direction=intial_direction;
        this.rocket_temp_direction="N";//this direction will be useful In Up And Down operation
    }
    //we will be calling this method when we will receive 'f' word from character array
    Move_Forward()
    {   
        //set the coordinates of rocket according to current direction
        if(this.rocket_direction=="N")
        {
            this.rocket_position[1]++;
        }
        else if(this.rocket_direction=="S")
        {
            this.rocket_position[1]--;
        }
        else if(this.rocket_direction=="E")
        {
            this.rocket_position[0]++;
        }
        else if(this.rocket_direction=="W")
        {
            this.rocket_position[0]--;
        }
        else if(this.rocket_direction=="U")
        {
            this.rocket_position[2]++;
        }   
        else if(this.rocket_direction=="D")
        {
            this.rocket_position[2]--;
        }
    }
    //we will be calling this method when we will receive 'b' word from character array
    Move_Backward()
    {   
        //set the coordinates of rocket according to current direction
        if(this.rocket_direction=="N")
        {
            this.rocket_position[1]--;
        }
        else if(this.rocket_direction=="S")
        {
            this.rocket_position[1]++;
        }
        else if(this.rocket_direction=="E")
        {
            this.rocket_position[0]--;
        }
        else if(this.rocket_direction=="W")
        {
            this.rocket_position[0]++;
        }
        else if(this.rocket_direction=="U")
        {
            this.rocket_position[2]--;
        }   
        else if(this.rocket_direction=="D")
        {
            this.rocket_position[2]++;
        }
    }
    //we will be calling this method when we will receive 'r' word from character array
    Turn_Right()
    {   
        //set the direction of rocket according to current direction
        if(this.rocket_direction=="N")
        {
            this.rocket_direction="E";
        }
        else if(this.rocket_direction=="S")
        {
            this.rocket_direction="W";
        }
        else if(this.rocket_direction=="E")
        {
            this.rocket_direction="S";
        }
        else if(this.rocket_direction=="W")
        {
            this.rocket_direction="N";
        }
        else if(this.rocket_direction=="U")
        {
            this.rocket_direction="S";
        }
        else if(this.rocket_direction=="D")
        {
            this.rocket_direction="N";
        }
    }
    //we will be calling this method when we will receive 'l' word from character array
    Turn_Left()
    {   
        //set the direction of rocket according to current direction
        if(this.rocket_direction=="N")
        {
            this.rocket_direction="W";
        }
        else if(this.rocket_direction=="S")
        {
            this.rocket_direction="E";
        }
        else if(this.rocket_direction=="E")
        {
            this.rocket_direction="N";
        }
        else if(this.rocket_direction=="W")
        {
            this.rocket_direction="S";
        }
        else if(this.rocket_direction=="U")
        {
            this.rocket_direction="N";
        }
        else if(this.rocket_direction=="D")
        {
            this.rocket_direction="S";
        }
    }
    //we will be calling this method when we will receive 'u' word from character array
    Rotate_Up()
    {
        if(this.rocket_direction!="U")
        {
            this.rocket_temp_direction=this.rocket_direction;
            this.rocket_direction="U";
        }
    }
    //we will be calling this method when we will receive 'd' word from character array
    Rotate_Down()
    {
        if(this.rocket_direction!="D")
        {
            this.rocket_temp_direction=this.rocket_direction;
            this.rocket_direction="D";
        }
    }
}
module.exports= Rocket;
