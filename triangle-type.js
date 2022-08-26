//Is triangle equilateral or isosceles or scalene

//Inputs 
//3 sides of triangle
let triangleSide1=10;
let triangleSide2=11;
let triangleSide3=11;
//3 angles of triangle
let triangleAngle1=10;
let triangleAngle2=11;
let triangleAngle3=11;

//Output
console.log(getTriangleType(triangleSide1,triangleSide2,triangleSide3,triangleAngle1,triangleAngle2,triangleAngle3));

//Function to get the triangle type
function getTriangleType(triangleSide1,triangleSide2,triangleSide3,triangleAngle1,triangleAngle2,triangleAngle3){
    if(triangleSide1===triangleSide2 && triangleSide2===triangleSide3 && triangleAngle1===triangleAngle2 && triangleAngle2===triangleAngle3){
        return "Equilateral Triangle";
    }else if(triangleSide1!=triangleSide2 && triangleSide2!=triangleSide3 && triangleSide1!=triangleSide3
          && triangleAngle1!=triangleAngle2 && triangleAngle2!=triangleAngle3 && triangleAngle1!=triangleAngle3){
        return "Scalene Triangle";
    }else if((triangleSide1===triangleSide2 || triangleSide2===triangleSide3 ||triangleSide1===triangleSide3 )&&
    (triangleAngle1===triangleAngle2 || triangleAngle2===triangleAngle3 || triangleAngle1===triangleAngle3)){
        return "Isosceles Triangle";
    }else{
        return "Unknown triangle type based on the inputs provided!";
    }
}