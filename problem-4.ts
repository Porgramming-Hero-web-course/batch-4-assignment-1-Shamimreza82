{
    //

    type Circle = {
        shape: "circle";  
        radius: number
    }

    type Rectangle = {
        shape: "rectangle"; 
        width: number; 
        height : number; 
    }

    type Shape = Circle | Rectangle 


    const calculateShapeArea = (value: Shape): number => {
        if(value.shape === "circle"){
            return Math.PI * (value.radius ** 2)
        } else if (value.shape === "rectangle") {
            return value.width * value.height; 
        }
    }


console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  }));


console.log(calculateShapeArea({ shape: "circle", radius: 5 }));


    //
}