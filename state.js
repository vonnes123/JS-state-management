export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
}
class State {
    constructor(state){
        this.state = state;
    }
}
export class StandingLeft extends State {
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(states.STANDING_RIGHT); // set state to StandingRight
        else if (input === 'PRESS down') this.player.setState(states.SITTING_LEFT);
    }
}
export class StandingRight extends State {
    constructor(player) {
        super("STANDING RIGHT");
        this.player = player;
    }
    enter() {
        this.player.frameY = 0;    
    }
    handleInput(input) {
        if(input === 'PRESS left') this.player.setState(states.STANDING_LEFT); //set state to StandingLeft
        else if (input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
    }
}
export class SittingLeft extends State {
  constructor(player) {
    super("Sitting LEFT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 9;
  }
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.SITTING_RIGHT); // set state to StandingRight
    else if (input === "PRESS up") this.player.setState(states.STANDING_LEFT); // set state to StandingRight
  }
}
export class SittingRight extends State {
  constructor(player) {
    super("Sitting RIGHT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 8;
  }
  handleInput(input) {
    if (input === "PRESS left")
      this.player.setState(states.SITTING_LEFT); // set state to StandingRight
    else if (input === "PRESS up") this.player.setState(states.STANDING_RIGHT); // set state to StandingRight
  }
}