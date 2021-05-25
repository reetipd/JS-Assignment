var Animation = function(frame_set, delay){
    this.count = 0; //counts number of game cycles since last changed frame
    this.delay = delay; //number of cycles to wait for next frame change
    this.frame = 0; //to be display(image)
    this.frame_index = 0; //index of the frame in animation frame set
    this.frame_set = frame_set; //current animation frame_Set


    //change the animataion frame set on the basis of player's action!
    this.change = function(frame_set,delay = 15){
        if(this.frame_set !== frame_set) {  //new frameset ant current framset are not equal
            
            this.count = 0;
            this.delay = delay;
            this.frame_index = 0;
            this.frame_set = frame_set;
            this.frame = this.frame_set[this.frame_index];
        }
    }


    //call this on each game cycle.
    this.update = function(){

        this.count ++ ; //keep track of how many cycles has passed to chnage the frame

        if(this.count >= this.delay){

            this.count = 0; //reset
            this.frame_index = (this.frame_index === this.frame_set.length - 1) ? 0 : this.frame_index + 1;
            this.frame = this.frame_set[this.frame_index];
        }
    }
};