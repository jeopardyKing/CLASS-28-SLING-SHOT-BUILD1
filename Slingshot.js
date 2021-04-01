class Slingshot{
    constructor(bodyA,pointB){

        //all properties under Constraint 
        //bodyA and bodyB are the fixed syntax for constrain between two bodies
        //stiffness property decides obviosly, the stiffness of thread connecting two bodies
        //length property assigns the length of that thread  
        
        var x = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 10
        }
    
        //this is synatx to creare a Constraint
        //x is variable storing all properties 
          this.pointB=pointB;
         this.sling = Constraint.create(x);
         World.add(world,this.sling);
    }

    fly(){
        //null states nothing in js
       this.sling.bodyA=null
    }

    display(){
    
        // if condition to state that the sling.bodyA isnt null 
    if(this.sling.bodyA){
    //namespacing
      var posA=this.sling.bodyA.position;
       var posB=this.pointB;

        //displaying this
     strokeWeight(5);
    stroke(0);
     line(posA.x,posA.y,posB.x,posB.y);
    }

        
    }
}