//First we will create Rocket class which will call the methods for rotating the rocket and changing its co-ordinates 
class Rocket
{
    Rocket(current_position,intial_direction)
    {
        //we are intialzing rocket coordinates and direction at start time
        this.rocket_position=current_position;
        this.rocket_direction=intial_direction;
    }
    //we will be calling this method when we will receive 'f' word from character array
    move_Forward()
    {   
        //set the coordinates of rocket according to current direction
        if(this.rocket_direction=="N")
        {
            this.rocket_position[1]++;//Y-coordinate--North
        }
        else if(this.rocket_direction="S")
        {
            this.rocket_position[1]--;//Y-coordinate--South
        }
        else if(this.rocket_direction=="E")
        {
            this.rocket_direction[0]++;//X-coordinate--East
        }
        else if(this.rocket_direction=="W")
        {
            this.rocket_direction[0]++;//X-coordinate--West
        }
        else if(this.rocket_direction=="Up")
        {
            this.rocket_direction[2]++;//Z-coordinate--Up
        }   
        else if(this.rocket_direction=="Down")
        {
            this.rocket_direction[2]--;//Z-coordinate--Down
        }
    }
    //we will be calling this method when we will receive 'b' word from character array
    move_backward()
    {   
        //set the coordinates of rocket according to current direction
        if(this.rocket_direction=="N")
        {
            this.rocket_position[1]++;//Y-coordinate--South
        }
        else if(this.rocket_direction="S")
        {
            this.rocket_position[1]--;//Y-coordinate--North
        }
        else if(this.rocket_direction=="E")
        {
            this.rocket_direction[0]++;//X-coordinate--West
        }
        else if(this.rocket_direction=="W")
        {
            this.rocket_direction[0]++;//X-coordinate--East
        }
        else if(this.rocket_direction=="Up")
        {
            this.rocket_direction[2]--;//Z-coordinate--down
        }   
        else if(this.rocket_direction=="Down")
        {
            this.rocket_direction[2]++;//Z-coordinate--UP
        }
    }
}