# SpeedBoat Rescue 🛥️


### Background 
An interactive visual experience where the user will control a speedboat in the ocean, navigating the ocean waves while rescuing swimmers along its journey. Impacts will allow player to score points if you will, based on the amount of rescuees picked up. 

The intent of this isn't to provide a challenging or competitive game experience, but something relaxing and visually pleasing that feels as good as possible to the player. Enjoy the etch-a-sketch feel as you create your own unique wake on this adventure.

***

### Functionality and MVPs
In Speedboat Rescue, users will be able to:
- Use keys input to move around a 'Speedboat', with fine control of velocity.
- Navigate a randomly generated ocean filled with orange lifesavers for rescue.
- Email a screenshot of their unique wake to themselves.
In addition, this project will include: 
- A production README

***

### Technologies, Libraries, and APIs
As of now, the project only uses basic canvas functionality. But as the project grows in complexity, I'd like to take a look at libraries that create a more Arcade game feel.

#### Main Considerations
- [Paper.js](http://paperjs.org/about/)
- [ThreeJS](https://threejs.org/)

***

### Implementation Timeline
My overall goals for the project involve the implementation of the following features
- Responsive and enjoyable movement based on key input 
- A dynamic camera that follows the player based on the Speedboat velocity for optimal game feel
- Robust and responsive physics when it comes to control of the Speedboat

#### My timeline is as follows
- **Friday & Weekend**: Refactor the project so far to fit our setup guildeines. Dig into the various libraries I'm interested in andmI also want to create a functional prototype of key-input movement, physics, and camera movement. 
- **Monday**: Get basic map generation functionality in place and tweak the camera accordingly to allow for seamless, unbounded movement on the 2D plane
- **Tuesday / Wednesday / Thursday**: Once I have the above in place, the rest of my time is going to be an intensely iterative process of tweaking the following: 
   * player movement and camera to have the best game feel possible. Responsiveness and sense of motion are the most important factors 
   * the visual effects for swimmers. These will be the main jolts of dopemine the game is meant to provide, and the visuals can always be scaled and tweaked
   *  physics to tow the line between being engaging to navigate with the player object without being frustrating
***

## Bonus Features
A stretch goal is implementing a JS library that allows for the game to appear more modern